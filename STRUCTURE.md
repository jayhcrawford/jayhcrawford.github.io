# Repository Map — `main` Branch (updated 2026-04-09)

This snapshot highlights the files AI agents typically need when working on the portfolio site. Generated via a shallow `os.walk` capped at depth 2 to avoid noise.

```
./
  AI_NOTES.md           ← instructions/TODOs for agents
  README.md             ← project overview + branch policy
  package.json          ← npm scripts + deps
  vite.config.ts        ← Vite build config
  tailwind.config.js    ← Tailwind setup
  tsconfig*.json        ← TypeScript configs
  public/               ← static assets copied verbatim to dist
    J_webIcon.svg
    LinkedIn_Logo.svg
    firstscenve.glb
    under_construction.svg
  src/                  ← React app source
    App.tsx             ← route shell + global layout
    main.tsx            ← entry point
    index.css, tailwind.css
    components/         ← shared UI pieces (Gallery, HeroHeader, etc.)
    pages/              ← routed pages (About, Art, Contact, Painting, etc.)
    hooks/              ← custom hooks (e.g., useWindowSize)
    assets/             ← local fonts/images referenced in components
  projects/             ← additional project scaffolding (e.g., widow/nextjs-blog)
  public/               ← static assets served as-is
  illlustrator_docs/    ← Illustrator source files for graphics
  Old/                  ← legacy site + reference material (HTML/CSS demos)
  .vite/                ← local Vite cache (safe to ignore/clean)
```

_If you add new top-level directories, append them here so future agents can orient quickly._
