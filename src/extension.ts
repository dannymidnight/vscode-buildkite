import { GraphQLClient } from "graphql-request";
import * as vscode from "vscode";
import BuildkiteProvider, { UserBuildsProvider } from "./BuildkiteProvider";
import Build from "./models/Build";

export function activate(context: vscode.ExtensionContext) {
  const client = createGraphQLClient();

  // Register view data provider
  const buildkiteProvider = new BuildkiteProvider(client);
  vscode.window.registerTreeDataProvider(
    "buildkite-pipelines",
    buildkiteProvider
  );

  const userBuildsProvider = new UserBuildsProvider(client);
  vscode.window.registerTreeDataProvider(
    "buildkite-builds",
    userBuildsProvider
  );

  // Register commands
  vscode.commands.registerCommand("buildkite.viewBuild", (build: Build) => {
    vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(build.url));
  });

  vscode.commands.registerCommand("buildkite-builds.refresh", () => {
    throw new Error("Method not implemented.");
  });

  vscode.commands.registerCommand("buildkite-pipelines.refresh", () => {
    throw new Error("Method not implemented.");
  });
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
