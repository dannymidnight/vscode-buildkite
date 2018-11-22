import * as vscode from "vscode";
import BuildkiteProvider, { Build } from "./BuildkiteProvider";

export function activate(context: vscode.ExtensionContext) {
  // Register view data provider
  const buildkiteProvider = new BuildkiteProvider("hello");
  vscode.window.registerTreeDataProvider("buildkite-builds", buildkiteProvider);

  // Register commands
  vscode.commands.registerCommand("buildkite.openBuild", (build: Build) => {
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
