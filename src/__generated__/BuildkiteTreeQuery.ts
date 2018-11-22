/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./globalTypes";

// ====================================================
// GraphQL query operation: BuildkiteTreeQuery
// ====================================================

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node {
  __typename: "Build";
  /**
   * The time when the build started running
   */
  startedAt: any | null;
  /**
   * The URL for the build
   */
  url: string;
  /**
   * The branch for the build
   */
  branch: string;
  /**
   * The current state of the build
   */
  state: BuildStates;
  /**
   * The commit for the build
   */
  commit: string;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges {
  __typename: "BuildEdge";
  node: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds {
  __typename: "BuildConnection";
  count: number;
  edges: (BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges | null)[] | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node {
  __typename: "Pipeline";
  /**
   * The name of the pipeline
   */
  name: string;
  /**
   * Returns the builds for this pipeline
   */
  builds: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges {
  __typename: "PipelineEdge";
  node: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines {
  __typename: "PipelineConnection";
  count: number;
  edges: (BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges | null)[] | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node {
  __typename: "Organization";
  /**
   * The name of the organization
   */
  name: string;
  /**
   * Return all the pipelines the current user has access to for this organization
   */
  pipelines: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges {
  __typename: "OrganizationEdge";
  node: BuildkiteTreeQuery_viewer_organizations_edges_node | null;
}

export interface BuildkiteTreeQuery_viewer_organizations {
  __typename: "OrganizationConnection";
  count: number;
  edges: (BuildkiteTreeQuery_viewer_organizations_edges | null)[] | null;
}

export interface BuildkiteTreeQuery_viewer {
  __typename: "Viewer";
  organizations: BuildkiteTreeQuery_viewer_organizations | null;
}

export interface BuildkiteTreeQuery {
  /**
   * Context of the current user using the GraphQL API
   */
  viewer: BuildkiteTreeQuery_viewer | null;
}
