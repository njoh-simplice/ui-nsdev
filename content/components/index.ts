// Every component on the site. To add one: create content/components/<slug>/ with a
// meta.ts and a demo.tsx, add the page under src/app/components/<slug>/, and list its meta here.
// The order here doesn't matter: the menu and the index sort A to Z.
import { meta as button } from "./button/meta";
import { meta as avatar } from "./avatar/meta";
import { meta as badge } from "./badge/meta";
import { meta as checkbox } from "./checkbox/meta";
import { meta as input } from "./input/meta";
import { meta as label } from "./label/meta";
import { meta as progress } from "./progress/meta";
import { meta as radioGroup } from "./radio-group/meta";
import { meta as separator } from "./separator/meta";

export const components = [
  button,
  avatar,
  badge,
  checkbox,
  input,
  label,
  progress,
  radioGroup,
  separator,
];
