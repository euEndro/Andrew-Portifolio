# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers, and technical interviewers evaluating Andrew Doni as a candidate for software engineering roles. Secondary: potential B2B clients or partners considering Docalli, and other engineers/technical peers who land on the site to see his work or connect professionally.

## Product Purpose

Andrew Doni's personal portfolio. It exists to help him land employment as a software engineer by showcasing his skills, real projects, and professional background in one place, and to support outreach (email contact) from anyone he'd talk to about opportunities, partnerships, or technology.

## Positioning

A software engineer whose focus is infrastructure, production, and B2B systems, not just app features. He pairs development with deployment, observability, and infrastructure architecture, and has already founded and operates a small formally registered company (Docalli) as evidence of that range rather than as a claim.

He wants to be read as an architecture- and decision-focused engineer, closer to a CTO-track mindset making systems and technical decisions, rather than as a purely operational, hands-on-the-code developer. This should shape tone and emphasis sitewide, not just one section: skills and experience should foreground judgment, systems thinking, and ownership over a flat inventory of languages/frameworks.

## Operating Context

Single-page bilingual site (PT-BR default, ENG toggle) with sections: Hero, About, Skills, Projects, Contact. Visitors scroll through an identity/role intro, background, a technical skills grid, a set of real project cards, and a contact form (posted as JSON to Andrew's own n8n webhook) plus downloadable resume PDFs in both languages. Deployed as a static build (`npm run build` output in `dist/`) to Andrew's own server at `andrew.docalli.com`, not GitHub Pages.

## Capabilities and Constraints

- Project cards, in display order: Átrio, WhatsApp AI Salesperson, Notice Automation, Troco, Gestok, Docalli (the site itself is deliberately not listed as a project, since a visitor is already experiencing it). Projects are no longer framed as open source by default, and most cards no longer link to GitHub repos; descriptions must stay accurate to what each project actually is, without implying the code is browsable unless a link is explicitly shown. Átrio has a "Visit Site" link (atrio.docalli.com); Docalli has a "Visit Site" link (docalli.com); Gestok (archived, a study project, not production) has a "View Repository" link (github.com/euEndro/Gestok); the WhatsApp AI Salesperson, Troco, and the Maintenance Notice Automation show no external link (client-facing/internal deployments, no public URL to show).
- Project status tags: Átrio is tagged "In Development". The WhatsApp AI Salesperson is tagged "In Production" and already has real clients using it. Troco is tagged "In Development" (its WhatsApp/AI chat integration is a current, ongoing build, not yet shipped in full). Gestok is tagged "Archived" (no longer worked on; kept as evidence of Java/Spring Boot ability, explicitly described as a study project rather than a production system). Docalli is tagged "In Production". The Notice Automation is tagged "In Production" and already has real clients using it.
- Átrio is a conversational enterprise RAG system (a "brain" that centralizes a company's knowledge and exposes it through chat, self-updating its own encrypted context files via pgvector, plus OAuth-connected Google Workspace tool use through a FastAPI + GPT-4o Mini agent loop, with a Flutter mobile app). It is Andrew's most technically advanced project and directly backs the site's AI/architecture positioning; keep its description accurate to the real mechanism, not a generic "AI chatbot" summary.
- The WhatsApp AI Salesperson is a reasoning AI agent (not a fixed-menu chatbot) that handles a business's WhatsApp: natural-language understanding, real-time catalog/price lookup, order creation, and knows when to hand off to a human (and hands control back automatically). Built with n8n, Evolution API, and Redis. Already deployed for real clients; keep that claim only as general/non-attributed (no client names on hand).
- The Notice Automation is pure workflow automation, not an AI agent (no conversation, no decision-making): it reads a visit schedule and contact list daily, filters by lead-time window, generates a personalized PDF notice, and sends it via WhatsApp and email, unattended. Built with n8n, Google Sheets, Google Docs/Drive, and Gmail. Already in production for real clients; keep that claim general/non-attributed.
- Bilingual content is maintained in `src/components/translations.js` under `PT-BR` and `ENG` keys; any copy change must be mirrored in both.
- The company is named **Docalli** (formerly "DL Group"), site **docalli.com**. The rename is reflected in the hero role line, the hero CTA, the project card, and both translation files. The GitHub repo for its site still lives at `github.com/D-L-Group/Portfolio`; that's the real org slug, left as-is since only the public-facing name/domain changed.
- Docalli's site is a full institutional site (not just a landing page): frontend (React, Tailwind, Vite) plus a real backend (FastAPI, PostgreSQL) with security work (SlowAPI rate limiting, email validation, Cloudflare Turnstile bot protection). The project card and description must reflect the full-stack scope, not just the frontend.
- Docalli is small and newly founded but formally registered with a real client base; copy should stay modest and not overstate its scale.
- Contact form submits as JSON (`fetch`, `Content-Type: application/json`, fields `email`/`subject`/`message`) to Andrew's own n8n webhook at `https://n8n.eletrofire.docalli.com/webhook/andrew-portfolio` (`WEBHOOK_URL` in `src/components/Contact.jsx`). Replaced the earlier formsubmit.co integration, which stopped working reliably. The webhook is Andrew's own automation (not a third-party form service); he owns what happens to submissions after they land there. The form shows inline sending/success/error states rather than redirecting.
- Deployed to Andrew's own server (self-hosted, likely Nginx per his stack) at `andrew.docalli.com`, not GitHub Pages. `vite.config.js` base stays `/` for a root deployment. No `gh-pages` package, `deploy`/`predeploy` scripts, or `public/CNAME`; those were removed when he moved off GitHub Pages.

## Brand Commitments

- Name: Andrew Doni. GitHub: github.com/euEndro. LinkedIn: linkedin.com/in/andrew-doni.
- Company he founded: Docalli, docalli.com.
- Never use the em dash character anywhere in site copy or project documentation; use a comma, colon, period, or parentheses instead.

## Evidence on Hand

- The projects exist as real work, but their repos are mostly no longer surfaced on the site: Troco, Gestok, and the Docalli site.
- Real profile photo at `src/assets/andrew.png`.
- Resume PDFs in `src/assets/`: Portuguese and English versions.
- No testimonials, case studies, press, or client logos on hand; none should be fabricated.

## Product Principles

1. Every claim on the site must trace to something real and verifiable (a repo, a credential, a fact); no invented metrics or testimonials.
2. Infrastructure/production/B2B focus is the differentiator; don't let the portfolio read as a generic frontend-only showcase.
3. Bilingual parity is non-negotiable: PT-BR and ENG must stay equivalent in content and completeness.
4. Docalli is evidence of initiative, not the main pitch; keep its presence proportional to its actual size and stage.

## Accessibility & Inclusion

No specific standard required at this time.
