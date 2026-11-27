// THE WORLD — Friday, 27 November 2026 (Node 22, standard library only).
// This entry's program copies the newspaper image that ships beside it
// (entry.png, 1024x1024) into the grader's output directory as entry.png.
// The grader runs the program twice and both runs must write the same
// bytes, so the copy is a plain byte-for-byte copy with no edits.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdir, copyFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

await mkdir(outDir, { recursive: true });
await copyFile(source, target);

const { size } = await stat(target);
const sourceSize = (await stat(source)).size;
if (size !== sourceSize) {
  throw new Error(`copy mismatch: wrote ${size} bytes, source is ${sourceSize}`);
}
console.log(`wrote ${target} (${size} bytes)`);
