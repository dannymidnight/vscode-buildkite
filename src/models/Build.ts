import * as moment from "moment";
import * as path from "path";
import * as vscode from "vscode";
import { BuildFragment } from "../__generated__/BuildFragment";
import { BuildStates } from "../__generated__/globalTypes";
import Node from "./Node";

export default class Build implements Node {
  constructor(private build: BuildFragment) {}

  startedAt = this.build.startedAt;
  url = this.build.url;

  getChildren() {
    return [];
  }

  getTreeItem() {
    return {
      label: this.label(),
      collapsibleState: vscode.TreeItemCollapsibleState.None,
      iconPath: this.iconPath(),
      tooltip: this.build.state,
      contextValue: "build"
    };
  }

  label() {
    const relativeTime = moment.utc(this.build.startedAt).fromNow();
    const commit = this.build.commit.slice(0, 6);

    return `${this.build.branch}:${commit} (${relativeTime})`;
  }

  iconPath() {
    switch (this.build.state) {
      case BuildStates.CANCELED:
      case BuildStates.FAILED:
        return path.join(__filename, "..", "..", "resources", "failed.svg");
      case BuildStates.PASSED:
        return path.join(__filename, "..", "..", "resources", "passed.svg");
      default:
        return "";
    }
  }
}
