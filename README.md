# Eshwar Bejugam — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's here

- `app/page.tsx` — home page: Hero → Patchy showcase → other-work canvas → How I Build → About
- `app/work/[slug]/page.tsx` — case-study template shared by every project
- `lib/projects.ts` — **single source of truth** for all project data. Edit this file to add copy, links, and stack details; the home page and every case-study page read from it automatically.
- `components/` — one component per section, each named for what it renders
- `public/projects/<slug>/` — put real screenshots here (e.g. `cover.png`) and point `image` in `lib/projects.ts` at them

## Case study structure

Every project page (`/work/[slug]`) follows the same five-section breakdown, driven by `caseStudy` and `stack` in `lib/projects.ts`:

1. **Problem** — `caseStudy.problem`
2. **Product & Solution** — `caseStudy.productSolution`
3. **Architecture & Engineering** — `caseStudy.architectureEngineering`
4. **Tech Stack & Infrastructure** — `stack.frontend` / `stack.backend` / `stack.ai` / `stack.deployment`
5. **Status & Learnings** — `caseStudy.statusLearnings`

Any field left blank renders as an explicit italic placeholder on the page (e.g. "Context and motivation for this project — add when written up.") rather than being skipped or faked, so it's always obvious what's still missing.

## Live project embeds

Every project visual — the Patchy showcase, each project row's inline preview, and each `/work/[slug]` case-study page — renders through `components/ProjectWindow.tsx`. Set a project's `liveUrl` in `lib/projects.ts` and that space automatically becomes a real, interactive `<iframe>` onto the live site instead of a placeholder box. No `liveUrl` set → it just shows the labeled placeholder, same as before.

**Important caveat:** some sites send `X-Frame-Options` or a `Content-Security-Policy: frame-ancestors` header that blocks embedding entirely. If that happens for one of your projects, the frame will render blank — there's no workaround from the portfolio side other than swapping that spot back to a screenshot or linking out instead. Worth testing each `liveUrl` once it's live.

The compact hover preview on desktop project rows stays non-interactive by design (it's a small floating tooltip, not a place to browse), but it still shows the real site if a `liveUrl` is set.

## Social links & resume

- `components/Hero.tsx` has a `SOCIALS` array (GitHub, LinkedIn, Instagram) — add real profile URLs there. Until then they render as dimmed, disabled icons instead of dead links. They appear when hovering the bio photo.
- The resume button in the bio card links to `/resume.pdf` with `download` set — drop a PDF at `public/resume.pdf` and it works immediately.
- The bio photo area looks for `public/photo.jpg` — swap in a real image the same way.

## Still needs real content

- Patchy: GitHub URL, AI/deployment stack, and full case-study copy
- Aspira, Roux, Umoja, Vicino: year, description, stack, and full case-study copy
- Hero bio card: a real photo at `public/photo.jpg` (currently a labeled placeholder box), social profile URLs in `components/Hero.tsx`, and a resume PDF at `public/resume.pdf`
- Footer: GitHub / LinkedIn / email links
- `public/projects/*/cover.png`: real product screenshots (placeholders currently render as labeled boxes so nothing looks broken, but nothing is faked)

Fill these in directly in `lib/projects.ts` — everything else updates automatically.

## Design tokens

| Token | Value |
|---|---|
| Background | `#FAFAFA` |
| Secondary background | `#F4F4F5` |
| Text | `#09090B` |
| Muted text | `#71717A` |
| Border | `#E4E4E7` |
| Accent | `#2563EB` |
| Font (UI/body) | Geist |
| Font (metadata/labels) | Geist Mono |

Reduced motion is respected globally (`app/globals.css`), and all interactive elements have visible focus states.
