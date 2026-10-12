import type { MenuGroup } from "@/components/side-menu";
import { components } from "@content/components";

// The left menu of the Components section, built from each component's meta.ts and
// grouped by meta.group, in the order the components are listed in the registry.
export const COMPONENTS_MENU: MenuGroup[] = components.reduce<MenuGroup[]>((groups, meta) => {
  const item = { href: `/components/${meta.slug}`, label: meta.title };
  const group = groups.find((g) => g.title === meta.group);
  if (group) group.items.push(item);
  else groups.push({ title: meta.group, items: [item] });
  return groups;
}, []);
