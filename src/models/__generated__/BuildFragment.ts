/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: BuildFragment
// ====================================================

export interface BuildFragment_pipeline_repository {
  __typename: "Repository";
  /**
   * The git URL for this repository
   */
  url: string;
}

export interface BuildFragment_pipeline {
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
  repository: BuildFragment_pipeline_repository | null;
}

export interface BuildFragment_pullRequest {
  __typename: "PullRequest";
  id: string;
}

export interface BuildFragment_createdBy_User_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avatar
   */
  url: string;
}

export interface BuildFragment_createdBy_User {
  __typename: "User";
  /**
   * The name of the user
   */
  name: string;
  /**
   * The primary email for the user
   */
  email: string;
  avatar: BuildFragment_createdBy_User_avatar;
}

export interface BuildFragment_createdBy_UnregisteredUser {
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

export type BuildFragment_createdBy = BuildFragment_createdBy_User | BuildFragment_createdBy_UnregisteredUser;

export interface BuildFragment {
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
  pipeline: BuildFragment_pipeline;
  pullRequest: BuildFragment_pullRequest | null;
  createdBy: BuildFragment_createdBy | null;
}
