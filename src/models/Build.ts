import gql from "graphql-tag";
import * as moment from "moment";
import * as path from "path";
import * as vscode from "vscode";
import { BuildStates } from "../__generated__/globalTypes";
import { BuildFragment } from "./__generated__/BuildFragment";
import Node from "./Node";

function resource(file: string): string {
  return path.join(__filename, "..", "..", "..", "resources", file);
}

export default class Build implements Node {
  static Fragment = gql`
    fragment BuildFragment on Build {
      startedAt
      url
      branch
      state
      commit
    }
  `;

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
        return resource("failed.svg");
      case BuildStates.PASSED:
        return resource("passed.svg");
      default:
        return "";
    }
  }
}
