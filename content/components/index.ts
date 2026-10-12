// Every component on the site. To add one: create content/components/<slug>/ with a
// meta.ts and a demo.tsx, add the page under src/app/components/<slug>/, and list its meta here.
// The order here doesn't matter: the menu and the index sort A to Z.
import { meta as accordion } from "./accordion/meta";
import { meta as alert } from "./alert/meta";
import { meta as avatar } from "./avatar/meta";
import { meta as badge } from "./badge/meta";
import { meta as button } from "./button/meta";
import { meta as card } from "./card/meta";
import { meta as checkbox } from "./checkbox/meta";
import { meta as collapsible } from "./collapsible/meta";
import { meta as dialog } from "./dialog/meta";
import { meta as field } from "./field/meta";
import { meta as hoverCard } from "./hover-card/meta";
import { meta as input } from "./input/meta";
import { meta as kbd } from "./kbd/meta";
import { meta as label } from "./label/meta";
import { meta as popover } from "./popover/meta";
import { meta as progress } from "./progress/meta";
import { meta as radioGroup } from "./radio-group/meta";
import { meta as separator } from "./separator/meta";
import { meta as skeleton } from "./skeleton/meta";
import { meta as slider } from "./slider/meta";
import { meta as spinner } from "./spinner/meta";
import { meta as switchMeta } from "./switch/meta";
import { meta as tabs } from "./tabs/meta";
import { meta as textarea } from "./textarea/meta";
import { meta as toggle } from "./toggle/meta";
import { meta as toggleGroup } from "./toggle-group/meta";
import { meta as tooltip } from "./tooltip/meta";

export const components = [
  accordion,
  alert,
  avatar,
  badge,
  button,
  card,
  checkbox,
  collapsible,
  dialog,
  field,
  hoverCard,
  input,
  kbd,
  label,
  popover,
  progress,
  radioGroup,
  separator,
  skeleton,
  slider,
  spinner,
  switchMeta,
  tabs,
  textarea,
  toggle,
  toggleGroup,
  tooltip,
];
