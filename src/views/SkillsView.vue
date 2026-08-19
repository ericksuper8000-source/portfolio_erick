<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Skills and Technology Stack" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">Close to {{ skills.length }} results (0.38 seconds)</p>

          <section v-for="(skill, index) in skills" :key="index" class="result-item">
            <div class="result-url">
              <img :src="`https://www.google.com/s2/favicons?sz=64&domain=${skill.iconDomain}`" class="favicon" alt="">
              <span class="url-text">https://portfolioerickdev.netlify.app › {{ skill.urlPath }}</span>
            </div>
            <router-link :to="`/conocimientos/${skill.slug}`" class="result-title">
              {{ skill.title }}
            </router-link>
            <p class="result-description">{{ skill.summary }}</p>
            <div class="result-tags">
              <span v-for="tag in skill.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
          </section>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/mis-proyectos" class="related-pill">Projects using these skills</router-link>
              <router-link to="/educacion" class="related-pill">Education & Certifications</router-link>
              <router-link to="/curriculum" class="related-pill">Download my CVs</router-link>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <div class="skills-tags">
            <span v-for="tag in tagList" :key="tag" class="skill-tag">{{ tag }}</span>
          </div>
        </KnowledgeCard>

      </div>
    </main>
  </div>
</template>

<script setup>
import GoogleHeader from '../components/GoogleHeader.vue';
import KnowledgeCard from '../components/KnowledgeCard.vue';
import ResultPagination from '../components/ResultPagination.vue';
import { skills, profile } from '../data/content';

const tagList = [
  'Python (FastAPI)',
  'pytest',
  'QA & Test Automation',
  'PostgreSQL',
  'Docker',
  'CI/CD (GitHub Actions, GitLab CI)',
  'Linux (Debian)',
  'Pandas & NumPy',
  'AWS (in progress)',
  'SDD & AI Agents',
  'LLM APIs (Whisper, GPT-4o-mini)',
  'RAG fundamentals',
  'Open-source LLMs (DeepSeek, Qwen, Kimi)',
];

const cardFacts = [
  { label: 'Languages', value: profile.languages },
  { label: 'Key Strengths', value: 'Quality Engineering, Backend Automation, CI/CD Quality Gates, Systems Thinking.' },
];
</script>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.8; margin-bottom: 25px; }

.result-item { margin-bottom: 30px; }
.result-url { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #202124; margin-bottom: 4px; }
.favicon { width: 18px; height: 18px; border-radius: 50%; }
.url-text { font-size: 14px; color: #202124; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.result-title { font-size: 20px; color: #1a0dab; text-decoration: none; display: block; margin: 0 0 4px 0; font-weight: 400; cursor: pointer; }
.result-title:hover { text-decoration: underline; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

.result-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.mini-tag {
  background: #f1f3f4;
  border: 1px solid #dadce0;
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 11px;
  color: #3c4043;
}

.related-box { margin: 10px 0 30px 0; }
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

.skills-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { background: #f1f3f4; border: 1px solid #dadce0; border-radius: 16px; padding: 4px 12px; font-size: 12px; color: #3c4043; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}
</style>