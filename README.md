# PRIZMA. ✦

### A motion-led creative agency experience

> Bold ideas deserve bold execution. Prizma is a high-energy agency website for digital strategy, design, branding, and development.

[![Live Preview](https://img.shields.io/badge/↗_Live_Preview-a3e635?style=for-the-badge&labelColor=050705)](https://prizma-dot.vercel.app/)
[![Built with React](https://img.shields.io/badge/React-050705?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Vite-050705?style=for-the-badge&logo=vite&logoColor=646cff)](https://vite.dev/)

## ✨ What’s inside

- Cinematic hero entrance with GSAP-driven movement
- Scroll-triggered reveals and image parallax
- Editorial Blog experience with category filters and image-hover interactions
- Responsive animated navigation for desktop and mobile
- Agency sections for services, projects, team, testimonials, pricing, and more
- Custom Prizma favicon and a responsive Tailwind design system

## 🛠 Built with

| Tool | Purpose |
| --- | --- |
| React | Component-based interface |
| Vite | Fast development and production builds |
| Tailwind CSS | Responsive visual styling |
| GSAP + ScrollTrigger | Premium motion and scroll interactions |
| Lucide React | Lightweight interface icons |
| React Router | Client-side page navigation |

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open the local address shown in your terminal and start exploring.

## 📦 Build for production

```bash
npm run build
```

Vite creates the deployable production files in `dist`.

## ☁️ Deploy

This project can be deployed directly through [Vercel Drop](https://vercel.com/drop), even without a GitHub repository:

1. Run `npm run build`.
2. Upload the generated `dist` folder to Vercel Drop.
3. Choose a project name and deploy. Done. ✦

## 🧭 SPA route support

To make direct refreshes work on pages like `/about`, `/services`, and `/blog`, add this `vercel.json` file to the project root:

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

## 📁 Project structure

```text
src/
  components/     Reusable sections and navigation
  pages/          Home, Services, About, and Blog pages
public/           Images, favicon, and static assets
```

---

Made with ✦ by **Prizma**
