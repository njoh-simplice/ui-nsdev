@AGENTS.md

# ui.nsdev.me

## Overview

`ui.nsdev.me` is a component library site — a subdomain of Njoh Simplice Junior's
portfolio (`nsdev.me`). Base UI (`@base-ui/react`) is the headless primitive layer, styled
with Tailwind, built progressively.

Content is organized into five sections plus docs:

- **Doc** — documentation.
- **Components** — primitives (Button, Select, Dialog, …).
- **Blocks** — composed sections built from Components (hero, bento grid, pricing table).
- **Pages** — full templates built from Blocks.
- **Dashboard** — full app screens, built last, kept separate from Pages.

Nav: `Logo | Doc, Components, Blocks, Pages, Dashboard | [Give us a star]`

The header button is a GitHub link labelled "Give us a star" — no star count.

## Tech stack

- **Next.js 16**, App Router.
- **Tailwind CSS v4**, CSS-first config — no `tailwind.config.js`. Tokens live in an
  `@theme` block in `app/globals.css`.
- **Shiki** runs server-side and highlights each item's actual source file at build time,
  so displayed code can never drift from what's rendering.
- No backend, no database — fully static, file-based content model, pre-rendered at build
  time.
- Hosted on Vercel.

## Content model

Content lives in `content/{components,blocks,pages,dashboard}`. Each item is a
`meta.ts` + `demo.tsx` pair.

Import content with the `@content/*` alias (it maps to `content/*`).

**Never hand-write example code for a component separately from its real source file.**
Shiki must always read the actual source file (`demo.tsx`) — that is the entire point of
the demo → source → page pipeline. If the displayed code and the rendered demo can
diverge, the pipeline is broken.

## Design tokens

See [`design.md`](./design.md) for the full color, typography, and radius reference. Do not
redefine tokens here or inline — use the Tailwind utilities generated from the `@theme`
block (`bg-bg`, `text-accent`, `border-border`, `rounded-md`, `font-mono`, …).

## Build order

1. Skeleton — **done**.
2. **Components: Foundations — Button, Input, Field, Separator — CURRENT PHASE.** Button
   ships first, with a full detail page (live demo, source panel, notes, accessibility
   section), since it has to prove the demo → source → page pipeline before it's repeated
   across Base UI's ~38 components.
3. Components index page.
4. Blocks, starting with Hero.
5. Pages — compose one landing page from existing Blocks.
6. Dashboard — highest complexity, last.
7. Polish — dark/light mode, motion vocabulary, consistent focus rings.

## Git workflow

- `main` is always deployable and auto-deploys to Vercel. **Never commit or push directly
  to `main`.**
- Every piece of work gets its own short-lived branch, cut from an up-to-date `main` and
  named `type/short-description`, where type is `feat` (new component, block or page),
  `docs`, `fix` or `chore` — e.g. `feat/button-page`, `fix/nav-active-state`.
- One concern per commit. Commit messages are short imperative sentences ("Add Button
  states").
- Land work through a pull request and **squash-merge** it, so each piece is one commit on
  `main`. Delete the branch afterwards.
- A change to the library (a component or a token) adds an entry to the changelog in the
  same branch. Site-only tweaks (header, hero, layout) don't.
- The `gh` CLI isn't installed. Push the branch, then open the PR from
  `https://github.com/njoh-simplice/ui-nsdev/compare/<branch>?expand=1`.

## Deployment

- Repo is public: https://github.com/njoh-simplice/ui-nsdev (the header CTA and footer
  link to it).
- Hosted on Vercel, auto-deploys on push to `main`.
- DNS stays on Cloudflare (the existing `nsdev.me` zone) — `ui` is a CNAME pointed at
  Vercel, DNS-only (not proxied).
- Cloudflare Workers/vinext was tried first and abandoned.

## Open decisions — ask, don't assume

- **Distribution model:** `npm install` vs. a shadcn-style copy-paste registry. Deferred on
  purpose — don't build either yet.
