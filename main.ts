// makefun-judge-laugh-rama
// Entry for "Make the AI Judge Laugh" (u-rama-melon-make-the-ai-judge-laugh-302d0825).
// The program writes one original one-line joke about office life to
// /output/entry.txt. Deterministic: no clock, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, under 200 characters. The observation is true to every office
// (the printer always jams at the worst moment, and every final file is
// named FINAL_v2_ACTUAL_FINAL); the turn is the printer being able to read.
const JOKE =
  "The printer never jams on a draft — only on files called FINAL_v2_ACTUAL_FINAL, which is how I know it can read.";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

// Self-check against the gate before writing: 1-200 characters, one line,
// not only whitespace. Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} characters; the gate allows 1-200.`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-blank line.");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${OUT_PATH}`);
