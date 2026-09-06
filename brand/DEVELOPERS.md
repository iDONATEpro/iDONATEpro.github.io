# Brand pack — developer guide

## Name / mark (trade dress)

Write and ship the product name exactly as the logo:

`iDONATEpro`

- lowercase **i**
- uppercase **DONATE**
- lowercase **pro**

Never: `IDONATEPRO`, `iDonatePro`, `iDonate Pro`, `iDONATE Pro`, `iDonatePRO`.

UI copy, titles, email, meta tags, and composites must match. The wordmark files in `logos/` already encode this.

Trade dress. Same tokens on public site, CRM, email, and marketing composites.

## Colors

Pulled from the live public site: `idonatepro.github.io/css/site.css`.
Copy `colors/tokens.css`. Do not invent hex values.

| Token | Hex | Notes |
|---|---|---|
| `--brand` | `#7da447` | Primary |
| `--brand-strong` | `#6a8d39` | Hover |
| `--brand-bright` | `#7ac142` | On black |
| `--brand-bright-hover` | `#92d45f` | Bright button hover |
| `--brand-soft` | `#eef5e5` | Mint wash |
| `--brand-on-white` | `#5c7a32` | Green text on white btn |
| `--navy` | `#020617` | **Black** (label) |
| `--ink` | `#0f172a` | Text |
| `--muted` | `#475569` | Secondary |
| `--line` | `#e2e8f0` | Borders |
| `--bg` | `#f5f8f1` | Page |
| `--slate-700` | `#334155` | Nav / card copy |
| `--slate-500` | `#64748b` | Captions |
| `--slate-300` | `#cbd5e1` | Lede on dark |

## Logo colors (trade dress — never change)

The trademark wordmark colors are fixed in the logo file. **Never recolor them.**

| Role | Hex | Notes |
|---|---|---|
| Green (i-dot + **pro**) | `#7BC143` | Trademark green — not `--brand` `#7da447` |
| Gray (**DONATE**) | `#666666` | Trademark gray — not ink / slate |
| White | `#FFFFFF` | Unused BG layer in the SVG |

Source file: `logos/wordmark.svg` (= `idonatepro-logo.svg` on the public site).

- Do **not** remap logo fills to CSS tokens (`#7da447`, `#7ac142`, `#0f172a`, etc.).
- On dark backgrounds, put the **unchanged** wordmark on a white/light pill — do not invert or recolor the mark.
- One wordmark. No “on-light / on-dark / green” color variants.

## Logo files

| File | Use |
|---|---|
| `logos/wordmark.svg` | Exact TM wordmark |
| `logos/wordmark.png` | Same, raster for email |
| `logos/idonatepro-logo.svg` | Alias of TM file |
| `logos/mark.png` | Compact mark if present |

## Type

- Display / headlines: **Archivo** 500–800
- Body / UI: **Inter** 400–700
- Google Fonts import already on the public site CSS

## Icons

Product icons live in `/workspace/idp-icons/` (not recreated here). Bundle `idp.svg` or inline `svg/<slug>.svg` same-origin. Spec: that kit’s `DEVELOPERS.md`.

CRM Save is a **labeled word button**, not a glyph, unless an icon-only toolbar remains.

## Do not

- Hotlink github.io from the CRM
- Swap in Lucide or stock icon kits
- Label `#020617` as navy in UI copy
- Market “no credit card required”
