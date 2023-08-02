# Contributing

## Changelog

The Changelog follows the [keepachangelog](https://keepachangelog.com/en/1.0.0/) spec which means unreleased changes should be included under the `Unreleased` header allowing changes to be grouped at release time.


## Development

### GraphQL types
GraphQL queries are typed with the help of the [`graphql-codegen`](https://github.com/dotansimha/graphql-code-generator) package.

Typesript types can be regenerated with the following:

```sh
npm run gqlgen
```

Fetch the latest Buildkite GraphQL schema with the following:

```sh
ACCESS_TOKEN=xxx npm run gqlschema
```
