# evan.am

The portfolio site for Evan, an offline editor in Tokyo. It is a statically exported Next.js site deployed to GitHub Pages.

## Development

Use Node.js 24 and npm 12. The same major versions are selected by `.nvmrc`, `package.json`, and CI.

```bash
nvm use
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL displays the newest project.

## Commands

```bash
npm run dev        # Start the local development server
npm run typecheck  # Check TypeScript
npm run lint       # Run ESLint
npm run build      # Create the static site in out/
npm run check      # Run all production checks
```

## Project structure

- `app/projects.ts` is the typed, ordered project catalog. The first entry is the default and the list order runs from newest to oldest.
- `app/[project]/page.tsx` validates each project route and generates every page at build time.
- `app/_components/` contains the portfolio view and project list.
- `app/_hooks/` contains browser-history selection and list-scrolling behavior.
- `app/_lib/projects.ts` contains project lookup helpers shared by server and client code.

To add a project, add one entry to `app/projects.ts`:

```ts
{
  title: 'Client – Title',
  path: 'project-url-slug',
  src: 'https://streamable.com/e/video-id?autoplay=1&muted=0',
},
```

Keep each `path` unique. A push to `main` runs type checking, linting, the production build, and the GitHub Pages deployment.
