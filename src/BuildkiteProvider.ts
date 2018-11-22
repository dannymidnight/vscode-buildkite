import * as vscode from "vscode";
import * as path from "path";
import * as moment from "moment";
import gql from "graphql-tag";
import { BuildkiteTreeQuery } from "./__generated__/BuildkiteTreeQuery";
import { BuildStates } from "./__generated__/globalTypes";
import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";

type BuildkiteItem = Organization | Pipeline | Build;

export default class BuildkiteProvider
  implements vscode.TreeDataProvider<BuildkiteItem> {
  onDidChangeTreeData?: vscode.Event<any> | undefined;

  getTreeItem(element: BuildkiteItem): vscode.TreeItem {
    return element;
  }

  getChildren(
    element?: BuildkiteItem
  ): Thenable<BuildkiteItem[]> | BuildkiteItem[] {
    if (element) {
      if (element instanceof Organization) {
        return element.pipelines;
      }

      if (element instanceof Pipeline) {
        return element.builds;
      }
    }

    return fetchOrgsPipelines().then(data => {
      const tree = data.viewer!.organizations!.edges!.map(org => {
        const { name, pipelines } = org!.node!;

        const pipelineTreeItems = pipelines!.edges!.map(p => {
          const { name, builds } = p!.node!;

          const buildTreeItems = builds!.edges!.map(b => {
            const { branch, commit, state, url, startedAt } = b!.node!;

            const relativeTime = moment.utc(startedAt).fromNow();

            return new Build(
              `${branch}:${commit.slice(0, 6)} (${relativeTime})`,
              state,
              url,
              vscode.TreeItemCollapsibleState.None
            );
          });

          return new Pipeline(
            name,
            buildTreeItems,
            builds!.count
              ? vscode.TreeItemCollapsibleState.Collapsed
              : vscode.TreeItemCollapsibleState.None
          );
        });

        return new Organization(
          name,
          pipelineTreeItems,
          pipelines!.count
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None
        );
      });

      return tree;
    });
  }
}

// https://graphql.buildkite.com/explorer
function createClient(): GraphQLClient {
  const { accessToken } = vscode.workspace.getConfiguration("buildkite");

  if (!accessToken) {
    vscode.window.showInformationMessage("Missing Buildkite access token");
  }

  return new GraphQLClient("https://graphql.buildkite.com/v1", {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });
}

async function fetchOrgsPipelines(): Promise<BuildkiteTreeQuery> {
  const client = createClient();

  const query = gql`
    fragment BuildFragment on Build {
      startedAt
      url
      branch
      state
      commit
    }

    query BuildkiteTreeQuery {
      viewer {
        organizations {
          count
          edges {
            node {
              name
              pipelines(first: 20) {
                count
                edges {
                  node {
                    name
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

  return await client.request<BuildkiteTreeQuery>(print(query));
}

class Organization extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly pipelines: Pipeline[],
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }
}

class Pipeline extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly builds: Build[],
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }

  get tooltip(): string {
    return "TODO";
  }
}

export class Build extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private state: BuildStates,
    public readonly url: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }

  get iconPath(): string {
    switch (this.state) {
      case BuildStates.CANCELED:
      case BuildStates.FAILED:
        return path.join(__filename, "..", "..", "resources", "failed.svg");
      case BuildStates.PASSED:
        return path.join(__filename, "..", "..", "resources", "passed.svg");
      default:
        return "";
    }
  }

  get tooltip(): string {
    return this.state;
  }

  contextValue = "build";
}
