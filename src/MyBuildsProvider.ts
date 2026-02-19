import { GraphQLClient } from "graphql-request";
import { handleError } from "./utils/errors";
import { graphql } from "./gql";
import * as vscode from "vscode";
import Build from "./models/Build";
import Node from "./models/Node";

const UserBuildsQuery = graphql(/* GraphQL */ `
  query UserBuilds {
    viewer {
      user {
        avatar {
          url
        }
        builds(first: 50) {
          edges {
            node {
              ...Build

              pipeline {
                name
              }
            }
          }
        }
      }
    }
  }
`);

export default class MyBuildsProvider implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> =
    new vscode.EventEmitter();

  public readonly onDidChangeTreeData: vscode.Event<Node | null> =
    this._onDidChangeTreeData.event;

  private readonly timer?: ReturnType<typeof setInterval>;

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

  getTreeItem(element: Build) {
    return element.getTreeItem();
  }

  async getChildren(element?: Build) {
    if (element) {
      return element.getChildren();
    }

    return await this.client
      .request(UserBuildsQuery)
      .catch((e) => handleError(e))
      .then((data) => {
        if (!data) {
          return [];
        }

        return data.viewer!.user!.builds!.edges!.map(
          (b) => new Build(b!.node!)
        );
      });
  }
}
