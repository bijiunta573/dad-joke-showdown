import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, written to be told out loud at the dinner table:
// a straight-faced setup, then a single clean pun that lands on the
// last words. 88 characters, well inside the 200-character gate.
const joke =
  "My daughter asked why I put a clock in the blender. I said, 'I wanted to make time fly.'";

// The gate refuses anything outside 1-200 characters, so fail loudly
// here instead of shipping an entry the judge never sees.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke is ${joke.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
