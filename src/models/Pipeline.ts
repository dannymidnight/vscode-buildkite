import gql from "graphql-tag";
import moment = require("moment");
import * as vscode from "vscode";
import { PipelineFragment } from "./__generated__/PipelineFragment";
import Build from "./Build";
import Node from "./Node";

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
      label: this.label(),
      collapsibleState: this.builds.length
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None,
      iconPath: this.iconPath,
      description: this.description()
    };
  }

  private label() {
    return this.pipeline.name;
  }

  private description() {
    if (this.mostRecentBuildDateTime) {
      return moment.utc(this.mostRecentBuildDateTime).fromNow();
    }
  }
}
