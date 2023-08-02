import * as vscode from "vscode";
import Node from "./Node";
import Pipeline from "./Pipeline";
import { DocumentType, graphql } from "../gql";
import { GraphQLClient } from "graphql-request";

/**
 * Fetch the first 100 pipelines for an organization – this may run into
 * query complexity limits for organizations with many pipelines so it might
 * be worth tweaking / paginating this query.
 */
const OrganizationPipelinesQuery = graphql(/* GraphQL */ `
  query OrganizationPipelines($organization: ID!) {
    organization(slug: $organization) {
      pipelines(first: 100, order: RELEVANCE) {
        edges {
          node {
            ...Pipeline
          }
        }
      }
    }
  }
`);

export const OrganizationFragment = graphql(/* GraphQL */ `
  fragment Organization on Organization {
    name
    slug
  }
`);

export default class Organization implements Node {
  private pipelines: Pipeline[] = [];

  constructor(
    private readonly client: GraphQLClient,
    private readonly org: DocumentType<typeof OrganizationFragment>
  ) {}

  async getChildren() {
    const data = await this.client.request(OrganizationPipelinesQuery, {
      organization: this.org.slug,
    });

    this.pipelines = data.organization!.pipelines!.edges!.map((p) => {
      return new Pipeline(this.client, this.org, p!.node!);
    });

    // Filter and sort pipelines by most recent build date. Ideally we'd do
    // this in the GraphQL query but the API doesn't support it yet.
    return (this.pipelines = this.pipelines
      .filter((p) => p.mostRecentBuildDateTime)
      .sort((a, b) =>
        a.mostRecentBuildDateTime > b.mostRecentBuildDateTime ? -1 : 1
      ));
  }

  getTreeItem() {
    return new vscode.TreeItem(
      this.org.name,
      this.pipelines.length
        ? vscode.TreeItemCollapsibleState.Expanded
        : vscode.TreeItemCollapsibleState.Collapsed
    );
  }
}
