import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import * as vscode from "vscode";
import { BuildkiteTreeQuery } from "./__generated__/BuildkiteTreeQuery";
import Build from "./models/Build";
import Node from "./models/Node";
import Organization from "./models/Organization";
import Pipeline from "./models/Pipeline";

export default class BuildkiteProvider
  implements vscode.TreeDataProvider<Node> {
  onDidChangeTreeData?: vscode.Event<any> | undefined;

  constructor(private client: GraphQLClient) {}

  public static query = gql`
    fragment BuildFragment on Build {
      startedAt
      url
      branch
      state
      commit
    }

    fragment OrganizationFragment on Organization {
      name
    }

    fragment PipelineFragment on Pipeline {
      name
    }

    query BuildkiteTreeQuery {
      viewer {
        organizations {
          count
          edges {
            node {
              ...OrganizationFragment
              pipelines(first: 50) {
                count
                edges {
                  node {
                    ...PipelineFragment
                    builds(first: 5) {
                      count
                      edges {
                        node {
                          ...BuildFragment
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  getTreeItem(element: Node): vscode.TreeItem {
    return element.getTreeItem();
  }

  getChildren(element?: Node): Thenable<Node[]> | Node[] {
    if (element) {
      return element.getChildren();
    }

    const tree = this.client.request<BuildkiteTreeQuery>(
      print(BuildkiteProvider.query)
    );

    return Promise.resolve(tree).then(data => {
      const tree = data.viewer!.organizations!.edges!.map(org => {
        const pipelines = org!.node!.pipelines!.edges!.map(p => {
          const builds = p!.node!.builds!.edges!.map(b => {
            return new Build(b!.node!);
          });
          return new Pipeline(p!.node!, builds);
        });
        return new Organization(org!.node!, pipelines);
      });

      return tree;
    });
  }
}
