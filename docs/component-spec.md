# Component Breakdown - AluEdge Homepage

This document lists major components, props, and markup expectations.

## `BrandMark`
- Props: `priority?: boolean`
- Renders the logo link and optimized `Image`.

## `Button`
- Props: `children`, `href?: string`, `variant?: 'primary'|'secondary'|'outline'`
- Renders anchor styled as a button with an `ArrowRight` icon.

## `Hero`
- Props: none (data-driven from page)
- Contains: eyebrow, large heading (desktop + mobile variants), lead copy, CTAs, media poster image, floating card, trust strip.
- Uses responsive `Image` with `fill` and `sizes`.

## `Nav`
- Props: `navigation: NavItem[]`
- Renders desktop nav with dropdown `details`, mobile menu with `summary` and a panel.

## `SolutionCard`
- Props: `title`, `text`, `Icon`, `image`, `features[]`
- Renders image thumbnail, icon mark, title, description, tags, and CTA.

## `ProjectCard`
- Props: `title`, `type`, `location`, `system`, `text`, `image`
- Renders image, pill type, copy, meta dl, CTA.

## `StatCard` / `FeatureStrip`
- Small presentational components using Lucide icons and short copy.

## Accessibility
- Buttons and summary elements provide `aria` labels.
- `role` and `aria-label` are used for landmark and section summaries where appropriate.

## Files to update when changing a component
- `app/page.tsx`: primary page assembly
- `app/globals.css`: shared tokens and component styles
- `public/images`: add optimized sizes via `scripts/optimize-images.js`

