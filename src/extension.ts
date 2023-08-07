import { GraphQLClient } from "graphql-request";
import * as vscode from "vscode";
import PipelinesProvider from "./PipelinesProvider";
import MyBuildsProvider from "./MyBuildsProvider";
import Build from "./models/Build";

const BUILDKITE_ACCESS_TOKEN = "buildkite.accessToken";

export async function activate(context: vscode.ExtensionContext) {
  const client = await createGraphQLClient(context);

  // Register view data provider
  const pipelinesProvider = new PipelinesProvider(client);
  vscode.window.registerTreeDataProvider(
    "buildkite-pipelines",
    pipelinesProvider
  );

  const myBuildsProvider = new MyBuildsProvider(client);
  vscode.window.registerTreeDataProvider("buildkite-builds", myBuildsProvider);

  // Register commands
  vscode.commands.registerCommand("buildkite.viewBuild", (build: Build) => {
    vscode.commands.executeCommand(
      "vscode.open",
      vscode.Uri.parse(build.buildUrl)
    );
  });

  vscode.commands.registerCommand("buildkite.viewPipeline", (build: Build) => {
    vscode.commands.executeCommand(
      "vscode.open",
      vscode.Uri.parse(build.pipelineUrl)
    );
  });

  vscode.commands.registerCommand(
    "buildkite.viewPipelineBuilds",
    (build: Build) => {
      vscode.commands.executeCommand(
        "vscode.open",
        vscode.Uri.parse(build.pipelineBuildsUrl)
      );
    }
  );

  vscode.commands.registerCommand("buildkite.viewCommit", (build: Build) => {
    vscode.commands.executeCommand(
      "vscode.open",
      vscode.Uri.parse(build.commitUrl)
    );
  });

  vscode.commands.registerCommand(
    "buildkite.viewPullRequest",
    (build: Build) => {
      vscode.commands.executeCommand(
        "vscode.open",
        vscode.Uri.parse(build.pullRequestUrl)
      );
    }
  );

  vscode.commands.registerCommand("buildkite-pipelines.refresh", () =>
    pipelinesProvider.refresh()
  );

  vscode.commands.registerCommand("buildkite-builds.refresh", () =>
    myBuildsProvider.refresh()
  );

  vscode.commands.registerCommand("buildkite.setToken", async () => {
    const accessToken = await vscode.window.showInputBox({ password: true });

    if (accessToken) {
      await context.secrets.store("buildkite.accessToken", accessToken);
    }
  });

  vscode.commands.registerCommand("buildkite.deleteToken", async () => {
    await context.secrets.delete("buildkite.accessToken");
  });

  context.subscriptions.push(pipelinesProvider);
  context.subscriptions.push(myBuildsProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}

/**
 * Create authenticated GraphQL client
 *
 * https://graphql.buildkite.com/explorer
 */
async function createGraphQLClient(context: vscode.ExtensionContext) {
  const accessToken = await context.secrets.get(BUILDKITE_ACCESS_TOKEN);

  const client = new GraphQLClient("https://graphql.buildkite.com/v1", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  context.secrets.onDidChange((e) => {
    if (e.key === BUILDKITE_ACCESS_TOKEN) {
      context.secrets.get(BUILDKITE_ACCESS_TOKEN).then((accessToken) => {
        client.setHeader("authorization", `Bearer ${accessToken}`);

        vscode.commands.executeCommand("buildkite-builds.refresh");
        vscode.commands.executeCommand("buildkite-pipelines.refresh");
      });
    }
  });

  return client;
}
