# Prizma — Creative Digital Agency

A bold, motion-led creative agency website built around distinctive digital experiences, strategy, design, branding, and development.

**Live preview:** [prizma-dot.vercel.app](https://prizma-dot.vercel.app/)

## Highlights

- Cinematic GSAP hero animations and ScrollTrigger reveals
- Responsive desktop and mobile navigation
- Editorial-style Blog page with article filtering and hover interactions
- Services, projects, pricing, testimonials, team, and contact sections
- Custom Prizma favicon
- Responsive layouts built with Tailwind CSS

## Tech stack

- React
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide React
- React Router

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown in your terminal.

## Production build

```bash
npm run build
```

Vite creates the production-ready files in the `dist` folder.

## Deploy with Vercel Drop

1. Run `npm run build`.
2. Open [Vercel Drop](https://vercel.com/drop).
3. Upload the generated `dist` folder.
4. Choose a unique project name and deploy.

## SPA route support

For direct refreshes on routes such as `/about`, `/services`, and `/blog`, add a `vercel.json` file to the project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Project structure

```text
src/
  components/     Reusable website sections and navigation
  pages/          Home, Services, About, and Blog pages
public/           Images, favicon, and static assets
```
