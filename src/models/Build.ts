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
  Default = "build",
}

interface User {
  name: string;
  email: string;
  avatarUrl: string;
}

export default class Build implements Node {
  static Fragment = gql`
    fragment BuildFragment on Build {
      number
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
      label: this.build.branch,
      collapsibleState: vscode.TreeItemCollapsibleState.None,
      iconPath: this.iconPath(),
      tooltip: this.tooltip(),
      description: this.description(),
      contextValue: this.context,
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

  user(): User {
    const user = this.build.createdBy!;

    if (user.__typename === "UnregisteredUser") {
      return {
        name: user.unregisteredName || "",
        email: user.unregisteredName || "",
        avatarUrl: "",
      };
    } else {
      return {
        name: user.name,
        email: user.email,
        avatarUrl: user.avatar!.url,
      };
    }
  }

  tooltip() {
    const user = this.user();
    const name = `${user.name}<${user.email}>`;

    return `Build #${this.build.number}\nCreated by ${name}\n\n${this.build.message}`;
  }

  description() {
    return moment.utc(this.build.startedAt).fromNow();
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
