# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### Changed
- Fix bug in date formatting for scheduled builds

## [1.2.0] - 2023-08-02
### Changed
- Fix query complexity issue [[#36](https://github.com/dannymidnight/vscode-buildkite/issues/36)]. Rather than performing one big query, queries are now performed on expansion of tree items.
- Flatten out "My Builds" so that it's now a single list of builds.
- Updated build labels to use the build message rather than branch name
- Updated build descriptions to include the pipeline name

## [1.1.0] - 2023-01-20
### Changed
- Fixed error rendering builds with no associated user
- Fixed error when attempting to set/delete token when extension hasn't been activated

### Removed
- Removed UI commands from the command palette

## [1.0.0] - 2021-09-28
### Added
- Add new `buildkite.setToken` and `buildkite.deleteToken` commands to set the Buildkite access token as a secret. (@mskeleton)
- Add command categories (@mskeleton)

### Removed
- `buildkite.accessToken` setting

## [0.5.0] - 2020-01-01
### Changed
- Update style for relative build times
- Fix activity bar icon size

## [0.4.0] - 2020-01-01
### Changed
- Update activity bar icon

## 0.1.0 - 2020-01-01
### Added
- Initial release of `vscode-buildkite`

[1.2.0]: https://github.com/dannymidnight/vscode-buildkite/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/dannymidnight/vscode-buildkite/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/dannymidnight/vscode-buildkite/compare/v0.5.0...v1.0.0
[0.5.0]: https://github.com/dannymidnight/vscode-buildkite/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/dannymidnight/vscode-buildkite/compare/v0.1.0...v0.4.0
