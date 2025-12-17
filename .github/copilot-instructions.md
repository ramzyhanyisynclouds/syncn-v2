# AI Coding Agent Instructions

This Nuxt 4 app uses Tailwind CSS, shadcn-vue UI components, and Reka UI primitives. Follow these project-specific conventions to be immediately productive.

## Architecture & Conventions
- **Nuxt 4 + Vite**: Entry in `app.vue`, routes under `pages/`, layouts in `layouts/`. Config in `nuxt.config.ts`.
- **Tailwind CSS**: Loaded via `assets/css/tailwind.css` using `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`. Do NOT write `@import "tailwindcss"` in Vue `<style>` blocks.
- **shadcn-vue UI**: Components exist in two mirrors:
  - `components/ui/**` (index.ts barrels + SFCs)
  - `ui/**` (index.ts barrels + SFCs)
  Prefer explicit imports, e.g. `import { Button } from "@/components/ui/button"` or `import { Button } from "~/ui/button"`.
- **Auto-imported components**: Nuxt auto-reg registers only `.vue` files (see `components.dirs` in `nuxt.config.ts`) to avoid conflicts with `index.ts` barrels.
- **Theming**: Use the local composable `useAppearance()` ([composables/useAppearance.ts](../composables/useAppearance.ts)) to set `appearance` and toggle the `dark` class. Avoid writing to `useColorMode()` directly.
- **Reka UI primitives**: UI components wrap `Primitive` from `reka-ui` and accept `as`/`asChild`. Use `as-child` to render links inside buttons.

## Dev Workflow
- **Install & run** (Windows PowerShell):
```powershell
Push-Location "d:\laragon\www\iSynclouds\V2\syncn-v2"
npm install
npm run dev
```
- **Build/Preview**:
```powershell
npm run build
npm run preview
```
- **Tailwind viewer**: Visit `/_tailwind/` when dev server is running.

## Patterns & Examples
- **Buttons with NuxtLink (shadcn)**: Use `as-child` and NuxtLink for internal navigation.
  - Example from [pages/index.vue](../pages/index.vue):
    ```vue
    <Button as-child>
      <NuxtLink to="/contact">Contact SyncN</NuxtLink>
    </Button>
    ```
- **Variant & size**: `Button` accepts `variant` (`default`, `secondary`, `outline`, etc.) and `size` (`sm`, `lg`, `icon`). See [components/ui/button/index.ts](../components/ui/button/index.ts).
- **Icons**: Use `lucide-vue-next` imports and place inside shadcn `Button` children.
- **Images**: Import from `assets/public/**` for bundling-friendly paths.

## Gotchas
- **PostCSS error**: If you see `[postcss] postcss-import: ... Unknown word "use strict"`, remove any `@import "tailwindcss"` from `.vue` `<style>` blocks. Tailwind must be loaded via CSS files (`assets/css/tailwind.css`).
- **Component name conflicts**: Avoid auto-registering `.ts` barrels; only `.vue` components are auto-imported. Prefer explicit imports from `components/ui/**` or `ui/**`.
- **Color mode**: The warning `computed value is readonly` occurs if you write to `useColorMode()` from `@vueuse/core`. Use `useAppearance()` to update theme (`light`/`dark`).

## Key Files
- Config: [`nuxt.config.ts`](../nuxt.config.ts)
- Tailwind entry: [`assets/css/tailwind.css`](../assets/css/tailwind.css)
- UI Button: [`components/ui/button/Button.vue`](../components/ui/button/Button.vue)
- Button variants: [`components/ui/button/index.ts`](../components/ui/button/index.ts)
- Home page: [`pages/index.vue`](../pages/index.vue)

## What to keep in mind
- Use `NuxtLink` with `Button as-child` for internal routes; use `<a>` for external links.
- Follow Tailwind utility classes; add custom CSS inside scoped `<style>` in pages/components, not in Tailwind entry.
- Keep changes minimal and consistent with existing patterns.
