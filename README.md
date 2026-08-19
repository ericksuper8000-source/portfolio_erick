# 🔍 Erick Pérez — Omni-Portfolio Orchestrator

A **search engine as a portfolio**: a UI/UX experiment that leverages the iconic Google Search aesthetic to organize a professional journey of 10+ years across **Tech and Art**.

Instead of a traditional static portfolio, visitors *search* their way through Erick Pérez's experience, education, projects, skills, curriculum and contact info — in the most familiar interface on the planet.

## 🎯 The Objective

Break away from the "static portfolio" template. Let users interact with the CV the way they naturally use the web: by searching. The mission is to prove that a senior developer can bridge technical precision and visual creativity — from QA discipline to FastAPI backends, CI/CD pipelines and realistic tattoo art.

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build tool | Vite |
| Routing | Vue Router 4 — History mode + Lazy Loading |
| Styling | Scoped CSS3 + Tailwind CSS 4 (PostCSS) |
| Iconography | Font Awesome 7 + Google Material Symbols |
| Deployment | Netlify (SPA redirect via `netlify.toml`) |

## 🧠 Engineering & UX Decisions

1. **The "Search Results" interface** — The Google results structure is the most familiar UI on earth. It reduces cognitive load: users know where to click, what to expect from a description, and instinctively understand the information hierarchy.

2. **Performance & navigation** — Every section (About, Experience, Education, Projects, Skills, Curriculum, Contact) is lazy-loaded on demand. The build output is split per view; the home view ships first.

3. **Full-text search** — `src/data/content.js` builds a searchable index across experience, education, projects, skills, CVs and contact. Search terms are matched across titles, descriptions and keywords.

4. **The "Knowledge Card"** — A sidebar card balances professional content (left) with personal branding (right): profile picture, key facts and, in the About section, a personal carousel and a realism tattoo gallery.

5. **Favicon strategy** — Hybrid logic: Google Favicon API for external domains (GitHub, LinkedIn, FastAPI…), local assets for internal sections to guarantee visual consistency.

## 📂 Project Structure

```
src/
├── main.js              # App bootstrap (Vue + Router + Font Awesome)
├── App.vue              # Root wrapper
├── style.css            # Global styles + mobile responsive helpers
├── data/
│   └── content.js       # Single source of truth: profile, data & search engine
├── router/
│   └── index.js         # 14 routes (home + lazy-loaded sections & details)
├── components/
│   ├── GoogleHeader.vue     # Sticky search header (logo + search box + tabs)
│   ├── KnowledgeCard.vue    # Sidebar profile card
│   └── ResultPagination.vue # Google-style "Eriiiiiick" pagination
└── views/               # Section list views + detail views with related links
    ├── HomeView.vue         # Google-home replica with search box
    ├── SearchView.vue       # Full-text search results
    ├── AboutView.vue        # Bio, stats, personal carousel & tattoo gallery
    ├── ExperienceView.vue / ExperienceDetailView.vue
    ├── EducationView.vue / EducationDetailView.vue
    ├── SkillsView.vue / SkillDetailView.vue
    ├── UserProjectsView.vue / ProjectDetailView.vue
    ├── CurriculumView.vue   # ATS-friendly PDF downloads
    └── ContactView.vue
```

## 🚀 Getting Started

```bash
npm install     # install dependencies
npm run dev     # start dev server (Vite)
npm run build   # production build
npm run preview # preview the production build
```

## 🌐 Deployment

Deployed on Netlify. `netlify.toml` rewrites all routes to `index.html` so deep links (e.g. `/experiencia/catalina`) work with Vue Router history mode.

## 📄 Content

All content lives in `src/data/content.js` and comes from real CVs (2026) — nothing is invented:
- 7 experiences (Catalina, Cheetah Digital, Experian, Western Union, Concentrix, Aegis, Sykes)
- 10 education items & certifications
- 5 hands-on projects (FastAPI, Celery/Redis + LLM, CI/CD pipelines, Linux labs, Pandas)
- 6 skills with related links (including **AI-Assisted Engineering**: SDD, agents, LLM APIs, RAG fundamentals, open-source models)
- 5 ATS-friendly CVs in `public/cv/`

## 🤖 The Role of AI

This project was developed in collaboration with LLMs as a pair-programming partner. AI excels at prototyping complex CSS structures; human precision remains vital for fine details like pixel-aligned pagination and dynamic route states.

---

© 2026 Erick Pérez Gutiérrez · San José, Costa Rica