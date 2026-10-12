// The keyboard focus ring shared by interactive components: hidden for mouse users, a 2px solid
// outline in the main text color for keyboard users. `outline-solid` is required: in Tailwind v4
// the hide class and the 2px width both read one style variable, so without it no ring draws.
export const focusRing =
  "outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text";

// ---- Overlays ----------------------------------------------------------------------------
// Everything that opens over the page (tooltip, popover, hover card, menus, select, dialogs)
// shares these four decisions. They are written up under "Overlays" in design.md.

// The surface of a floating panel: the surface fill, a strong hairline so it separates from the
// page, the lg radius (the 8px ceiling) and a soft shadow. No arrows. popupShape is the same
// without the fill and border color, for a popup that sets its own (a toast tone).
export const popupShape = "rounded-lg border text-text shadow-xl shadow-black/50 outline-hidden";
export const popupSurface = `${popupShape} border-border-strong bg-surface`;

// Opening and closing: a 150ms fade with a small scale from 97%, growing out of the side it
// opens from. Reduced motion gets no transition.
export const popupMotion =
  "origin-[var(--transform-origin)] transition-[opacity,scale] duration-150 ease-out data-[starting-style]:scale-97 data-[starting-style]:opacity-0 data-[ending-style]:scale-97 data-[ending-style]:opacity-0 motion-reduce:transition-none";

// The dim layer behind a modal dialog: black at 60%. z-50 sits above the sticky header (z-40);
// toasts use z-60 so they stay visible over a dialog.
export const backdropStyles =
  "fixed inset-0 z-50 min-h-dvh bg-black/60 transition-opacity duration-150 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 motion-reduce:transition-none";

// One row of a menu, shared by the dropdown menu and the context menu. The colors are in
// menuItemTones, so a destructive row replaces them instead of competing with them.
export const menuItemStyles =
  "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-base outline-hidden select-none data-[disabled]:cursor-not-allowed data-[disabled]:text-text-secondary";

export const menuItemTones = {
  default: "text-text data-[highlighted]:bg-text/10",
  destructive: "text-danger data-[highlighted]:bg-danger/10",
} as const;

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
