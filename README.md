# Ali Portfolio

Personal portfolio website built with Next.js 16, React 19.3, TypeScript, and Tailwind CSS v4.

This project showcases:
- Hero landing section
- Skills overview
- Full experience history and contributions on the homepage
- Education section
- Projects section
- Contact section

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint

## Project Structure

```text
src/
  app/
  components/
    layout/
    sections/
    cards/
    ui/
  data/
```

Key files:
- `src/app/layout.tsx`: global layout, fonts, navbar, and shared background
- `src/app/page.tsx`: homepage composition
- `src/components/sections/`: homepage section composition
- `src/components/cards/`: cards for projects, experience, education, training, and skill groups
- `src/components/ui/`: shared cards, buttons, section headings, badges, icons, lists, expandable content, and carousel
- `src/components/ui/GridBackground.tsx`: shared grid background layer
- `src/components/ui/Reveal.tsx`: server-rendered marker for scroll entry animations
- `src/components/ui/RevealGroup.tsx`: shared observer for card, heading, and footer reveals
- `src/data/`: structured content for profile, skills, experience, and projects

## Getting Started

Requires Node.js 20.9 or newer. Next.js 16 stores development output in `.next/dev` and production output in `.next`. Restart an existing dev server after upgrading dependencies.

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

Public contact details, the CV link, social profiles, and project repository URLs live in `src/config/site.ts`. Update that file to change these values. They are intentionally public; keep secrets and deployment-specific credentials in environment variables instead. Icon asset URLs remain with skill data in `src/data/skills.ts`.

Most portfolio content is stored in the `src/data/` directory:

- `profile.ts`
- `skills.ts`
- `experience.ts`
- `projects.ts`

Content is aligned with `docs/CV-Ahmad Ali Masykur.tex`. The LaTeX document is kept as a reference; changes to it must be reflected in the data files.

Update those files to change displayed text and structured portfolio content without touching section layout logic.

## Validation

Cards, section headings, and the footer reveal once when entering the viewport. A shared observer staggers simultaneous entries; the hero keeps its own entrance animation. Content stays readable without JavaScript, and reduced-motion preferences disable the scroll animation. Experience details expand and collapse with a CSS grid transition.

This project currently uses:

- `yarn lint` for code quality checks
- `yarn build` for production build verification

## Deployment

This project is ready to deploy on Vercel.

### Vercel Dashboard

1. Import the GitHub repository into Vercel.
2. Keep the detected framework as `Next.js`.
3. Leave the root directory as the repository root.
4. Deploy with the default production branch.

The repository also includes `vercel.json` with:
- `framework: nextjs`
- `installCommand: yarn install --frozen-lockfile`
- `buildCommand: yarn build`

### Vercel CLI

Install the Vercel CLI:

```bash
npm i -g vercel
```

Deploy a preview:

```bash
vercel
```

Deploy to production:

```bash
vercel --prod
```

## Notes

- Use `yarn` because `yarn.lock` is committed.
- Static metadata and icons live in `src/app/`.
- Shared visual tokens and utility classes are defined in `src/app/globals.css`.
