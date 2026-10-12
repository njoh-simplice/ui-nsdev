import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import DropdownMenuDemo from "@content/components/dropdown-menu/demo";
import { meta } from "@content/components/dropdown-menu/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A dropdown menu is a list of actions that opens from a button. It keeps rarely used commands one click away without giving each one a button on the page."
      demo={<DropdownMenuDemo />}
      demoPath="content/components/dropdown-menu/demo.tsx"
      sourcePath="src/components/ui/dropdown-menu.tsx"
      props={[
        {
          name: "variant",
          type: '"default" | "destructive"',
          default: '"default"',
          description: "On DropdownMenuItem. The destructive variant turns the row red, for something like Log out or Delete.",
        },
        {
          name: "onClick",
          type: "function",
          description: "On DropdownMenuItem. Runs when the item is chosen. The menu closes afterwards.",
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
          description: "On DropdownMenuCheckboxItem. Whether it starts ticked. Use checked and onCheckedChange to control it.",
        },
        {
          name: "defaultValue",
          type: "string",
          description: "On DropdownMenuRadioGroup. The value of the radio item that starts chosen. Each DropdownMenuRadioItem needs a value.",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "On DropdownMenuContent. Which side of the button it opens on. It flips to the other side if there is no room.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"start"',
          description: "On DropdownMenuContent. How it lines up along that side.",
        },
        {
          name: "render",
          type: "element",
          description: "On DropdownMenuTrigger. Opens the menu from your own element, such as a Button.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Menu underneath."
      thinking={{
        intro:
          "A menu answers the question: what can I do here? It lists actions, so choosing a row does something and the menu goes away.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI handles the open state, the placement, the arrow-key navigation and type-ahead, and it closes the menu when an item is chosen.",
          },
          {
            label: "One row style:",
            text: "The Dropdown Menu and the Context Menu share one look for their rows, so a command looks the same wherever you meet it.",
          },
          {
            label: "Row types:",
            text: "A plain item runs an action. A checkbox item switches something on or off. Radio items choose one of several. Groups and separators keep a long menu readable.",
          },
          {
            label: "Menu or Select:",
            text: "A menu runs commands. A Select picks a value for a form field.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Surface:",
            text: "The shared overlay surface with 4px of padding, so a highlighted row sits inside the border instead of touching it.",
          },
          {
            label: "Rows:",
            text: "Each row has the sm radius and a light wash when highlighted, whether by the pointer or the keyboard.",
          },
          {
            label: "Marks on the left:",
            text: "Ticks and radio dots sit in a column on the left. Shortcuts sit at the right end of the row.",
          },
          {
            label: "Destructive:",
            text: "Red text and a red wash, so a dangerous row can be told apart before reading it.",
          },
          {
            label: "Disabled:",
            text: "The row text uses the muted color and the not-allowed cursor.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Open:",
            text: "Click the button, or press Enter, Space or the Down arrow when it has focus.",
          },
          {
            label: "Keyboard:",
            text: "The arrow keys move through the rows, Home and End jump to the first and last, and typing a letter jumps to a row that starts with it. Enter or Space chooses a row.",
          },
          {
            label: "Close:",
            text: "Escape, a click outside, or choosing an item. Checkbox and radio items keep it open until you leave.",
          },
          {
            label: "Focus:",
            text: "When the menu closes, focus goes back to the button.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced as a menu:",
            text: "The button reports that it opens a menu, and each row is announced with its role. Checkbox and radio rows report whether they are on.",
          },
          {
            label: "Not only a pointer thing:",
            text: "Everything works with the keyboard alone.",
          },
          {
            label: "Don't hide the main action:",
            text: "Put the thing most people came to do on the page. A menu is for the rest.",
          },
          {
            label: "Words, not only icons:",
            text: "Rows are labeled with text so they can be found by reading, searching and typing.",
          },
        ],
      }}
    />
  );
}
