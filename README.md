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

### Local Container

Build and run with Compose:

```bash
podman compose up -d --build
```

View logs or stop the service:

```bash
podman compose logs -f portfolio
podman compose down
```

The equivalent manual commands are shown below.

Build the production image:

```bash
podman build -t registry.madalimasykur.my.id/madalimasykur/ali-portfolio:latest .
```

Run the container and publish it on port `3500`:

```bash
podman run --rm --name ali-portfolio -p 3500:3000 registry.madalimasykur.my.id/madalimasykur/ali-portfolio:latest
```

Open `http://localhost:3500`. In another terminal, inspect the container with:

```bash
podman ps
podman logs -f ali-portfolio
```

Docker users can run the same commands by replacing `podman` with `docker`.

### Start at Boot with Podman Quadlet

The repository includes `deploy/quadlet/ali-portfolio.container`. Install it as
a rootless user unit:

```bash
mkdir -p ~/.config/containers/systemd
cp deploy/quadlet/ali-portfolio.container ~/.config/containers/systemd/
systemctl --user daemon-reload
systemctl --user start ali-portfolio.service
systemctl --user status ali-portfolio.service
```

Allow the user service manager to start during boot, even before an interactive
login:

```bash
sudo loginctl enable-linger "$USER"
```

If the registry requires authentication, use a persistent auth file before
starting the unit:

```bash
mkdir -p ~/.config/containers
podman login --authfile ~/.config/containers/auth.json registry.madalimasykur.my.id
```

The Quadlet publishes `3500:3000`, restarts the container after failures, and
adds the registry auto-update label. To enable periodic image updates:

```bash
systemctl --user enable --now podman-auto-update.timer
```

### Cloudflare Tunnel Example

The repository only provides the example ingress snippet at
`deploy/cloudflared/ingress.yml.example`; it does not install or modify the
machine's Cloudflared configuration. The example maps `madalimasykur.my.id` to
`http://madalimasykur.mylab.local:3500` and must be placed before the final
`http_status:404` rule in the active tunnel configuration.

For a system-level setup using `/etc/cloudflared/config.yml`, example validation
and restart commands are:

```bash
cloudflared --config /etc/cloudflared/config.yml tunnel ingress validate
sudo systemctl restart cloudflared
sudo systemctl status cloudflared
```

Verify the application locally before testing the public hostname:

```bash
curl --fail http://madalimasykur.mylab.local:3500
```

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
