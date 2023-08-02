import { GraphQLClient } from "graphql-request";
import { handleError } from "./utils/errors";
import * as vscode from "vscode";
import Build from "./models/Build";
import Node from "./models/Node";
import Organization from "./models/Organization";
import Pipeline from "./models/Pipeline";
import { graphql } from "./gql";

const BuildkiteTreeQuery = graphql(/* GraphQL */ `
  query BuildkiteTree {
    viewer {
      organizations {
        edges {
          node {
            ...Organization

            pipelines(first: 500) {
              edges {
                node {
                  ...Pipeline

                  builds(first: 5) {
                    count
                    edges {
                      node {
                        ...Build
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
`);

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
      .request(BuildkiteTreeQuery)
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
