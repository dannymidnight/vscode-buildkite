import * as vscode from "vscode";
import * as path from "path";
import * as moment from "moment";
import gql from "graphql-tag";
import { BuildkiteTreeQuery } from "./__generated__/BuildkiteTreeQuery";
import { BuildStates } from "./__generated__/globalTypes";
import { print } from "graphql/language/printer";
import { GraphQLClient } from "graphql-request";
import { BuildFragment } from "./__generated__/BuildFragment";
import { OrganizationFragment } from "./__generated__/OrganizationFragment";
import { PipelineFragment } from "./__generated__/PipelineFragment";

export default class BuildkiteProvider
  implements vscode.TreeDataProvider<Node> {
  onDidChangeTreeData?: vscode.Event<any> | undefined;

  constructor(private client: GraphQLClient) {}

  public static query = gql`
    fragment BuildFragment on Build {
      startedAt
      url
      branch
      state
      commit
    }

    fragment OrganizationFragment on Organization {
      name
    }

    fragment PipelineFragment on Pipeline {
      name
    }

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

    const tree = this.client.request<BuildkiteTreeQuery>(
      print(BuildkiteProvider.query)
    );

    return Promise.resolve(tree).then(data => {
      const tree = data.viewer!.organizations!.edges!.map(org => {
        const pipelines = org!.node!.pipelines!.edges!.map(p => {
          const builds = p!.node!.builds!.edges!.map(b => {
            return new Build(b!.node!);
          });
          return new Pipeline(p!.node!, builds);
        });
        return new Organization(org!.node!, pipelines);
      });

      return tree;
    });
  }
}

interface Node {
  getTreeItem(): vscode.TreeItem;
  getChildren(): Node[];
}

class Organization implements Node {
  constructor(
    private readonly org: OrganizationFragment,
    private readonly pipelines: Pipeline[]
  ) {}

  getChildren() {
    this.pipelines.sort((a, b) =>
      a.mostRecentBuildDateTime > b.mostRecentBuildDateTime ? -1 : 1
    );
    return this.pipelines;
  }

  getTreeItem() {
    return new vscode.TreeItem(
      this.org.name,
      this.pipelines.length
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None
    );
  }
}

class Pipeline implements Node {
  constructor(
    private readonly pipeline: PipelineFragment,
    private readonly builds: Build[]
  ) {}

  get mostRecentBuildDateTime() {
    if (this.builds.length) {
      return this.builds[0].startedAt;
    }
    return null;
  }

  getChildren() {
    return this.builds;
  }

  getTreeItem() {
    return new vscode.TreeItem(
      this.pipeline.name,
      this.builds.length
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None
    );
  }
}

export class Build implements Node {
  constructor(private build: BuildFragment) {}

  startedAt = this.build.startedAt;
  url = this.build.url;

  getChildren() {
    return [];
  }

  getTreeItem() {
    return {
      label: this.label(),
      collapsibleState: vscode.TreeItemCollapsibleState.None,
      iconPath: this.iconPath(),
      tooltip: this.build.state,
      contextValue: "build"
    };
  }

  label() {
    const relativeTime = moment.utc(this.build.startedAt).fromNow();
    const commit = this.build.commit.slice(0, 6);

    return `${this.build.branch}:${commit} (${relativeTime})`;
  }

  iconPath() {
    switch (this.build.state) {
      case BuildStates.CANCELED:
      case BuildStates.FAILED:
        return path.join(__filename, "..", "..", "resources", "failed.svg");
      case BuildStates.PASSED:
        return path.join(__filename, "..", "..", "resources", "passed.svg");
      default:
        return "";
    }
  }
}
