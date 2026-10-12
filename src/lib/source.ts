import { readFileSync } from "node:fs";
import path from "node:path";

// Reads a file from the repository on the server at build time. Code shown on the site
// always comes through here, so what is displayed is the file that actually renders.
//
// The path is a variable, which would make Turbopack trace (and ship) the whole project with
// the server code. Every page that calls this is pre-rendered at build time and never reads
// a file at runtime, so that tracing is unwanted and the ignore below is safe.
export function readSource(relativePath: string) {
  const file = path.join(/*turbopackIgnore: true*/ process.cwd(), relativePath);
  return readFileSync(file, "utf8").replace(/\r\n/g, "\n").trimEnd();
}
