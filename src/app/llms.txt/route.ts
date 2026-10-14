import { SITE_DESCRIPTION, SITE_NAME, GITHUB_URL, AUTHOR_URL } from "@/lib/site";
import { SITE_SECTIONS, absoluteUrl, type SitePage } from "@/lib/site-map";

// /llms.txt: a short, plain-text map of the site for language models, in the llms.txt format
// (a title, a one-line summary, then lists of links). Next has no built-in for it, so it is a
// route handler, generated at build time from the same lists as the sitemap.
export const dynamic = "force-static";

const line = ({ path, title, description }: SitePage) =>
  `- [${title}](${absoluteUrl(path)})${description ? `: ${description}` : ""}`;

export function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION} Every component is fully styled with a small set of theme tokens, has a live demo with its real source code, and comes with notes on its design, interaction and accessibility.`,
    "",
    ...SITE_SECTIONS.flatMap((section) => [
      `## ${section.title}`,
      "",
      ...[...(section.index ? [section.index] : []), ...section.pages].map(line),
      "",
    ]),
    "## Optional",
    "",
    `- [Source code](${GITHUB_URL}): the repository on GitHub`,
    `- [Author](${AUTHOR_URL}): Njoh Simplice Junior`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
