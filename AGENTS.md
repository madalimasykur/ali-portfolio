# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Next.js 15 portfolio app using the App Router. Route entry points live in `src/app/`, with global layout and styles in `src/app/layout.tsx` and `src/app/globals.css`. Reusable UI belongs under `src/components/`, currently split into `layout/`, `sections/`, and `ui/`. Use the `@/*` TypeScript path alias for imports from `src/`. Static assets should stay close to their usage unless they are shared broadly.

## Build, Test, and Development Commands
Use the existing package scripts:

- `yarn dev`: start the local dev server with Turbopack at `http://localhost:3000`.
- `yarn build`: create the production build.
- `yarn start`: run the production build locally.
- `yarn lint`: run ESLint across the repository.

Prefer `yarn` here because `yarn.lock` is committed.

## Coding Style & Naming Conventions
Write TypeScript with `strict` mode assumptions in mind. Follow the existing style in app code: 2-space indentation, single quotes, and no semicolons in `.ts`/`.tsx` unless a file already uses a generated config style. Use `PascalCase` for React component files such as `HomeSection.tsx`, `camelCase` for variables and functions, and lowercase route segments inside `src/app/`. Keep components small and move shared presentation logic into `src/components/` instead of growing `src/app/page.tsx`.

## Testing Guidelines
There is no test suite configured yet. Until one is added, treat `yarn lint` and `yarn build` as the required validation steps before opening a PR. If you add tests, place them next to the source file or under a future `src/__tests__/` directory, and use names like `ComponentName.test.tsx`.

## Commit & Pull Request Guidelines
Git history currently starts from a single scaffold commit (`Initial commit from Create Next App`), so use short, imperative commit messages such as `Add hero section animation` or `Refactor navbar layout`. Keep each commit focused. PRs should include a concise description, validation steps run locally, and screenshots or screen recordings for UI changes.

## Configuration Notes
Do not commit secrets or environment-specific values. Review generated output in `.next/` only as build artifact state; never edit it manually.
