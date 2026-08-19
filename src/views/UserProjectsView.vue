<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Projects and Repositories" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">Close to {{ projects.length }} results (0.24 seconds)</p>

          <section v-for="(project, index) in projects" :key="index" class="result-item">
            <div class="result-url">
              <img :src="`https://www.google.com/s2/favicons?sz=64&domain=${project.iconDomain}`" class="favicon" alt="">
              <span class="url-text">portfolioerickdev.netlify.app › {{ project.urlPath }}</span>
            </div>
            <router-link :to="`/mis-proyectos/${project.slug}`" class="result-title">
              {{ project.name }}
            </router-link>
            <p class="result-description">{{ project.summary }}</p>
            <div class="result-tags">
              <span v-for="tag in project.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
            <div class="result-links">
              <a :href="project.repoUrl" target="_blank" class="repo-link">
                <i class="fab fa-github"></i> {{ project.repo }}
              </a>
            </div>
          </section>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/conocimientos" class="related-pill">Skills behind these projects</router-link>
              <router-link to="/educacion" class="related-pill">Education & Certifications</router-link>
              <router-link to="/curriculum" class="related-pill">Download my CVs</router-link>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text">
            Explore my hands-on repositories built while transitioning into Backend and DevOps: a FastAPI REST API,
            an AI assistant backend with automated tests, a multi-registry CI/CD pipeline, a Debian lab environment
            and a data analysis toolkit. All work is verifiable and follows quality-first practices.
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
import { projects, profile } from '../data/content';

const cardFacts = [
  { label: 'GitHub', value: profile.githubName },
  { label: 'GitLab', value: profile.gitlabName },
  { label: 'Core Stack', value: 'Python (FastAPI, Pandas, Pydantic), PostgreSQL, Docker, GitHub Actions, GitLab CI, pytest, LLM APIs (Whisper, GPT-4o-mini)' },
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

.result-links { margin-top: 8px; }
.repo-link { font-size: 13px; color: #1a0dab; text-decoration: none; }
.repo-link:hover { text-decoration: underline; }

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

.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}
</style>