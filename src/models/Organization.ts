import * as vscode from "vscode";
import Node from "./Node";
import Pipeline from "./Pipeline";
import { DocumentType, graphql } from "../gql";

export const OrganizationFragment = graphql(/* GraphQL */ `
  fragment Organization on Organization {
    name
  }
`);

export default class Organization implements Node {
  constructor(
    private readonly org: DocumentType<typeof OrganizationFragment>,
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
