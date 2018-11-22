/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BuildStates } from "./globalTypes";

// ====================================================
// GraphQL fragment: BuildFragment
// ====================================================

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
}
