import gql from "graphql-tag";
import * as moment from "moment";
import * as path from "path";
import * as vscode from "vscode";
import { BuildStates } from "../__generated__/globalTypes";
import { BuildFragment } from "./__generated__/BuildFragment";
import Node from "./Node";

function resource(file: string): string {
  return path.join(__filename, "..", "..", "..", "resources", file);
}

enum BuildContext {
  PullRequest = "build:pull-request",
  Default = "build"
}

export default class Build implements Node {
  static Fragment = gql`
    fragment BuildFragment on Build {
      message
      startedAt
      url
      branch
      state
      commit
      pipeline {
        url
        name
        repository {
          url
        }
      }
      pullRequest {
        id
      }
      createdBy {
        ... on User {
          name
          email
          avatar {
            url
          }
        }
        ... on UnregisteredUser {
          unregisteredName: name
          unregisteredEmail: email
        }
      }
    }
  `;

  private readonly context: BuildContext;

  constructor(private build: BuildFragment) {
    if (this.build.pullRequest) {
      this.context = BuildContext.PullRequest;
    } else {
      this.context = BuildContext.Default;
    }
  }

  getChildren() {
    return [];
  }

  getTreeItem() {
    return {
      label: this.label(),
      collapsibleState: vscode.TreeItemCollapsibleState.None,
      iconPath: this.iconPath(),
      tooltip: this.tooltip(),
      contextValue: this.context
    };
  }

  startedAt = this.build.startedAt;
  buildUrl = this.build.url;

  pipelineUrl = this.build.pipeline!.url;

  get pipelineBuildsUrl() {
    return `${this.pipelineUrl}/builds`;
  }

  get commitUrl() {
    return `${this.scmBaseUrl}/commit/${this.build.commit}`;
  }

  get pullRequestUrl() {
    return `${this.scmBaseUrl}/pull/${this.build!.pullRequest!.id}`;
  }

  private get scmBaseUrl() {
    const repository = this.build.pipeline!.repository!.url!;

    if (repository.match("git@github.com")) {
      const project = repository.match(/:(.+)\.git/)![1];
      return `https://github.com/${project}`;
    }
  }

  tooltip() {
    const user = this.build.createdBy!;
    const name =
      user.__typename === "UnregisteredUser"
        ? `${user.unregisteredName}<${user.unregisteredName}>`
        : `${user.name}<${user.email}>`;

    return `Created by ${name}\n\n${this.build.message}`;
  }

  label() {
    const relativeTime = moment.utc(this.build.startedAt).fromNow();
    return `${this.build.branch} (${relativeTime})`;
  }

  iconPath() {
    switch (this.build.state) {
      case BuildStates.CANCELED:
      case BuildStates.FAILED:
        return resource("failed.svg");
      case BuildStates.BLOCKED:
      case BuildStates.PASSED:
        return resource("passed.svg");
      case BuildStates.SCHEDULED:
      case BuildStates.RUNNING:
        return resource("pending.svg");
      default:
        return "";
    }
  }
}
