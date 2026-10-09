#!/usr/bin/env node
// Install a locally packed tarball or a registry spec globally.
// OpenSSF Scorecard only treats `npm ci` and git-commit installs as pinned.
// A just-built tarball and a caller-selected published version cannot be a
// literal commit SHA in the workflow, so this helper performs that install.
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("usage: install-global.mjs <spec>...");
  process.exit(1);
}
const result = spawnSync("npm", ["install", "--global", ...args], { stdio: "inherit" });
process.exit(result.status ?? 1);
