import * as moment from "moment";
import * as path from "path";
import * as vscode from "vscode";
import { BuildStates } from "../gql/graphql";
import { graphql, DocumentType } from "../gql";
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

export const BuildFragment = graphql(/* GraphQL */ `
  fragment Build on Build {
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
`);

export default class Build implements Node {
  private readonly context: BuildContext;

  constructor(private build: DocumentType<typeof BuildFragment>) {
    if (this.build.pullRequest) {
      this.context = BuildContext.PullRequest;
    } else {
      this.context = BuildContext.Default;
    }
  }

  async getChildren() {
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

  /**
   * Get the user who created the build
   *
   * Note: Not all builds will have an assoicated user, for example triggered or scheduled builds.
   */
  user(): User | null {
    const user = this.build.createdBy;

    if (!user) {
      return null;
    }

    if (user.__typename === "UnregisteredUser") {
      return {
        name: user.unregisteredName || "",
        email: user.unregisteredName || "",
        avatarUrl: "",
      };
    } else if (user.__typename === "User") {
      return {
        name: user.name,
        email: user.email,
        avatarUrl: user.avatar?.url,
      };
    } else {
      return null;
    }
  }

  tooltip() {
    const user = this.user();

    if (user) {
      return `Build #${this.build.number}\nCreated by ${user.name}<${user.email}>}\n\n${this.build.message}`;
    }
  }

  description() {
    const relativeTime = moment.utc(this.build.startedAt).fromNow();
    return `${relativeTime} in ${this.build.pipeline.name}`;
  }

  iconPath() {
    switch (this.build.state) {
      case BuildStates.Canceled:
      case BuildStates.Failed:
        return resource("failed.svg");
      case BuildStates.Blocked:
      case BuildStates.Passed:
        return resource("passed.svg");
      case BuildStates.Scheduled:
      case BuildStates.Running:
        return resource("pending.svg");
      default:
        return "";
    }
  }
}
