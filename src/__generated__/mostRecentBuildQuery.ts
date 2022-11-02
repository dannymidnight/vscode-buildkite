/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./globalTypes";

// ====================================================
// GraphQL query operation: mostRecentBuildQuery
// ====================================================

export interface mostRecentBuildQuery_viewer_builds_edges_node_pipeline_repository {
  __typename: "Repository";
  /**
   * The git URL for this repository
   */
  url: string;
}

export interface mostRecentBuildQuery_viewer_builds_edges_node_pipeline {
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
  repository: mostRecentBuildQuery_viewer_builds_edges_node_pipeline_repository | null;
}

export interface mostRecentBuildQuery_viewer_builds_edges_node_pullRequest {
  __typename: "PullRequest";
  id: string;
}

export interface mostRecentBuildQuery_viewer_builds_edges_node_createdBy_User_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avavtar
   */
  url: string;
}

export interface mostRecentBuildQuery_viewer_builds_edges_node_createdBy_User {
  __typename: "User";
  /**
   * The name of the user
   */
  name: string;
  /**
   * The primary email for the user
   */
  email: string;
  avatar: mostRecentBuildQuery_viewer_builds_edges_node_createdBy_User_avatar | null;
}

export interface mostRecentBuildQuery_viewer_builds_edges_node_createdBy_UnregisteredUser {
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

export type mostRecentBuildQuery_viewer_builds_edges_node_createdBy = mostRecentBuildQuery_viewer_builds_edges_node_createdBy_User | mostRecentBuildQuery_viewer_builds_edges_node_createdBy_UnregisteredUser;

export interface mostRecentBuildQuery_viewer_builds_edges_node {
  __typename: "Build";
  /**
   * The number of the build
   */
  number: number;
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
  pipeline: mostRecentBuildQuery_viewer_builds_edges_node_pipeline | null;
  pullRequest: mostRecentBuildQuery_viewer_builds_edges_node_pullRequest | null;
  createdBy: mostRecentBuildQuery_viewer_builds_edges_node_createdBy | null;
}

export interface mostRecentBuildQuery_viewer_builds_edges {
  __typename: "BuildEdge";
  node: mostRecentBuildQuery_viewer_builds_edges_node | null;
}

export interface mostRecentBuildQuery_viewer_builds {
  __typename: "BuildConnection";
  edges: (mostRecentBuildQuery_viewer_builds_edges | null)[] | null;
}

export interface mostRecentBuildQuery_viewer {
  __typename: "Viewer";
  builds: mostRecentBuildQuery_viewer_builds | null;
}

export interface mostRecentBuildQuery {
  /**
   * Context of the current user using the GraphQL API
   */
  viewer: mostRecentBuildQuery_viewer | null;
}
