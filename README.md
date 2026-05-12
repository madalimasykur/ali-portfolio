# Ali Portfolio

Personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

This project showcases:
- Hero landing section
- Skills overview
- Experience highlights
- Dedicated experiences page
- Education section
- Projects section
- Contact section

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint

## Project Structure

```text
src/
  app/
    experiences/
  components/
    layout/
    sections/
    ui/
  data/
```

Key files:
- `src/app/layout.tsx`: global layout, fonts, navbar, and shared background
- `src/app/page.tsx`: homepage composition
- `src/app/experiences/page.tsx`: detailed experience page
- `src/components/sections/`: homepage and page sections
- `src/components/ui/GridBackground.tsx`: shared grid background layer
- `src/data/`: structured content for profile, skills, experience, and projects

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Content Management

Most portfolio content is stored in the `src/data/` directory:

- `profile.ts`
- `skills.ts`
- `experience.ts`
- `projects.ts`

Update those files to change displayed text and structured portfolio content without touching section layout logic.

## Validation

This project currently uses:

- `yarn lint` for code quality checks
- `yarn build` for production build verification

## Notes

- Use `yarn` because `yarn.lock` is committed.
- Static metadata and icons live in `src/app/`.
- Shared visual tokens and utility classes are defined in `src/app/globals.css`.
