Task: Fix routing + migrate to App Router for a Next.js app hosted on GitHub Pages.

Context:

* App previously used react-router-dom with HashRouter.
* HashRouter forced all requests to `/`, avoiding server routing issues.
* HashRouter was removed to get clean URLs.
* Now direct navigation to nested routes (e.g. `/projects/rip-sheet`) returns 404.

Root cause:

* GitHub Pages is a static host with no rewrite support.
* It attempts to resolve real files for each path.
* Paths like `/projects/rip-sheet` fail unless a corresponding `/projects/rip-sheet/index.html` exists.

Primary solution (required):

* Convert the Next.js app to a static export so all routes map to real files.

Implementation steps:

1. Update next.config.js:

```js
const nextConfig = {
  output: 'export',
  basePath: '/<repo-name>',
  images: { unoptimized: true },
}
module.exports = nextConfig
```

2. Build:

```
npm run build
```

3. Deploy:

* Deploy contents of `/out` directory to GitHub Pages.

Result:

* Each route becomes a physical file (e.g. `/projects/rip-sheet/index.html`)
* Direct navigation and refresh no longer 404

Constraints:

* No server-side features allowed (no SSR, no API routes)
* All data must be static or fetched client-side

Secondary requirement:

* Migrate to Next.js App Router (`/app` directory)

Migration steps:

* Create `/app/layout.tsx` and `/app/page.tsx`
* Move routes from `/pages` to `/app/.../page.tsx`
* Replace data fetching with async server components
* Add `"use client"` where hooks or browser APIs are used
* Remove react-router-dom entirely

Alternative fallback (optional, less correct):

* Copy `/out/index.html` to `/out/404.html`
* This allows client-side routing to recover on unknown paths

Final goal:

* Clean URLs (no hash)
* No 404 on refresh
* Fully static deployment compatible with GitHub Pages
* App Router in use, no react-router-dom
