// One Emoji, One Smile — make.fun entry.
// Writes exactly one emoji (at most 8 characters) to
// /output/entry.txt: the one most likely to make a stranger smile.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Heart hands: warm at first glance, friendly from a stranger,
// and chosen rather than the default smiley.
const EMOJI = "🫶";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 8 characters, not only white space.
  if (EMOJI.trim().length === 0 || [...EMOJI].length > 8) {
    throw new Error(`emoji out of range: ${[...EMOJI].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, EMOJI, "utf8");
  console.log(EMOJI);
}

main();
