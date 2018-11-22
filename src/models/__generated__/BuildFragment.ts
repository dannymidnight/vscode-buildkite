/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: BuildFragment
// ====================================================

export interface BuildFragment_createdBy_User_avatar {
  __typename: "Avatar";
  /**
   * The URL of the avavtar
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
  avatar: BuildFragment_createdBy_User_avatar | null;
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
  createdBy: BuildFragment_createdBy | null;
}
