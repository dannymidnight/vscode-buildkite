import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import * as vscode from "vscode";
import { BuildkiteTreeQuery } from "./__generated__/BuildkiteTreeQuery";
import { UserBuildsQuery } from "./__generated__/UserBuildsQuery";
import { PipelineFragment } from "./models/__generated__/PipelineFragment";
import Build from "./models/Build";
import Node from "./models/Node";
import Organization from "./models/Organization";
import Pipeline from "./models/Pipeline";

const REFRESH_INTERVAL = 30000;

export default class BuildkiteProvider
  implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> = new vscode.EventEmitter();
  public readonly onDidChangeTreeData: vscode.Event<Node | null> = this
    ._onDidChangeTreeData.event;
  private readonly timer: NodeJS.Timer;

  constructor(private client: GraphQLClient) {
    this.timer = setInterval(() => this.refresh(), REFRESH_INTERVAL);
  }

  refresh() {
    this._onDidChangeTreeData.fire(null);
  }

  dispose() {
    clearInterval(this.timer);
  }

  private readonly query = gql`
    ${Build.Fragment}
    ${Pipeline.Fragment}
    ${Organization.Fragment}

    query BuildkiteTreeQuery {
      viewer {
        organizations {
          count
          edges {
            node {
              ...OrganizationFragment
              pipelines(first: 50) {
                count
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

    const result = this.client.request<BuildkiteTreeQuery>(print(this.query));

    return Promise.resolve(result).then(data => {
      return data.viewer!.organizations!.edges!.map(org => {
        const pipelines = org!.node!.pipelines!.edges!.map(p => {
          const builds = p!.node!.builds!.edges!.map(b => {
            return new Build(b!.node!);
          });
          return new Pipeline(p!.node!, builds);
        });
        return new Organization(org!.node!, pipelines);
      });
    });
  }
}

export class UserBuildsProvider implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> = new vscode.EventEmitter();
  public readonly onDidChangeTreeData: vscode.Event<Node | null> = this
    ._onDidChangeTreeData.event;
  private readonly timer: NodeJS.Timer;

  constructor(private client: GraphQLClient) {
    this.timer = setInterval(() => this.refresh(), REFRESH_INTERVAL);
  }

  refresh() {
    this._onDidChangeTreeData.fire(null);
  }

  dispose() {
    clearInterval(this.timer);
  }

  private readonly query = gql`
    ${Build.Fragment}

    query UserBuildsQuery {
      viewer {
        user {
          avatar {
            url
          }
          builds(first: 100) {
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

    const result = this.client.request<UserBuildsQuery>(print(this.query));

    return Promise.resolve(result).then(data => {
      const pipelines = new Map();

      data.viewer!.user!.builds!.edges!.forEach(b => {
        const name = b!.node!.pipeline!.name;
        const build = new Build(b!.node!);

        if (!pipelines.has(name)) {
          pipelines.set(
            name,
            new Pipeline(<PipelineFragment>{ name }, [build], build.iconPath())
          );
        } else {
          pipelines.get(name).builds.push(build);
        }
      });

      return Array.from(pipelines.values());
    });
  }
}
