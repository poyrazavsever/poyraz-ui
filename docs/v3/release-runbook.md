# V3 Release Runbook

## Product Boundary

`v3.x` versions identify the Poyraz source registry. The `poyraz-ui` npm runtime package remains on the V2 maintenance line. Do not change `package.json` to `3.x` or publish V3 component barrels unless a new ADR replaces ADR-0002.

## Prepare

1. Update `release.config.json`, `CHANGELOG.md` and `docs/v3/releases/v<version>.md`.
2. Run `pnpm registry:build` and commit generated output with source changes.
3. Run `pnpm release:verify -- --version=<version> --channel=<channel>` on a clean worktree.
4. Confirm all required GitHub checks from `release.config.json` pass on the exact commit.
5. Confirm no critical/high issue or unapproved visual diff remains.

`pnpm release:verify` executes the complete local gate, including isolated installs/builds and release artifact generation. `--allow-dirty` is only for local implementation diagnostics and is not used by the release workflow.

## Publish

Run the `V3 Release` workflow manually from the reviewed commit. First leave `publish_release=false` and inspect the uploaded artifact:

- `release.json`
- `RELEASE_NOTES.md`
- `registry/*.json`
- `npm-pack-dry-run.json`
- `SHA256SUMS.txt`

Re-run with `publish_release=true` after approval from the protected `v3-production` environment. The workflow creates `v<version>` and a GitHub Release only after all gates pass.

For stable V3, set `promote_legacy_v2=true` only when the npm token is configured. This adds `legacy-v2` to the current `2.1.x` package and never moves `latest`. V3 itself is not published as an npm runtime package.

## Production Namespace

Canonical endpoints:

- `https://ui.poyrazavsever.com/r/registry.json`
- `https://ui.poyrazavsever.com/r/{name}.json`

The consumer namespace is:

```json
"@poyraz": "https://ui.poyrazavsever.com/r/{name}.json"
```

Hosting must serve JSON with a successful status and JSON content type. Cache invalidation must never leave `registry.json` pointing to missing item payloads.

## Post-release

The workflow retries production smoke for two minutes and verifies the index plus theme, utility, Button, Dialog and Navbar payloads. After it passes:

1. Verify the release tag points to the reviewed commit.
2. Verify checksums against the GitHub artifact.
3. Run one real `shadcn add @poyraz/button` installation from a clean project.
4. Confirm migration and V2 legacy links remain visible.
5. Replace `Unreleased` with the release date in `CHANGELOG.md` in the release commit or immediate documentation follow-up.

## Rollback

Registry files are immutable release artifacts, but the hosted docs deployment can be rolled back to the previous known-good commit. Do not delete or reuse a published git tag. If an item is defective, restore the previous deployment, publish a patch version and document the affected item/revision. npm `latest` remains untouched; restore only the `legacy-v2` dist-tag if it was assigned to the wrong V2 version.
