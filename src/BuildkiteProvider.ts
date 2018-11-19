import * as vscode from "vscode";

// https://github.com/prisma/graphql-request
// https://buildkite.com/docs/apis/graphql-api#getting-started

export default class BuildkiteProvider
  implements vscode.TreeDataProvider<Build> {
  constructor(private token: string) {}

  onDidChangeTreeData?: vscode.Event<any> | undefined;

  getTreeItem(element: any): vscode.TreeItem | Thenable<vscode.TreeItem> {
    throw new Error("Method not implemented.");
  }
  getChildren(element?: any): vscode.ProviderResult<any[]> {
    console.log(`Buildkite token: ${this.token}`);

    // Get buildkite builds!
    throw new Error("Method not implemented.");
  }
}

class Build extends vscode.TreeItem {}
