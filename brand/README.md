# iDONATEpro brand pack

Trade marked and trade dressed. One pack for public site, CRM, email, and composites.

**Name / mark casing (trade dress):** always `iDONATEpro` — lowercase `i`, uppercase `DONATE`, lowercase `pro`. Never IDONATEPRO, iDonatePro, iDonate Pro, or iDONATE Pro.

**Logo colors are trademark-locked:** green `#7BC143`, gray `#666666`. Never remap to CSS brand tokens. On dark UI, use a white pill behind the unchanged mark.


Review board: ship as `/brand/` (same pattern as `/icons/`).

## What’s here

| Path | Use |
|---|---|
| `logos/` | Wordmark SVG/PNG (on light, on dark, green) + mark |
| `colors/tokens.json` | Color + type tokens |
| `colors/tokens.css` | Drop-in CSS variables |
| `icons/` | Pointer to locked product icon kit (`idp.svg`) |
| `images/` | Owned photography, capabilities, product shots, composites — see `images/MANIFEST.md` |
| `type/` | Type notes |
| `index.html` | Brand board (like the icons page) |
| `DEVELOPERS.md` | How to ship without breaking trade dress |

## Law

- Original identity only — no Lucide, Font Awesome, sticker/Oakley offset, or random greens.
- Green: `#7da447` / bright `#7ac142` / soft `#eef5e5`.
- Dark chrome `#020617` is **Black**, not navy.
- Type: Archivo (display) + Inter (body).
- Icons: `/workspace/idp-icons/` — stroke 2, `currentColor`, 24 box.
- Logo: use files in `logos/`. Do not redraw the wordmark.

Source of truth is this folder. Copy into each origin — do not hotlink.
