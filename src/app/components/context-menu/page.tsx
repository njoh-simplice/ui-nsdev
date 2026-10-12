import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ContextMenuDemo from "@content/components/context-menu/demo";
import { meta } from "@content/components/context-menu/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A context menu opens where you right-click, or long-press on a touch screen. It offers actions that apply to the thing under the pointer."
      demo={<ContextMenuDemo />}
      demoPath="content/components/context-menu/demo.tsx"
      sourcePath="src/components/ui/context-menu.tsx"
      props={[
        {
          name: "variant",
          type: '"default" | "destructive"',
          default: '"default"',
          description: "On ContextMenuItem. The destructive variant turns the row red, for something like Delete.",
        },
        {
          name: "onClick",
          type: "function",
          description: "On ContextMenuItem. Runs when the item is chosen. The menu closes afterwards.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "On any item. Dims it and stops it from being chosen. The arrow keys can still reach it.",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          description: "On ContextMenuCheckboxItem. Whether it starts ticked. Use checked and onCheckedChange to control it.",
        },
        {
          name: "defaultValue",
          type: "string",
          description: "On ContextMenuRadioGroup. The value of the radio item that starts chosen. Each ContextMenuRadioItem needs a value.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI ContextMenu underneath. The menu opens at the pointer, so it has no side or align."
      thinking={{
        intro:
          "A context menu is a shortcut for people who already know it is there. It should never be the only way to do something.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI opens the menu at the pointer, handles the long-press on touch screens, and gives it the same keyboard navigation as any menu.",
          },
          {
            label: "Same rows as the Dropdown Menu:",
            text: "The items, tick marks, radio dots, separators and shortcuts are the same, so the two menus look like one family.",
          },
          {
            label: "The trigger is the area:",
            text: "ContextMenuTrigger is a box you size and style yourself. Right-clicking anywhere inside it opens the menu.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Surface:",
            text: "The shared overlay surface, the same as the Dropdown Menu, so it appears at the pointer as the same object.",
          },
          {
            label: "Rows:",
            text: "A light wash follows the highlighted row. Destructive rows are red, and disabled rows are muted.",
          },
          {
            label: "Show it can be done:",
            text: "The demo area has a dashed border, so there is a hint that the box does something. Your own areas should hint too.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Open:",
            text: "Right-click, or long-press on a touch screen. The menu opens at the pointer.",
          },
          {
            label: "Keyboard:",
            text: "Once it is open, the arrow keys move through the rows and Enter or Space chooses one. Typing a letter jumps to a row that starts with it.",
          },
          {
            label: "Close:",
            text: "Escape, a click outside, or choosing an item.",
          },
          {
            label: "Page menu:",
            text: "The browser's own menu is replaced inside the area only.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Never the only way:",
            text: "Many people never right-click, and keyboard and touch users can't easily. Every action here should also be reachable with a visible button or a Dropdown Menu.",
          },
          {
            label: "Announced as a menu:",
            text: "Rows are announced with their role, and checkbox rows report whether they are on.",
          },
          {
            label: "Tell people it is there:",
            text: "Nothing says a box has a context menu until someone tries. A line of hint text, as in the demo, helps.",
          },
        ],
      }}
    />
  );
}
