import { GraphQLClient } from "graphql-request";
import { handleError } from "./utils/errors";
import * as vscode from "vscode";
import Organization from "./models/Organization";
import { graphql } from "./gql";
import Node from "./models/Node";

const OrganizationQuery = graphql(/* GraphQL */ `
  query Organizations {
    viewer {
      organizations {
        edges {
          node {
            ...Organization
          }
        }
      }
    }
  }
`);

export default class PipelinesProvider
  implements vscode.TreeDataProvider<Node>
{
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

  getTreeItem(element: Node) {
    return element.getTreeItem();
  }

  async getChildren(element?: Node) {
    if (element) {
      return element.getChildren();
    }

    return this.client
      .request(OrganizationQuery)
      .catch((e) => handleError(e))
      .then((data) => {
        if (!data) {
          return [];
        }

        return data.viewer!.organizations!.edges!.map((org) => {
          return new Organization(this.client, org!.node!);
        });
      });
  }
}
