/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query BuildkiteTree {\n    viewer {\n      organizations {\n        edges {\n          node {\n            ...Organization\n\n            pipelines(first: 500) {\n              edges {\n                node {\n                  ...Pipeline\n\n                  builds(first: 5) {\n                    count\n                    edges {\n                      node {\n                        ...Build\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.BuildkiteTreeDocument,
    "\n  query UserBuilds {\n    viewer {\n      user {\n        avatar {\n          url\n        }\n        builds(first: 50) {\n          edges {\n            node {\n              ...Build\n            }\n          }\n        }\n      }\n    }\n  }\n": types.UserBuildsDocument,
    "\n  fragment Build on Build {\n    number\n    message\n    startedAt\n    url\n    branch\n    state\n    commit\n    pipeline {\n      url\n      name\n      repository {\n        url\n      }\n    }\n    pullRequest {\n      id\n    }\n    createdBy {\n      ... on User {\n        name\n        email\n        avatar {\n          url\n        }\n      }\n      ... on UnregisteredUser {\n        unregisteredName: name\n        unregisteredEmail: email\n      }\n    }\n  }\n": types.BuildFragmentDoc,
    "\n  fragment Organization on Organization {\n    name\n  }\n": types.OrganizationFragmentDoc,
    "\n  fragment Pipeline on Pipeline {\n    name\n  }\n": types.PipelineFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BuildkiteTree {\n    viewer {\n      organizations {\n        edges {\n          node {\n            ...Organization\n\n            pipelines(first: 500) {\n              edges {\n                node {\n                  ...Pipeline\n\n                  builds(first: 5) {\n                    count\n                    edges {\n                      node {\n                        ...Build\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BuildkiteTree {\n    viewer {\n      organizations {\n        edges {\n          node {\n            ...Organization\n\n            pipelines(first: 500) {\n              edges {\n                node {\n                  ...Pipeline\n\n                  builds(first: 5) {\n                    count\n                    edges {\n                      node {\n                        ...Build\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserBuilds {\n    viewer {\n      user {\n        avatar {\n          url\n        }\n        builds(first: 50) {\n          edges {\n            node {\n              ...Build\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserBuilds {\n    viewer {\n      user {\n        avatar {\n          url\n        }\n        builds(first: 50) {\n          edges {\n            node {\n              ...Build\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Build on Build {\n    number\n    message\n    startedAt\n    url\n    branch\n    state\n    commit\n    pipeline {\n      url\n      name\n      repository {\n        url\n      }\n    }\n    pullRequest {\n      id\n    }\n    createdBy {\n      ... on User {\n        name\n        email\n        avatar {\n          url\n        }\n      }\n      ... on UnregisteredUser {\n        unregisteredName: name\n        unregisteredEmail: email\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Build on Build {\n    number\n    message\n    startedAt\n    url\n    branch\n    state\n    commit\n    pipeline {\n      url\n      name\n      repository {\n        url\n      }\n    }\n    pullRequest {\n      id\n    }\n    createdBy {\n      ... on User {\n        name\n        email\n        avatar {\n          url\n        }\n      }\n      ... on UnregisteredUser {\n        unregisteredName: name\n        unregisteredEmail: email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Organization on Organization {\n    name\n  }\n"): (typeof documents)["\n  fragment Organization on Organization {\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Pipeline on Pipeline {\n    name\n  }\n"): (typeof documents)["\n  fragment Pipeline on Pipeline {\n    name\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;