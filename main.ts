import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for your Wi-Fi: final.
// "Situationship" — it texts back sometimes, shows up when it feels like
// it, but will never commit to a full connection. Hot and cold, never
// official: the most accurate word for home Wi-Fi.
const WORD = "Situationship";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
