import { GraphQLClient } from "graphql-request";
import * as vscode from "vscode";
import BuildkiteProvider, { UserBuildsProvider } from "./BuildkiteProvider";
import Build from "./models/Build";
import gql from "graphql-tag";
import { mostRecentBuildQuery } from "./__generated__/mostRecentBuildQuery";

const BUILDKITE_ACCESS_TOKEN = "buildkite.accessToken";

// optional pipeline? defaults to project name?
const getMostRecentBuild = async (client: GraphQLClient) => {
  const query = gql`
    ${Build.Fragment}

    query mostRecentBuildQuery {
      viewer {
        builds(first: 1) {
          edges {
            node {
              ...BuildFragment
            }
          }
        }
      }
    }
  `;

  const res = await client.request<mostRecentBuildQuery>(query);
  return res.viewer?.builds?.edges?.[0]?.node;
};

export async function activate(context: vscode.ExtensionContext) {
  const client = await createGraphQLClient(context);

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
  vscode.commands.registerCommand("buildkite.openMostRecentBuild", async () => {
    const build = await getMostRecentBuild(client);
    if (build) {
      vscode.commands.executeCommand(
        "vscode.open",
        vscode.Uri.parse(build.url)
      );
    }
  });

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

  vscode.commands.registerCommand("buildkite.setToken", async () => {
    const accessToken = await vscode.window.showInputBox({ password: true });

    if (accessToken) {
      await context.secrets.store("buildkite.accessToken", accessToken);
    }
  });

  vscode.commands.registerCommand("buildkite.deleteToken", async () => {
    await context.secrets.delete("buildkite.accessToken");
  });

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
