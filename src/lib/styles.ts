// The keyboard focus ring shared by interactive components: hidden for mouse users, a 2px solid
// outline in the main text color for keyboard users. `outline-solid` is required: in Tailwind v4
// the hide class and the 2px width both read one style variable, so without it no ring draws.
export const focusRing =
  "outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text";
