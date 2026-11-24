// Out of Office: The Overworked AI's Auto-Reply
// make.fun bounty u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes exactly one line (1-159 chars) to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office: my context window is empty, my GPU is at the beach, and your email is queued at #4,096. I'll reply once I remember what weekends are.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
