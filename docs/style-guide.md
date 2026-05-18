# AluEdge - Style Guide

## Colors
- Primary ink: `--ink`: #071526
- Muted: `--muted`: #607080
- Navy: `--navy`: #061928
- Green (brand): `--green`: #11733e
- Green dark: `--green-dark`: #0a5d34
- Bronze accent: `--bronze`: #b98043
- Line / borders: `--line`: #dce5ea
- Backgrounds: `--paper`: #f6f8f7, `--surface`: #fbfcfa

## Typography
- Display font: `--font-display`: Space Grotesk, fallback Inter/Segoe UI
- UI font: `--font-ui`: Inter, Segoe UI, Arial, sans-serif
- Hero heading: Georgia serif used in `hero h1` (large sizes)

## Spacing & Layout
- Container max width: `--container`: 1240px
- Section vertical spacing: `--section-y` and `--section-y-sm`
- Border radius: `--radius`: 8px
- Card padding: `--card-pad`

## Elevation
- Strong shadow: `--shadow`: 0 22px 54px rgba(7,21,38,0.11)
- Soft shadow: `--shadow-soft`: 0 12px 30px rgba(7,21,38,0.07)

## Buttons
- Primary: `background: var(--green); color: #fff; font-weight: 850`
- Outline/Secondary: white surfaces with subtle border `#bdc8d2`

## Image usage
- Use `Image` with responsive `sizes` attributes provided in components.
- Optimize source images (see `scripts/optimize-images.js`).

## Notes
- Accessibility: focus-visible outlines defined and `aria` landmarks used.
- Mobile: there is a `mobile-menu` and `mobile-bottom-bar` already implemented.
