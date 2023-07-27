import moment = require("moment");
import * as vscode from "vscode";
import Build from "./Build";
import Node from "./Node";
import { graphql, DocumentType } from "../gql";

export const PipelineFragment = graphql(/* GraphQL */ `
  fragment Pipeline on Pipeline {
    name
  }
`);

export default class Pipeline implements Node {
  constructor(
    private readonly pipeline: DocumentType<typeof PipelineFragment>,
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
      description: this.description(),
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
