# V3 Release Runbook

## Product Boundary

Poyraz UI V3 is released through two official channels from the same reviewed source commit:

1. `poyraz-ui@3.x` npm runtime package for package imports and semver updates.
2. The `@poyraz/*` source registry for consumer-owned component source.

ADR-0003 supersedes the registry-only package policy. The final V2 package remains available
as `poyraz-ui@legacy-v2` for migration and rollback.

Canonical component source is `components/ui/**`. Package entry points re-export that source;
registry sync scripts copy it into registry authoring items. `dist/**` and `public/r/**` are
generated outputs and must not receive one-sided fixes.

## Version Policy

Do not change `package.json` to a target version during ordinary feature work. Set the exact
version only in the reviewed release commit:

- Prerelease: `3.0.0-rc.1` → npm `next`.
- Stable: `3.0.0` → npm `latest`.
- Legacy fallback: declared `2.1.x` → npm `legacy-v2`.

Release preflight rejects a package version that does not exactly match the requested release.
This behavior is declared by `npm.versionPolicy: release-commit` in `release.config.json`.

## Prepare

1. Complete Faz 14–16 and keep the major scope freeze active.
2. Update `package.json`, `release.config.json`, `CHANGELOG.md` and
   `docs/v3/releases/v<version>.md` in the release commit.
3. Run `pnpm registry:build` and commit synchronized generated output.
4. Run `pnpm release:verify -- --version=<version> --channel=<channel>` on a clean worktree.
5. Confirm every required GitHub check from `release.config.json` passes on the exact PR commit.
6. Confirm the npm tarball installs, typechecks and builds in clean Next.js and Vite consumers.
7. Confirm no critical/high issue or unapproved public API diff remains.

`--allow-dirty` and disabled package-version enforcement are diagnostic/test-only behaviors.
The release workflow never uses them.

Before the version bump commit, the same pipeline can be exercised without weakening the
protected stable gate:

```bash
pnpm release:verify -- --version=3.0.0 --channel=stable --diagnostic --allow-dirty
```

## Artifact Review

Run the `V3 Release` workflow from the reviewed master commit with publishing disabled. Inspect:

- `release.json`
- `RELEASE_NOTES.md`
- `registry/*.json`
- `npm-pack-dry-run.json`
- `npm-tarball.json`
- `npm/*.tgz`
- `SHA256SUMS.txt`
- Definition of Done evidence matrix once Faz 15 is complete

The release manifest must identify npm and registry as two outputs of the same version and commit.

## Publish

Publishing is allowed only through the protected workflow while
`release.config.json → npm.publishWorkflowReady` is `true`. The workflow publishes the reviewed
`release-artifacts/npm/*.tgz` tarball, then verifies npm dist-tags and runs a clean npm registry
install smoke.

Required stable order:

1. Merge the reviewed `v3 → master` PR.
2. Wait for the matching Vercel production deployment.
3. Smoke production docs and registry endpoints.
4. Run artifact review mode on the exact master SHA.
5. Approve the protected `v3-production` environment.
6. Publish `poyraz-ui@3.0.0` to npm `latest` from the reviewed artifact.
7. Add `legacy-v2` to the declared final V2 version.
8. Create immutable `v3.0.0` tag and GitHub Release.
9. Run npm package and production registry post-release smoke.

Never run local `npm publish` for stable. The protected workflow must publish the reviewed
artifact and record provenance.

## Production Registry

Canonical endpoints:

- `https://ui.poyrazavsever.com/r/registry.json`
- `https://ui.poyrazavsever.com/r/{name}.json`

Consumer namespace:

```json
{
  "registries": {
    "@poyraz": "https://ui.poyrazavsever.com/r/{name}.json"
  }
}
```

Hosting must return a successful status and JSON content type. Cache invalidation must never
leave `registry.json` pointing to missing item payloads.

## Post-release

1. Verify `npm view poyraz-ui@3.0.0 version` and npm `latest`.
2. Verify npm `legacy-v2` points to the declared V2 version.
3. Install `poyraz-ui@3.0.0` in one clean Next.js and one clean Vite project.
4. Install `@poyraz/button` from the production namespace.
5. Verify the release tag points to the reviewed master commit.
6. Verify checksums against the GitHub artifact.
7. Confirm migration and V2 legacy links remain visible.
8. Replace `Unreleased` with the release date.

## Consumer Rollback

Runtime package rollback:

```bash
pnpm remove poyraz-ui
pnpm add poyraz-ui@legacy-v2
```

Restore the V2 preset/theme integration described in the legacy docs. If the application
adopted new V3-only props, variants or exports, revert the corresponding source commit before
installing V2.

Uninstall V3 without a V2 fallback:

```bash
pnpm remove poyraz-ui
```

Then remove `@import "poyraz-ui/preset.css";` and package imports. Registry-installed files are
consumer-owned and are not removed by uninstalling the npm package; revert or delete them
through version control only after checking local modifications.

## Maintainer Rollback

- Do not delete, overwrite or reuse a published npm version or git tag.
- If the npm package is critical, move `latest` to the last known-good stable version and
  publish a patch.
- If docs/registry are critical, restore the previous Vercel deployment and publish a patch
  from canonical source.
- Keep npm package, hosted registry, docs and release notes explicit when one channel is
  temporarily rolled back.
