<!-- BEGIN:nextjs-agent-rules -->
# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.
<!-- END:nextjs-agent-rules -->

# Project-specific

## Tech stack
- **Next.js 16.2.10** (canary) + **React 19.2.4** — App Router.
- **Tailwind CSS v4** (no config file; `@import "tailwindcss"` in CSS; `@tailwindcss/postcss` plugin).
- **React Compiler** enabled (`reactCompiler: true` in `next.config.mjs`); uses `babel-plugin-react-compiler`.
- **ESM** — config files use `.mjs`.
- **JSX** (no TypeScript); path alias `@/*` → `./src/*` (via `jsconfig.json`).

## Commands
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint 9 flat config (no typecheck available)

## Project structure
- `src/app/` — App Router: `layout.jsx`, `page.jsx`, `globals.css`
- `src/components/sections/` — page-level sections (e.g. `MenuSection.jsx`)
- `src/components/ui/` — reusable UI (e.g. `MenuCard.jsx`)
- `src/data/menu.js` — menu data (static, imported directly)
- `src/lib/utils.js` — empty placeholder
- `src/components/MapComponent.jsx` — empty placeholder

## Conventions
- CSS uses `@theme inline` for Tailwind theme tokens, CSS custom properties for colors, and `@apply` for Tailwind utility composition.
- Menu data is static JSON in `src/data/menu.js`; no API or database.
- No test framework installed.
