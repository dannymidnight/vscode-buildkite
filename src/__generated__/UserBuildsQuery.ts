/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./globalTypes";

// ====================================================
// GraphQL query operation: UserBuildsQuery
// ====================================================

export interface UserBuildsQuery_viewer_user_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avavtar
   */
  url: string;
}

export interface UserBuildsQuery_viewer_user_builds_edges_node {
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
  avatar: UserBuildsQuery_viewer_user_avatar | null;
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
