import { codeToHtml } from "shiki";

// Syntax-highlights code to HTML on the server. The output goes into .code-panel, which
// makes the background transparent and adds line numbers (see globals.css).
export function highlight(code: string, lang: string) {
  return codeToHtml(code, { lang, theme: "github-dark" });
}
