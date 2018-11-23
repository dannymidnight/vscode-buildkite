/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./globalTypes";

// ====================================================
// GraphQL query operation: BuildkiteTreeQuery
// ====================================================

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_pipeline_repository {
  __typename: "Repository";
  /**
   * The git URL for this repository
   */
  url: string;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_pipeline {
  __typename: "Pipeline";
  /**
   * The URL for the pipeline
   */
  url: string;
  /**
   * The name of the pipeline
   */
  name: string;
  /**
   * The repository for this pipeline
   */
  repository: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_pipeline_repository | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_pullRequest {
  __typename: "PullRequest";
  id: string;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy_User_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avavtar
   */
  url: string;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy_User {
  __typename: "User";
  /**
   * The name of the user
   */
  name: string;
  /**
   * The primary email for the user
   */
  email: string;
  avatar: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy_User_avatar | null;
}

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy_UnregisteredUser {
  __typename: "UnregisteredUser";
  /**
   * The name of the user
   */
  unregisteredName: string | null;
  /**
   * The email for the user
   */
  unregisteredEmail: string | null;
}

export type BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy = BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy_User | BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy_UnregisteredUser;

export interface BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node {
  __typename: "Build";
  /**
   * The message for the build
   */
  message: string;
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
  pipeline: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_pipeline | null;
  pullRequest: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_pullRequest | null;
  createdBy: BuildkiteTreeQuery_viewer_organizations_edges_node_pipelines_edges_node_builds_edges_node_createdBy | null;
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
