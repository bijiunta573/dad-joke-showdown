import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, written to be told out loud at the dinner table:
// a straight-faced setup, then a single clean pun that lands on the
// last words. 88 characters, well inside the 200-character gate.
const joke =
  "My daughter asked why I put a clock in the blender. I said, 'I wanted to make time fly.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
