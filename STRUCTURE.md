# Repository Map — `main` Branch (updated 2026-04-09)

This reflects the *main branch* (the working source for the site). It excludes the generated `gh-pages` deploy output.

```
./
  404.html                  ← custom error page served by GitHub Pages
  AI_NOTES.md               ← agent/task guidance + TODO list
  README.md                 ← project overview + branch policy
  STRUCTURE.md              ← this file
  package.json / lockfile   ← scripts + dependency graph
  tsconfig*.json            ← TypeScript configs
  tailwind.config.js        ← Tailwind setup
  postcss.config.mjs        ← PostCSS pipeline
  vite.config.ts            ← Vite build config
  linkbase.tsx              ← central link definitions
  eslint.config.js          ← lint rules
  jayhcrawford.github.io.code-workspace ← VS Code workspace settings

  src/                      ← React + TS source
    App.tsx                 ← router + layout shell
    main.tsx                ← app entry point
    index.css / tailwind.css
    components/             ← shared UI (HeroHeader, Gallery, etc.)
    pages/                  ← routed content (About, Art, Contact, etc.)
    hooks/                  ← custom hooks (useWindowSize)
    assets/                 ← local fonts/images

  public/                   ← static assets copied verbatim to dist
    J_webIcon.svg
    LinkedIn_Logo.svg
    firstscenve.glb
    under_construction.svg

  projects/                 ← additional project scaffolding (e.g., widow/nextjs-blog)
  illlustrator_docs/        ← Illustrator source files (space_bd.ai, triangle.ai)
  Old/                      ← legacy site/reference HTML & CSS
  .gitignore
  Other config files as needed (tsconfig.app.json, tsconfig.node.json, etc.)
```

> Remember: **All development happens on `main`.** The `gh-pages` branch is rebuilt from the production build—never edit it directly.
