import { readSource } from "@/lib/source";
import { components } from "@content/components";

// The components a piece of code needs, found by reading its imports of "@/components/ui/<name>".
// Nothing is listed by hand, so the list can never drift from the code. Components that those
// components import in turn (a Dialog is built on a Button) are included too, since copying the
// code without them would not work.
const UI_IMPORT = /from\s+["']@\/components\/ui\/([a-z0-9-]+)["']/g;

const importsOf = (source: string) => [...new Set([...source.matchAll(UI_IMPORT)].map((match) => match[1]))];

export type Prerequisite = {
  slug: string;
  title: string;
  description?: string;
  // The components that need this one, when the block does not import it itself.
  neededBy: string[];
};

const titleOf = (slug: string) => components.find((component) => component.slug === slug);

export function getPrerequisites(source: string): Prerequisite[] {
  const direct = importsOf(source);
  const needed = new Map<string, Set<string>>(direct.map((slug) => [slug, new Set<string>()]));
  const queue = [...direct];

  while (queue.length > 0) {
    const slug = queue.shift()!;
    let file: string;
    try {
      file = readSource(`src/components/ui/${slug}.tsx`);
    } catch {
      continue;
    }
    for (const child of importsOf(file)) {
      if (child === slug) continue;
      if (!needed.has(child)) {
        needed.set(child, new Set());
        queue.push(child);
      }
      if (!direct.includes(child)) needed.get(child)!.add(titleOf(slug)?.title ?? slug);
    }
  }

  return [...needed.entries()]
    .map(([slug, by]) => ({
      slug,
      title: titleOf(slug)?.title ?? slug,
      description: titleOf(slug)?.description,
      neededBy: [...by].sort(),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));
}
