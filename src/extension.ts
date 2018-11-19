import * as vscode from "vscode";
import BuildkiteProvider from "./BuildkiteProvider";

// TODO:
// * This _could_ use the current repository name for buildkite pipeline?
// * Might be a little too opinionated

export function activate(context: vscode.ExtensionContext) {
  // Register view data provider
  const buildkiteProvider = new BuildkiteProvider("hello");
  vscode.window.registerTreeDataProvider("buildkite-builds", buildkiteProvider);

  // Register commands
  vscode.commands.registerCommand("buildkite-builds.refresh", () => {
    throw new Error("Method not implemented.");
  });

  // vscode.commands.registerCommand("buildkite.openBuild", () => {});
  // vscode.commands.registerCommand("buildkite.openPipeline", () => {});

  // FIXME: Does this need to happen?
  // context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
