import { ClientError, GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { setInterval } from "timers";
import * as vscode from "vscode";
import { BuildkiteTreeQuery } from "./__generated__/BuildkiteTreeQuery";
import { UserBuildsQuery } from "./__generated__/UserBuildsQuery";
import { PipelineFragment } from "./models/__generated__/PipelineFragment";
import Build from "./models/Build";
import Node from "./models/Node";
import Organization from "./models/Organization";
import Pipeline from "./models/Pipeline";
import { LatestBuildQuery } from "./__generated__/LatestBuildQuery";

export default class BuildkiteProvider
  implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> = new vscode.EventEmitter();
  public readonly onDidChangeTreeData: vscode.Event<Node | null> = this
    ._onDidChangeTreeData.event;
  private readonly timer?: NodeJS.Timer;

  constructor(private clientFactory: () => GraphQLClient) {
    const {
      pollBuildkiteEnabled,
      pollBuildkiteInterval
    } = vscode.workspace.getConfiguration("buildkite");
    if (pollBuildkiteEnabled) {
      this.timer = setInterval(() => this.refresh(), pollBuildkiteInterval);
    }
  }

  refresh() {
    this._onDidChangeTreeData.fire(null);
  }

  dispose() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private readonly query = gql`
    ${Build.Fragment}
    ${Pipeline.Fragment}
    ${Organization.Fragment}

    query BuildkiteTreeQuery {
      viewer {
        organizations {
          edges {
            node {
              ...OrganizationFragment
              pipelines(first: 500) {
                edges {
                  node {
                    ...PipelineFragment
                    builds(first: 5) {
                      count
                      edges {
                        node {
                          ...BuildFragment
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  getTreeItem(element: Node): vscode.TreeItem {
    return element.getTreeItem();
  }

  getChildren(element?: Node): Thenable<Node[]> | Node[] {
    if (element) {
      return element.getChildren();
    }

    const client = this.clientFactory();
    const result = client.request<BuildkiteTreeQuery>(print(this.query));

    return result
      .then(data => {
        return data.viewer!.organizations!.edges!.map(org => {
          const pipelines = org!.node!.pipelines!.edges!.map(p => {
            const builds = p!.node!.builds!.edges!.map(b => {
              return new Build(b!.node!);
            });
            return new Pipeline(p!.node!, builds);
          });
          return new Organization(org!.node!, pipelines);
        });
      })
      .catch(e => {
        return handleError(e);
      });
  }
}

export class UserBuildsProvider implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> = new vscode.EventEmitter();
  public readonly onDidChangeTreeData: vscode.Event<Node | null> = this
    ._onDidChangeTreeData.event;
  private readonly timer?: NodeJS.Timer;

  constructor(private clientFactory: () => GraphQLClient) {
    const {
      pollBuildkiteEnabled,
      pollBuildkiteInterval
    } = vscode.workspace.getConfiguration("buildkite");
    if (pollBuildkiteEnabled) {
      this.timer = setInterval(() => this.refresh(), pollBuildkiteInterval);
    }
  }

  refresh() {
    this._onDidChangeTreeData.fire(null);
  }

  dispose() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private readonly query = gql`
    ${Build.Fragment}

    query UserBuildsQuery {
      viewer {
        user {
          avatar {
            url
          }
          builds(first: 50) {
            edges {
              node {
                ...BuildFragment
              }
            }
          }
        }
      }
    }
  `;

  getTreeItem(element: Node): vscode.TreeItem {
    return element.getTreeItem();
  }

  getChildren(element?: Node): Thenable<Node[]> | Node[] {
    if (element) {
      return element.getChildren();
    }

    const client = this.clientFactory();
    const result = client.request<UserBuildsQuery>(print(this.query));

    return result
      .then(data => {
        const pipelines = new Map();

        data.viewer!.user!.builds!.edges!.forEach(b => {
          const name = b!.node!.pipeline!.name;
          const build = new Build(b!.node!);

          if (!pipelines.has(name)) {
            pipelines.set(
              name,
              new Pipeline(
                <PipelineFragment>{ name },
                [build],
                build.iconPath()
              )
            );
          } else {
            pipelines.get(name).builds.push(build);
          }
        });

        return Array.from(pipelines.values());
      })
      .catch(e => {
        return handleError(e);
      });
  }
}

export class LatestBuildProovider {
  private _onChangeEmitter: vscode.EventEmitter<Node | null> = new vscode.EventEmitter();
  public readonly onChange: vscode.Event<Node | null> = this._onChangeEmitter
    .event;

  private readonly timer?: NodeJS.Timer;

  constructor(private clientFactory: () => GraphQLClient) {
    const {
      pollBuildkiteEnabled,
      pollBuildkiteInterval
    } = vscode.workspace.getConfiguration("buildkite");
    if (pollBuildkiteEnabled) {
      this.timer = setInterval(() => this.refresh(), pollBuildkiteInterval);
    }
  }

  refresh() {
    this._onChangeEmitter.fire(null);
  }

  dispose() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private readonly query = gql`
    ${Build.Fragment}

    query LatestBuildQuery {
      viewer {
        user {
          builds(first: 1) {
            edges {
              node {
                ...BuildFragment
              }
            }
          }
        }
      }
    }
  `;

  async getLatestBuild(): Promise<Build[]> {
    const client = this.clientFactory();
    const result = await client.request<LatestBuildQuery>(print(this.query));

    return result.viewer!.user!.builds!.edges!.map(b => {
      return new Build(b!.node!);
    });
  }
}

function handleError(e: Error) {
  const msg = errorMessage(e);

  if (msg === "Authorization failed") {
    return Promise.reject(new Error(`Buildkite: ${msg}`));
  }

  return Promise.reject(e);
}

function isClientError(e: Error | ClientError): e is ClientError {
  return (<ClientError>e).request !== undefined;
}

function errorMessage(e: Error | ClientError): string {
  if (isClientError(e)) {
    return e.response.errors![0].message;
  } else {
    return e.message;
  }
}
