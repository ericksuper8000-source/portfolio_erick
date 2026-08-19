<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Contact" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">Close to {{ channels.length }} results (0.35 seconds)</p>

          <section v-for="channel in channels" :key="channel.label" class="result-item">
            <div class="result-url">
              <span class="favicon-wrap">
                <i :class="channel.icon" class="favicon-fa"></i>
              </span>
              <span class="url-text">portfolioerickdev.netlify.app › contact › {{ channel.slug }}</span>
            </div>
            <a :href="channel.href" :target="channel.external ? '_blank' : undefined" class="result-title">
              {{ channel.label }}
            </a>
            <p class="result-description">{{ channel.description }}</p>
          </section>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/curriculum" class="related-pill">Download my CVs</router-link>
              <router-link to="/proyectos" class="related-pill">All sections</router-link>
              <router-link to="/sobre-erick" class="related-pill">Who I am</router-link>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text">
            Available immediately for QA, Backend (Python/FastAPI) and DevOps / CI-CD junior roles,
            remote or hybrid.
          </p>
        </KnowledgeCard>

      </div>
    </main>
  </div>
</template>

<script setup>
import GoogleHeader from '../components/GoogleHeader.vue';
import KnowledgeCard from '../components/KnowledgeCard.vue';
import ResultPagination from '../components/ResultPagination.vue';
import { profile } from '../data/content';

const channels = [
  {
    slug: 'phone',
    label: `Phone — ${profile.phone}`,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: 'fas fa-phone-alt',
    external: false,
    description: 'Direct line, available during business hours (Costa Rica time, CST).',
  },
  {
    slug: 'email',
    label: `Email — ${profile.email}`,
    href: `mailto:${profile.email}`,
    icon: 'fas fa-envelope',
    external: false,
    description: 'Best channel for sending job opportunities, interview invitations and project inquiries.',
  },
  {
    slug: 'location',
    label: `Location — ${profile.location}`,
    href: 'https://www.google.com/maps/place/San+Jose,+Costa+Rica',
    icon: 'fas fa-map-marker-alt',
    external: true,
    description: 'Open to remote, hybrid and on-site roles in Costa Rica and remote worldwide.',
  },
  {
    slug: 'linkedin',
    label: `LinkedIn — ${profile.linkedinName}`,
    href: profile.linkedinUrl,
    icon: 'fab fa-linkedin-in',
    external: true,
    description: 'Professional profile with recommendations, network and career updates.',
  },
  {
    slug: 'github',
    label: `GitHub — ${profile.githubName}`,
    href: profile.githubUrl,
    icon: 'fab fa-github',
    external: true,
    description: 'Source code of portfolio projects: FastAPI APIs, CI/CD pipelines, data analysis tools.',
  },
  {
    slug: 'gitlab',
    label: `GitLab — ${profile.gitlabName}`,
    href: profile.gitlabUrl,
    icon: 'fab fa-gitlab',
    external: true,
    description: 'Mirrored repositories and CI/CD workflows on GitLab.',
  },
  {
    slug: 'portfolio',
    label: `Portfolio — ${profile.portfolio}`,
    href: profile.portfolioUrl,
    icon: 'fas fa-globe',
    external: true,
    description: 'This website, presenting experience, education, projects, skills and CVs.',
  },
];

const cardFacts = [
  { label: 'Availability', value: 'Immediately available' },
  { label: 'Preferred roles', value: 'QA & Automation · Backend (Python/FastAPI) · DevOps / CI-CD Junior' },
  { label: 'Work mode', value: 'Remote / Hybrid / On-site (San José)' },
  { label: 'Languages', value: profile.languages },
];
</script>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.85; margin-bottom: 25px; }

.result-item { margin-bottom: 30px; }
.result-url { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #202124; margin-bottom: 4px; }
.favicon-wrap {
  width: 22px;
  height: 22px;
  background-color: #f1f3f4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.favicon-fa { font-size: 11px; color: #5f6368; }
.url-text { font-size: 14px; color: #202124; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.result-title { font-size: 20px; color: #1a0dab; text-decoration: none; display: block; margin: 0 0 4px 0; font-weight: 400; }
.result-title:hover { text-decoration: underline; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

.related-box { margin: 20px 0 30px 0; }
.related-title { font-size: 14px; font-weight: 400; color: #70757a; margin-bottom: 10px; }
.related-pills { display: flex; flex-wrap: wrap; gap: 10px; }
.related-pill {
  background: #f1f3f4;
  border: 1px solid #dadce0;
  border-radius: 16px;
  padding: 6px 14px;
  font-size: 13px;
  color: #1a0dab;
  text-decoration: none;
}
.related-pill:hover { border-color: #bdc1c6; }

.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}
</style>