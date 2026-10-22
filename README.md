# WHY HERE?

Operation: Delta level design portfolio. Built with React, TypeScript and Vite.

## Local development

```sh
npm ci
npm run dev
```

## GitHub Pages

The Pages workflow runs only when manually dispatched. Configure the repository's
Pages source as **GitHub Actions**, then run **Deploy portfolio to GitHub Pages**.
The workflow gets the base path from GitHub Pages and publishes `pages-publish/`.

```sh
npm run lint
npm run build:pages
```

For a local project-path build, set `PAGES_BASE_PATH=/why-here-portfolio/` before
building. Without that variable the build uses `/`.

The hero video retains its original encoding. The other seven clips are H.264,
720p, 30fps, CRF 30 with faststart and no audio. Their original frame counts and
durations are preserved. The comparison clips play independently as before.

Original media backups and local validation artifacts are kept outside this
repository. Existing Netlify hosting is independent and is not changed by this
workflow.
