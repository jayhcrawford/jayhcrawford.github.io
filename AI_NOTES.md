# Instructions For Next AI Pass

This repo is a Vite + React + TypeScript site for GitHub Pages. The CI/CD publishes when pushed to GitHub. The README is published on GitHub and is currently empty; avoid editing it unless explicitly requested.

## Quick Orientation
- Entry points: `src/main.tsx`, `src/App.tsx`.
- Pages live under `src/pages/`.
- Project/category data lives in `src/pages/Projects/*_data.tsx` and `src/pages/Projects3D/Projects3D_data.tsx`.
- Shared components live in `src/components/`.
- Styling is a mix of Tailwind (`src/tailwind.css`, `src/index.css`) and component CSS in `src/components/*.css`.
- Fonts are in `src/assets/fonts/`.

## Commands
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

## Current TODOs (from code)
- About page needs a strong intro image/flourish: `src/pages/About.tsx`.
- Contact page needs a more focused hero-like layout: `src/pages/Contact.tsx`.
- SocialBrick uses a fixed px width that should become responsive: `src/components/SocialBrick.tsx`.
- Confirm links + description text in app shell: `src/App.tsx`.
- Create/replace icon images for categories in:
  - `src/pages/Projects/Art_data.tsx`
  - `src/pages/Projects/Projects_data.tsx`
  - `src/pages/Projects/Painting_data.tsx`
  - `src/pages/Projects/Drawing_data.tsx`
  - `src/pages/Projects/Design_data.tsx`
  - `src/pages/Projects3D/Projects3D_data.tsx`
- LocationBar URL string substitutions needed in the same data files as above.
- Fill in project lists/content for programming + web dev: `src/pages/Projects/Projects_data.tsx`.
- Provide images/resources for project entries and fix the painting image carousel: `src/pages/Projects/Painting_data.tsx`.
- Reverse order of drawing objects array: `src/pages/Projects/Drawing_data.tsx`.

## Content Notes
- Most TODOs are content/layout placeholders. Ask the user for assets and copy before filling lists or updating images.
- Keep art/project metadata consistent with existing data object shapes in the data files.

## Suggested First Steps For Future Work
1. Ask the user which TODOs to prioritize (content, layout, or data cleanup).
2. Gather assets (images/icons) and confirm naming conventions.
3. Make small, page-by-page changes and verify with `npm run dev`.

