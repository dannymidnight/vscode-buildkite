import { GraphQLClient } from "graphql-request";
import { handleError } from "./utils/errors";
import { PipelineFragment } from "./models/__generated__/PipelineFragment";
import { print } from "graphql/language/printer";
import { UserBuildsQuery } from "./__generated__/UserBuildsQuery";
import * as vscode from "vscode";
import Build from "./models/Build";
import gql from "graphql-tag";
import Pipeline from "./models/Pipeline";
import Node from "./models/Node";

const query = gql`
  ${Build.Fragment}

  query UserBuildsQuery {
    viewer {
      user {
        avatar {
          url
        }
        builds(first: 50) {
          edges {
            node {
              ...BuildFragment
            }
          }
        }
      }
    }
  }
`;

export class UserBuildsProvider implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData: vscode.EventEmitter<Node | null> =
    new vscode.EventEmitter();
  public readonly onDidChangeTreeData: vscode.Event<Node | null> =
    this._onDidChangeTreeData.event;
  private readonly timer?: NodeJS.Timer;

  constructor(private client: GraphQLClient) {
    const { pollBuildkiteEnabled, pollBuildkiteInterval } =
      vscode.workspace.getConfiguration("buildkite");
    if (pollBuildkiteEnabled) {
      this.timer = setInterval(() => this.refresh(), pollBuildkiteInterval);
    }
  }

  refresh() {
    this._onDidChangeTreeData.fire(null);
  }

  dispose() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getTreeItem(element: Node): vscode.TreeItem {
    return element.getTreeItem();
  }

  getChildren(element?: Node): Thenable<Node[]> | Node[] {
    if (element) {
      return element.getChildren();
    }

    return this.client
      .request<UserBuildsQuery>(print(query))
      .catch((e) => handleError(e))
      .then((data) => {
        if (!data) {
          return [];
        }

        const pipelines = new Map();

        data.viewer!.user!.builds!.edges!.forEach((b) => {
          const name = b!.node!.pipeline!.name;
          const build = new Build(b!.node!);

          if (!pipelines.has(name)) {
            pipelines.set(
              name,
              new Pipeline(
                <PipelineFragment>{ name },
                [build],
                build.iconPath()
              )
            );
          } else {
            pipelines.get(name).builds.push(build);
          }
        });

        return Array.from(pipelines.values());
      });
  }
}
