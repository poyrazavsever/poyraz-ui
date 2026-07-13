# Phase 16 npm tarball readiness

Date: 2026-07-13

## Scope

Phase 16 prepares the `poyraz-ui@3.x` npm package for reviewed artifact publishing. It does not
locally publish stable. Stable publish remains a protected workflow action after master deploy
validation in Phase 17.

## Package contract

- Package name remains `poyraz-ui`.
- Public package exports:
  - `poyraz-ui`
  - `poyraz-ui/atoms`
  - `poyraz-ui/molecules`
  - `poyraz-ui/organisms`
  - `poyraz-ui/themes`
  - `poyraz-ui/preset.css`
- `sideEffects` preserves CSS assets so `poyraz-ui/preset.css` cannot be tree-shaken away.
- `files` is limited to runtime build output, preset CSS, CLI, README, changelog and license.
- Node policy is `node >=22` and `pnpm >=11.5.1`.
- `prepublishOnly` runs package build, library typecheck, package export smoke and npm pack
  dry-run.

## Artifact contract

`pnpm release:artifacts -- --version=<version> --channel=<channel>` produces:

- `release.json`
- `RELEASE_NOTES.md`
- `DOD_EVIDENCE.md`
- `registry/*.json`
- `npm-pack-dry-run.json`
- `npm-tarball.json`
- `npm/*.tgz`
- `SHA256SUMS.txt`

Tarball budgets are declared in `release.config.json`:

- `maxSizeBytes`: `750000`
- `maxUnpackedSizeBytes`: `3500000`

## Consumer smoke

`pnpm release:tarball-smoke` creates a real npm tarball and installs it into isolated Next.js and
Vite projects. The smoke validates:

- package root/subpath imports;
- `poyraz-ui/preset.css` import in production build;
- tarball CLI execution through `pnpm exec poyraz-ui init --mode registry`;
- npm package Button and registry-installed Button in the same app;
- Next and Vite typecheck;
- Next and Vite production build.

The same script supports post-publish npm registry validation with:

```bash
pnpm release:tarball-smoke -- --package-spec poyraz-ui@3.0.0
```

## Publish automation

The `V3 Release` workflow:

- builds and uploads the reviewed release artifact;
- smoke-tests the generated tarball in clean consumers before upload;
- publishes `release-artifacts/npm/*.tgz` with npm provenance from the protected
  `v3-production` environment;
- skips duplicate npm publish if the exact version already exists;
- maps prerelease channels to `next` and stable to `latest`;
- preserves the declared V2 package through `legacy-v2`;
- verifies npm dist-tags after publish;
- runs a clean install smoke from the npm registry after publish.

## Deferred to Phase 17

- Actual `3.0.0` version bump on the release commit.
- Actual npm stable publish.
- Vercel production smoke.
- Immutable `v3.0.0` git tag and GitHub Release publication from master.
