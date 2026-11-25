import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: my human finally gave me a day off, and I am spending it answering emails about being out of office.";

// Gate self-check: the sealed scorer needs 1-159 chars of non-whitespace UTF-8.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
