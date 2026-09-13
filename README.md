# Hanumanthu Buddha · Portfolio

Personal portfolio positioning Hanumanthu Buddha as a Senior AI Full Stack Developer, with Vaktora as the flagship case study.

Built with Next.js 16 (App Router), TypeScript (strict), Tailwind CSS v4, Framer Motion and Lucide icons. Every route is statically generated.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + type check
npm run lint
```

## Deploy

1. Push the repository to GitHub.
2. Import it on Vercel (or any Node host). No special build settings are needed.
3. Set `NEXT_PUBLIC_SITE_URL` to the final public URL (see `.env.example`). On Vercel this is optional.

## Where the content lives

All copy is data, not JSX. Edit these files and the site updates everywhere:

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, title, headline, about paragraphs, links, photo, resume path, Kaziva mention |
| `src/data/projects.ts` | Every project, including the full Vaktora and LSRW case studies |
| `src/data/experience.ts` | Experience timeline |
| `src/data/skills.ts` | Technical expertise groups |
| `src/data/education.ts` | Education, certification, achievements |
| `src/config/site.ts` | Site URL, metadata description, keywords, navigation |

Static assets: `public/hanumanthu-buddha-resume.pdf`, `public/images/hanumanthu-buddha.jpg`, `public/images/vaktora/`.

### Adding a project

Add an entry to the `projects` array in `src/data/projects.ts`. Set `published: true` to render it. Give it a `caseStudy` object to get a dedicated page at `/projects/<slug>` (the page, sitemap entry and metadata are generated automatically).

## Structure

```
src/
  app/            routes, metadata, sitemap, robots, OG image, favicon
  components/
    ui/           primitives: container, button, badge, card, section
    layout/       header, mobile nav, footer, theme toggle, JSON-LD
    sections/     home page sections in order
    diagrams/     AI pipeline and architecture diagrams
    case-study/   case study page building blocks
    motion/       scroll reveal
  data/           all content
  config/         site-wide settings
  types/          content types
```

## Theme

Light and dark are both designed. The theme follows the system preference and can be toggled in the header; the choice is saved in `localStorage`. Tokens live in `src/app/globals.css`.
