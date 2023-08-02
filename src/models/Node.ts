import * as vscode from "vscode";

export default interface Node {
  getTreeItem(): vscode.TreeItem;
  getChildren(): Promise<Node[]>;
}
