import moment = require("moment");
import * as vscode from "vscode";
import Build from "./Build";
import Node from "./Node";
import { graphql, DocumentType } from "../gql";
import { GraphQLClient } from "graphql-request";
import { OrganizationFragment } from "./Organization";

const PipelineBuildsQuery = graphql(/* GraphQL */ `
  query PipelineBuilds($pipeline: ID!) {
    pipeline(slug: $pipeline) {
      builds(first: 50) {
        edges {
          node {
            ...Build
          }
        }
      }
    }
  }
`);

export const PipelineFragment = graphql(/* GraphQL */ `
  fragment Pipeline on Pipeline {
    name
    slug

    builds(first: 1) {
      edges {
        node {
          startedAt
        }
      }
    }
  }
`);

export default class Pipeline implements Node {
  constructor(
    private readonly client: GraphQLClient,
    private readonly organization: DocumentType<typeof OrganizationFragment>,
    private readonly pipeline: DocumentType<typeof PipelineFragment>,
    private iconPath?: string
  ) {}

  async getChildren() {
    const data = await this.client.request(PipelineBuildsQuery, {
      pipeline: `${this.organization.slug}/${this.pipeline.slug}`,
    });

    return data.pipeline!.builds!.edges!.map((b) => {
      return new Build(b!.node!);
    });
  }

  getTreeItem() {
    return {
      label: this.label(),
      collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      iconPath: this.iconPath,
      description: this.description(),
    };
  }

  // This is used for sorting pipelines by most recent build time.
  get mostRecentBuildDateTime() {
    return this.pipeline.builds?.edges?.[0]?.node?.startedAt;
  }

  private label() {
    return this.pipeline.name;
  }

  private description() {
    if (this.mostRecentBuildDateTime) {
      return moment.utc(this.mostRecentBuildDateTime).fromNow();
    } else {
      return "No builds";
    }
  }
}
