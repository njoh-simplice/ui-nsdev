import type { MenuGroup } from "@/components/side-menu";
import { components } from "@content/components";

const byTitle = (a: string, b: string) => a.localeCompare(b, "en", { sensitivity: "base" });

// Groups appear in this order; any group not listed follows, A to Z. Components inside a group
// are always A to Z.
const GROUP_ORDER = ["Foundations", "Form controls"];
const byGroup = (a: string, b: string) => {
  const rank = (title: string) => {
    const index = GROUP_ORDER.indexOf(title);
    return index === -1 ? GROUP_ORDER.length : index;
  };
  return rank(a) - rank(b) || byTitle(a, b);
};

// Every component, A to Z. The index page and the left menu both read this, so adding a
// component to the registry puts it in the right place in both.
export const SORTED_COMPONENTS = [...components].sort((a, b) => byTitle(a.title, b.title));

// The left menu of the Components section: grouped by meta.group, in GROUP_ORDER, with the
// components inside each group in alphabetical order.
export const COMPONENTS_MENU: MenuGroup[] = SORTED_COMPONENTS.reduce<MenuGroup[]>((groups, meta) => {
  const item = { href: `/components/${meta.slug}`, label: meta.title };
  const group = groups.find((g) => g.title === meta.group);
  if (group) group.items.push(item);
  else groups.push({ title: meta.group, items: [item] });
  return groups;
}, []).sort((a, b) => byGroup(a.title, b.title));
