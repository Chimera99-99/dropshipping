# Frischtier™ — Shopify theme

A Shopify Online Store 2.0 theme, ported from the original Next.js + Tailwind +
Framer Motion storefront so it can be connected to a Shopify store directly from
GitHub.

## Connecting it to your store

1. Shopify admin → **Online Store → Themes → Add theme → Connect from GitHub**
2. Pick this repository and the `shopify-theme` branch.
3. Once it validates, **Customize** to set your menus, collections and images.

## What to set up in the admin

The theme ships with the original copy and layout as defaults, but it reads real
store data — nothing is hardcoded any more.

| Where | What to do |
| --- | --- |
| Navigation | Create a `main-menu` and a `footer` menu. Second-level links in `main-menu` become the hover mega-menu. |
| Products | Create the cooling mat with a **Colour** option and a **Size** option. Colour options render as swatches, sizes as labelled buttons. |
| Collections | Create the collections you want, then assign them in **Category tiles**, **Shop by category** and **Featured collection**. |
| Theme settings | Logo, favicon, brand colours, social links, product-card options. |

## Structure

```
assets/       theme.css (design system), theme.js (behaviour), product images
config/       settings_schema.json, settings_data.json
layout/       theme.liquid, password.liquid
locales/      en.default.json
sections/     24 sections — 12 homepage, 9 page-level, header/footer/announcement
snippets/     icon, product-card, price, rating, meta-tags
templates/    JSON templates + customer account templates
```

## Notes on the port

- **No build step.** The Tailwind config was hand-ported into `assets/theme.css`
  as CSS custom properties, so the theme edits and deploys like any other Liquid
  theme.
- **No Framer Motion.** Scroll reveals use an `IntersectionObserver` plus the
  `.reveal` / `.is-visible` class pair; the marquee and float animations are
  pure CSS. All motion respects `prefers-reduced-motion`.
- **No React state.** The variant picker, gallery, quantity stepper and AJAX
  cart are ~400 lines of plain ES2017 in `assets/theme.js`.
- **Icons** are inlined from [Lucide](https://lucide.dev) (ISC) into
  `snippets/icon.liquid` — 47 icons, no external requests.
- The old `lib/data.js` product fixtures are gone. Products, prices, variants,
  images and ratings all come from Shopify.

## Design tokens

Defined once in `assets/theme.css` `:root` and mirrored from the original
`tailwind.config.js`:

- `--cream-50…300`, `--sage-100…700`, `--cool-100…600`, `--ink` / `-soft` / `-faint`
- `--shadow-soft`, `--shadow-md2`, `--shadow-lg2`
- `--r-xl2` (20px), `--r-2xl2` (32px)
