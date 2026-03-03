# IT English — Course 1 (MVP)

Interactive website to learn English for IT.

## Local dev

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repository includes a GitHub Actions workflow that deploys the site to GitHub Pages on every push to `main`.

Steps (one-time):
1. Repository Settings → Pages.
2. Set "Build and deployment" → "Source" to "GitHub Actions".
3. Push or merge into `main`.

Notes:
- Do not use "Deploy from a branch" for this project, otherwise GitHub Pages will serve the source `index.html` (it imports `/src/main.tsx`) and you will see 404 errors.

The site will be available at:
- https://paranoid-rpm.github.io/it-english-course-1-mvp/
