import { GraphQLClient } from "graphql-request";
import * as vscode from "vscode";
import BuildkiteProvider, {
  UserBuildsProvider,
  LatestBuildProovider
} from "./BuildkiteProvider";
import Build from "./models/Build";
import { BuildStates } from "./__generated__/globalTypes";

export function activate(context: vscode.ExtensionContext) {
  // Register view data provider
  const buildkiteProvider = new BuildkiteProvider(createGraphQLClient);
  vscode.window.registerTreeDataProvider(
    "buildkite-pipelines",
    buildkiteProvider
  );

  const userBuildsProvider = new UserBuildsProvider(createGraphQLClient);
  vscode.window.registerTreeDataProvider(
    "buildkite-builds",
    userBuildsProvider
  );

  // Create status bar
  (async function() {
    const latestBuildProvider = new LatestBuildProovider(createGraphQLClient);

    const item = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    );

    const builds = await latestBuildProvider.getLatestBuild();
    const build = builds[0];

    item.text = `${build.slug()}: ${build.iconForLabel()} `;
    item.show();

    // TODO: Subscribe to onChange events and refresh.

    context.subscriptions.push(latestBuildProvider);
  })();

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
    buildkiteProvider.refresh()
  );

  vscode.commands.registerCommand("buildkite-builds.refresh", () =>
    userBuildsProvider.refresh()
  );

  context.subscriptions.push(buildkiteProvider);
  context.subscriptions.push(userBuildsProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}

/**
 * Create authenticated GraphQL client
 *
 * https://graphql.buildkite.com/explorer
 */
function createGraphQLClient() {
  const { accessToken } = vscode.workspace.getConfiguration("buildkite");

  if (!accessToken) {
    vscode.window.showInformationMessage("Missing Buildkite access token");
  }

  return new GraphQLClient("https://graphql.buildkite.com/v1", {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });
}
