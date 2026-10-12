import { readFileSync } from "node:fs";
import path from "node:path";

export type ThemeToken = { name: string; value: string };

// Everything here reads src/app/globals.css on the server at build time, so the Theming and
// Typeset pages can never drift from what the components actually use.
function readGlobalsCss() {
  return readFileSync(path.join(process.cwd(), "src/app/globals.css"), "utf8").replace(/\r\n/g, "\n");
}

export function readTheme() {
  const block = readGlobalsCss().match(/@theme\s*\{[\s\S]*?\n\}/)?.[0];
  if (!block) throw new Error("No @theme block found in src/app/globals.css");

  const tokens: ThemeToken[] = [...block.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => ({
    name: m[1],
    value: m[2].trim(),
  }));

  return {
    block,
    colors: tokens.filter((t) => t.name.startsWith("color-")),
    radii: tokens.filter((t) => t.name.startsWith("radius-")),
    fonts: tokens.filter((t) => t.name.startsWith("font-")),
  };
}

// The .doc-prose rules: the comment that introduces them plus the whole @layer block.
export function readProseSource() {
  const css = readGlobalsCss();
  const start = css.indexOf("/* Long-form content");
  const open = start === -1 ? -1 : css.indexOf("{", css.indexOf("@layer components", start));
  if (open === -1) throw new Error("No .doc-prose block found in src/app/globals.css");

  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === "{") depth++;
    if (css[i] === "}" && --depth === 0) return css.slice(start, i + 1);
  }
  throw new Error("Unbalanced braces in the .doc-prose block of src/app/globals.css");
}
