# iDONATEpro icons — developer guide

Trade-dress product icons. Same files on the public site and in the CRM.
Not Lucide. Not Font Awesome. Not an icon font. Not PNGs.

Review board: https://idonatepro.github.io/icons/

## What you ship

| File | Use |
|---|---|
| `idp.svg` | SVG symbol sprite. One HTTP request, many icons. |
| `svg/<slug>.svg` | Single-file icons for bundlers, email, or inline. |

Source of truth is this kit. Copy the files. Do not restyle, offset, drop-shadow, or swap in Lucide.

## Standard (this is the current one)

- **SVG 24×24** `viewBox`, stroke **2**, round caps/joins, `fill="none"`, **`currentColor`**.
- **`<symbol>` sprite + `<use href="…#slug">`** on the same origin. `href`, not `xlink:href`.
- **Color from CSS**, not from the file. Mint, navy, and white chrome all use the same paths.
- **Draw 32–40px** inside a **48–56px** tile. Do not draw at Lucide’s 22px.
- Decorative SVG: `aria-hidden="true"`. If the control has no text, put `aria-label` on the **button**, not the SVG.
- **No cross-origin `<use>`.** Browsers will not paint an external sprite from another domain (GitHub Pages ≠ the app). Bundle it or serve it from the app’s own origin.
- **No icon fonts. No raster sprites. No third-party icon CDN.**

This is the same pattern Linear, GitHub, and Stripe-style product UIs use: a small first-party SVG set, recolored with CSS, versioned with the product.

## Do we host these on AWS?

Only as static files on the origin you already use. The sprite is ~12KB. It is not a service.

| Surface | Host | Why |
|---|---|---|
| Public site | GitHub Pages, same origin: `/img/icons/idp.svg` | Already live. |
| CRM / app | The app’s own static origin (S3 + CloudFront **if that is already how the app ships**) | Same origin as the UI. |
| Email / PDF | Inline the individual `svg/<slug>.svg` | Many clients block external SVG. |

Do **not**:

- Stand up a new AWS “icon service”
- Hotlink `idonatepro.github.io` from the app
- Put the set on jsDelivr, unpkg, or a Lucide kit

If the CRM already ships through CloudFront, drop `idp.svg` in that bucket under `/icons/idp.svg` (or let the app bundler emit it). That is the whole AWS story.

## Public site (already this)

```html
<div class="icon-box">
  <svg width="40" height="40" aria-hidden="true">
    <use href="/img/icons/idp.svg?v=46#contacts"></use>
  </svg>
</div>
```

```css
.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand);          /* inherited by currentColor */
}
.icon-box svg { width: 40px; height: 40px; display: block; }
```

Bump `?v=` whenever `idp.svg` changes (or hash the filename). Fastly/GitHub cache is 10 minutes; a new query string is the bust.

## CRM / app

**Preferred:** a tiny component that inlines the SVG (no extra request, no `<use>` CORS).

```html
<button type="button" aria-label="Save">
  <!-- paste svg/save.svg ; size 20–24px in chrome, 32–40px in tiles -->
</button>
```

**Also correct:** copy `idp.svg` into the app static root and reference it same-origin:

```html
<svg class="idp-icon" width="24" height="24" aria-hidden="true">
  <use href="/icons/idp.svg#save"></use>
</svg>
```

Nav and unlabeled toolbars: 24px glyph is acceptable **in the chrome**. Feature tiles stay 32–40px. Never 16px.

## Slugs

Use the `id` as the name in code. `create` and `new` are the same plus. `download` and `downloads` are the same tray.

| slug | meaning |
|---|---|
| `home` | house |
| `contacts` | two people |
| `find` | search |
| `groups` | people rows |
| `events` | calendar + check |
| `calls` | smartphone |
| `communications` | globe |
| `email` | envelope |
| `sms` | chat bubble |
| `mail` | letter + stamp |
| `financials` | large $ |
| `donations` | banknote |
| `pledges` | card + check |
| `campaigns` | Capitol |
| `data` | spreadsheet grid |
| `admin` | two sliders |
| `reports` | three bars |
| `calendar` | marked day |
| `associates` | two people, joined |
| `notes` | lined card |
| `bio` | photo + lines |
| `alumni` | mortarboard |
| `deceased` | memorial ribbon |
| `archived` | prohibition |
| `reminders` | bell |
| `upload` | arrow up off a tray |
| `download` | arrow into a tray |
| `import` | spreadsheet in |
| `export` | spreadsheet out |
| `pdf` | file with a fold |
| `integrations` | two systems plugged together |
| `dedupe` | two overlapping sheets |
| `data-services` | worksheet with a seal |
| `processes` | looping arrows |
| `new` / `create` | plus |
| `save` | disk |
| `cancel` | X |
| `delete` | trash |

## Rules that keep trade dress intact

1. One set. Public and app. Same paths.
2. Do not restroke, fill, or add a white underlayer / translate.
3. Do not mix Lucide into product UI. Header chevron, hamburger, and checklist ticks may stay as chrome.
4. Unlabeled icons must still read. If a new slug is needed, ask Graphics Designer. Do not invent a Lucide stand-in.
5. When the kit updates, copy `idp.svg` + `svg/` into **both** the public repo and the app in the same release.

## File locations (this kit)

- Sprite: `idp.svg`
- Individuals: `svg/<slug>.svg`
- Review HTML: `compare.html`
