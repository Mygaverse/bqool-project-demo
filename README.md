# BQool Design System — Token Pipeline Demo

A working demonstration of a Figma-to-code design token pipeline, built for the
BQool case study in my portfolio. The token *values* and *component patterns*
here are inspired by that project; nothing in this repo is BQool's real source
code or real design tokens.

```
Figma (Variables) → Token Studio → GitHub sync (this repo, tokens/*.json)
  → CI: Style Dictionary build → CSS custom properties + JS tokens
  → Tailwind theme → component library → Storybook (deployed on push to main)
```

## How it works

1. **`tokens/`** holds the raw token source, in [Tokens Studio for Figma](https://tokens.studio/)'s
   multi-file export format (`global.json` → `semantic.json` → `component.json`,
   plus `$metadata.json` / `$themes.json`). This is the exact structure Token
   Studio's GitHub sync plugin writes to when you save a token change in Figma —
   so a token edit shows up here as a normal, reviewable diff.
2. **`style-dictionary.config.mjs`** builds those JSON files into platform
   output using [Style Dictionary](https://styledictionary.com/) with
   [`@tokens-studio/sd-transforms`](https://github.com/tokens-studio/sd-transforms)
   (which understands Token Studio's `{alias}` references and per-type unit
   conversion). Run `npm run tokens:build` to regenerate:
   - `src/styles/tokens.css` — CSS custom properties (`--color-brand-500`, etc.)
   - `src/tokens/tokens.js` — the same values as JS exports
3. **`tailwind.config.ts`** maps Tailwind's theme (colors, spacing, radius) to
   those CSS custom properties, so components author with normal Tailwind
   classes (`bg-brand-500`, `rounded-token-md`) while the actual values live in
   one place.
4. **`src/components/`** is a small original component set (Button, Badge,
   Card, Input, StatusPill) styled entirely from the generated tokens, with
   Storybook stories for each.
5. **CI** (`.github/workflows/ci.yml`) rebuilds the tokens on every push/PR and
   fails if the committed `tokens.css`/`tokens.js` don't match the token
   source — so a stale build can't silently merge. On push to `main` it also
   builds and deploys Storybook to GitHub Pages.

## Local development

```bash
npm install
npm run tokens:build     # regenerate CSS/JS from tokens/*.json
npm run dev               # Next.js app at localhost:3000
npm run storybook         # component catalog at localhost:6006
```

## Changing a token

Either edit `tokens/*.json` directly, or (the real workflow) change the value
in Figma via Token Studio and let its GitHub sync open a PR here. Either way:
run `npm run tokens:build`, commit the regenerated `src/styles/tokens.css` and
`src/tokens/tokens.js` alongside the token source change, and open a PR — CI
will fail if the generated files don't match.
