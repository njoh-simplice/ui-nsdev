# Design System — ui.nsdev.me

Reference for the tokens used across the component library. Values here are final.
Tailwind utilities come from the `@theme` block in `app/globals.css`.

---

## Color

Single dark theme. No light mode yet — that is an open item under Polish.

| Token | Hex | Role |
|---|---|---|
| `bg` | `#0A0A0A` | Page background |
| `surface` | `#171717` | Cards, panels |
| `border` | `#262626` | Default hairline border |
| `border-strong` | `#404040` | Emphasized border, off-state toggle track |
| `muted` | `#525252` | Structural only — dividers, disabled fills. Never text (2.53:1 on `bg`, fails AA). |
| `text-secondary` | `#737373` | Labels, captions, larger text only (4.18:1 on `bg` — just under AA for small body copy) |
| `text` | `#E5E5E5` | Primary text (15.7:1 on `bg`) |
| `accent` / `success` | `#00FF66` | Active/on states, primary CTA, success — same green covers both roles, don't split it |
| `warning` | `#FFB020` | Warning states |
| `danger` | `#FF3355` | Destructive actions, error states |

### Usage rules

- **`muted` is structural only.** Dividers and disabled fills — never text. It is 2.53:1 on
  `bg` and fails AA.
- **`text-secondary` is for labels, captions, and larger text only.** At 4.18:1 on `bg` it
  sits just under AA for small body copy; don't use it for paragraphs.
- **`accent` and `success` are one green.** The same `#00FF66` covers active/on states, the
  primary CTA, and success. Do not introduce a separate success color.
- **Solid semantic fills pair with `bg` on top.** Any solid fill of `accent`, `success`,
  `warning`, or `danger` uses `bg` (`#0A0A0A`) as the text/icon color on top — never `text`.
  Light-on-fill contrast fails badly on all four (as low as 1.08:1); dark-on-fill is
  5.5–14.6:1 across the board.
- **Low-emphasis inline alerts and banners.** Use a ~9% opacity wash of the semantic color
  as the background with a ~30% opacity border. Reserve the full-strength color for the
  indicator dot, icon, or button — not the whole surface.

---

## Typography

Geist and Geist Mono only. No third face.

| Face | Roles |
|---|---|
| **Geist Sans** | UI text, headings, body |
| **Geist Mono** | Code, Shiki source panels, inline code |

### Why only two

One sans plus one mono keeps the type system closed — every piece of text maps to a role
without a judgement call. The mono face isn't optional: Shiki renders each component's real
source at build time, and inline code has to match those panels, so a dedicated monospace
is load-bearing rather than decorative. A third face would add weight and a decision point
with nothing to do.

### Self-hosting

Use the official `geist` npm package (`npm install geist`), not a Google Fonts import — it
is zero-config with `next/font` and avoids an external request.

In `app/layout.tsx`:

- import `GeistSans` from `geist/font/sans` and `GeistMono` from `geist/font/mono`
- apply `` `${GeistSans.variable} ${GeistMono.variable}` `` on the `<html>` element

These expose `--font-geist-sans` / `--font-geist-mono`, which `--font-sans` / `--font-mono`
in the `@theme` block point at.

> Note: `app/layout.tsx` currently still loads Geist via `next/font/google`. Migrating it to
> the `geist` package is a pending setup step, tracked separately.

---

## Radius

Ceiling is **8px**. Scale by component size — not one flat value everywhere.

| Token | Value | Applies to |
|---|---|---|
| `--radius-sm` | `4px` | Small controls: checkboxes, badges, tags |
| `--radius-md` | `6px` | Buttons, inputs, small cards |
| `--radius-lg` | `8px` | Cards, panels, dialogs, dropdowns (the ceiling) |

These override Tailwind's built-in `rounded-sm` / `rounded-md` / `rounded-lg` scale, so
those are the utility names to use — e.g. `rounded-md` on a button, `rounded-lg` on a
dialog. Nothing in the system rounds past 8px.
