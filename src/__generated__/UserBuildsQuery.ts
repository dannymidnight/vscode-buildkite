/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./globalTypes";

// ====================================================
// GraphQL query operation: UserBuildsQuery
// ====================================================

export interface UserBuildsQuery_viewer_user_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avatar
   */
  url: string;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node_pipeline_repository {
  __typename: "Repository";
  /**
   * The git URL for this repository
   */
  url: string;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node_pipeline {
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
  repository: UserBuildsQuery_viewer_user_builds_edges_node_pipeline_repository | null;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node_pullRequest {
  __typename: "PullRequest";
  id: string;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node_createdBy_User_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avatar
   */
  url: string;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node_createdBy_User {
  __typename: "User";
  /**
   * The name of the user
   */
  name: string;
  /**
   * The primary email for the user
   */
  email: string;
  avatar: UserBuildsQuery_viewer_user_builds_edges_node_createdBy_User_avatar;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node_createdBy_UnregisteredUser {
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

export type UserBuildsQuery_viewer_user_builds_edges_node_createdBy = UserBuildsQuery_viewer_user_builds_edges_node_createdBy_User | UserBuildsQuery_viewer_user_builds_edges_node_createdBy_UnregisteredUser;

export interface UserBuildsQuery_viewer_user_builds_edges_node {
  __typename: "Build";
  /**
   * The number of the build
   */
  number: number;
  /**
   * The message for the build
   */
  message: string | null;
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
   * The fully-qualified commit for the build
   */
  commit: string;
  pipeline: UserBuildsQuery_viewer_user_builds_edges_node_pipeline;
  pullRequest: UserBuildsQuery_viewer_user_builds_edges_node_pullRequest | null;
  createdBy: UserBuildsQuery_viewer_user_builds_edges_node_createdBy | null;
}

export interface UserBuildsQuery_viewer_user_builds_edges {
  __typename: "BuildEdge";
  node: UserBuildsQuery_viewer_user_builds_edges_node | null;
}

export interface UserBuildsQuery_viewer_user_builds {
  __typename: "BuildConnection";
  edges: (UserBuildsQuery_viewer_user_builds_edges | null)[] | null;
}

export interface UserBuildsQuery_viewer_user {
  __typename: "User";
  avatar: UserBuildsQuery_viewer_user_avatar;
  /**
   * Returns builds that this user has created.
   */
  builds: UserBuildsQuery_viewer_user_builds | null;
}

export interface UserBuildsQuery_viewer {
  __typename: "Viewer";
  /**
   * The current user
   */
  user: UserBuildsQuery_viewer_user | null;
}

export interface UserBuildsQuery {
  /**
   * Context of the current user using the GraphQL API
   */
  viewer: UserBuildsQuery_viewer | null;
}
