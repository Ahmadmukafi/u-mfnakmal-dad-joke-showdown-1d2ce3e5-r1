import { mkdirSync, writeFileSync } from "node:fs";

// The pun turns on "put my foot down": the idiom for laying down the law,
// and the literal act of a flamingo impersonator standing on one foot.
const JOKE = "My wife told me to stop impersonating a flamingo. I had to put my foot down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE);
