import { BuildkiteTreeQuery } from "./__generated__/BuildkiteTreeQuery";
import { GraphQLClient } from "graphql-request";
import { handleError } from "./utils/errors";
import { print } from "graphql/language/printer";
import * as vscode from "vscode";
import Build from "./models/Build";
import gql from "graphql-tag";
import Node from "./models/Node";
import Organization from "./models/Organization";
import Pipeline from "./models/Pipeline";

const query = gql`
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

export class BuildkiteProvider implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> =
    new vscode.EventEmitter();
  public readonly onDidChangeTreeData: vscode.Event<Node | null> =
    this._onDidChangeTreeData.event;
  private readonly timer?: NodeJS.Timer;

  constructor(private client: GraphQLClient) {
    const { pollBuildkiteEnabled, pollBuildkiteInterval } =
      vscode.workspace.getConfiguration("buildkite");
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

  getTreeItem(element: Node): vscode.TreeItem {
    return element.getTreeItem();
  }

  getChildren(element?: Node): Thenable<Node[]> | Node[] {
    if (element) {
      return element.getChildren();
    }

    return this.client
      .request<BuildkiteTreeQuery>(print(query))
      .catch((e) => handleError(e))
      .then((data) => {
        if (!data) {
          return [];
        }

        return data.viewer!.organizations!.edges!.map((org) => {
          const pipelines = org!.node!.pipelines!.edges!.map((p) => {
            const builds = p!.node!.builds!.edges!.map((b) => {
              return new Build(b!.node!);
            });
            return new Pipeline(p!.node!, builds);
          });
          return new Organization(org!.node!, pipelines);
        });
      });
  }
}
