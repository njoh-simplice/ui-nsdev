// The keyboard focus ring shared by interactive components: hidden for mouse users, a 2px solid
// outline in the main text color for keyboard users. `outline-solid` is required: in Tailwind v4
// the hide class and the 2px width both read one style variable, so without it no ring draws.
export const focusRing =
  "outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text";

// The look shared by text fields (Input, Textarea): a 4.2:1 outline that brightens on hover, a
// danger border when marked invalid, and a flat grey when disabled. The caller adds the height.
// Mark a field invalid with aria-invalid, or let a Base UI Field set data-invalid.
export const controlStyles = [
  "w-full min-w-0 rounded-md border border-text-secondary bg-transparent px-3 text-base text-text",
  "placeholder:text-text-secondary",
  "transition-colors duration-150",
  focusRing,
  "not-aria-invalid:not-data-[invalid]:not-disabled:hover:border-text",
  "aria-invalid:border-danger data-[invalid]:border-danger",
  "disabled:cursor-not-allowed disabled:border-border disabled:bg-surface disabled:text-text-secondary",
].join(" ");
