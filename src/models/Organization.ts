import gql from "graphql-tag";
import * as vscode from "vscode";
import { OrganizationFragment } from "./__generated__/OrganizationFragment";
import Node from "./Node";
import Pipeline from "./Pipeline";

export default class Organization implements Node {
  public static Fragment = gql`
    fragment OrganizationFragment on Organization {
      name
    }
  `;

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
