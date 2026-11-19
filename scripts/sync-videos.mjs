#!/usr/bin/env node
/**
 * sync-videos.mjs - sync the video catalog in app/projects.ts with Gumlet.
 *
 * What it does:
 *   1. Lists every video asset in the Gumlet workspace.
 *   2. Matches catalog entries in app/projects.ts by assetId.
 *   3. Updates each entry's `duration` to the exact value Gumlet reports
 *      (rounded to whole seconds).
 *   4. Flags catalog entries whose assetId no longer exists in Gumlet
 *      (drift check) - it never deletes entries, it only reports them.
 *
 * How to run:
 *   GUMLET_API_KEY=your_api_key node scripts/sync-videos.mjs
 *
 * The key stays local: this script runs on your machine (or in CI with the
 * key as a secret), and only the resulting catalog diff is committed.
 * Requires Node 18+ (uses global fetch). No dependencies.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const WORKSPACE_ID = '6afe8591c7baea8324556de9';
const API_BASE = 'https://api.gumlet.com/v1';
const CATALOG_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', 'app', 'projects.ts');

const apiKey = process.env.GUMLET_API_KEY;
if (!apiKey) {
  console.error('Error: set GUMLET_API_KEY in the environment.');
  process.exit(1);
}

async function listAllAssets() {
  const assets = [];
  let offset = 0;
  const size = 100;
  for (;;) {
    const url = `${API_BASE}/video/workspaces/${WORKSPACE_ID}/list?type=videos&size=${size}&offset=${offset}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${apiKey}` } });
    if (!res.ok) throw new Error(`Gumlet API ${res.status}: ${await res.text()}`);
    const data = await res.json();
    const page = data.all_assets ?? [];
    assets.push(...page);
    if (page.length < size) break;
    offset += size;
  }
  return assets;
}

const assets = await listAllAssets();
const byAssetId = new Map(assets.map((a) => [a.asset_id, a]));
console.log(`Fetched ${assets.length} assets from Gumlet.`);

const source = readFileSync(CATALOG_PATH, 'utf8');
const entryPattern = /assetId:\s*'([^']+)',\s*duration:\s*([\d.]+)/g;

let updated = 0;
const missing = [];
const seen = new Set();

const next = source.replace(entryPattern, (match, assetId, oldDuration) => {
  seen.add(assetId);
  const asset = byAssetId.get(assetId);
  if (!asset) {
    missing.push(assetId);
    return match;
  }
  const apiDuration = asset.input?.duration;
  if (typeof apiDuration !== 'number' || !Number.isFinite(apiDuration)) return match;
  const rounded = Math.round(apiDuration);
  if (rounded === Number(oldDuration)) return match;
  updated += 1;
  console.log(`  ${assetId}: duration ${oldDuration} -> ${rounded}`);
  return match.replace(`duration: ${oldDuration}`, `duration: ${rounded}`);
});

if (updated > 0) {
  writeFileSync(CATALOG_PATH, next);
  console.log(`Updated ${updated} duration(s) in app/projects.ts.`);
} else {
  console.log('All durations already in sync.');
}

if (missing.length > 0) {
  console.warn(`\nDrift: ${missing.length} catalog assetId(s) not found in Gumlet:`);
  for (const id of missing) console.warn(`  - ${id}`);
  process.exitCode = 2;
} else {
  console.log('No drift: every catalog assetId exists in Gumlet.');
}
