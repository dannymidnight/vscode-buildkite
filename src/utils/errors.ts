import { ClientError } from "graphql-request";

import * as vscode from "vscode";

export function handleError(e: Error) {
  if (isClientError(e) && e.response.status === 401) {
    vscode.window
      .showErrorMessage(
        `Invalid access token. Please ensure you have a valid [Buildkite API Access Token](https://buildkite.com/user/api-access-tokens/new) with GraphQL access enabled.`,
        "Set API Access Token"
      )
      .then((result) => {
        if (result === "Set API Access Token") {
          vscode.commands.executeCommand("buildkite.setToken");
        }
      });

    // Resolve promise to avoid rendering multiple messages
    return Promise.resolve();
  }

  return Promise.reject(e);
}

export function isClientError(e: Error | ClientError): e is ClientError {
  return (<ClientError>e).request !== undefined;
}
