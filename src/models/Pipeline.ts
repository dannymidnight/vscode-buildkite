import * as vscode from "vscode";
import { PipelineFragment } from "./__generated__/PipelineFragment";
import Build from "./Build";
import Node from "./Node";
import gql from "graphql-tag";

export default class Pipeline implements Node {
  public static Fragment = gql`
    fragment PipelineFragment on Pipeline {
      name
    }
  `;

  constructor(
    private readonly pipeline: PipelineFragment,
    public builds: Build[],
    private iconPath?: string
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
    return {
      label: this.pipeline.name,
      collapsibleState: this.builds.length
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None,
      iconPath: this.iconPath
    };
  }
}
