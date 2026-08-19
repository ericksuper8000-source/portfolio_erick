<template>
  <div class="google-wrapper">
    <GoogleHeader :query="queryText" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <template v-if="queryText">
            <p class="results-stats">
              {{ results.length === 0 ? 'No results found' : `About ${results.length} results (0.21 seconds)` }}
            </p>

            <div v-if="results.length === 0" class="no-results">
              <h2 class="no-results-title">No results for "{{ queryText }}"</h2>
              <p class="no-results-hint">Check for typos, or try some of these searches:</p>
              <div class="related-pills">
                <router-link to="/buscar?q=python" class="related-pill">Python</router-link>
                <router-link to="/buscar?q=FastAPI" class="related-pill">FastAPI</router-link>
                <router-link to="/buscar?q=Docker" class="related-pill">Docker</router-link>
                <router-link to="/buscar?q=QA" class="related-pill">QA</router-link>
                <router-link to="/buscar?q=AWS" class="related-pill">AWS</router-link>
                <router-link to="/buscar?q=CI/CD" class="related-pill">CI/CD</router-link>
                <router-link to="/buscar?q=Campaign" class="related-pill">Campaign</router-link>
                <router-link to="/buscar?q=curriculum" class="related-pill">Curriculum</router-link>
              </div>
            </div>

            <div v-for="(result, index) in results" :key="`${result.type}-${index}`" class="result-item">
              <div class="result-url">
                <span class="favicon-wrap">
                  <i :class="typeIcon[result.type]" class="favicon-fa"></i>
                </span>
                <span class="url-text">portfolioerickdev.netlify.app › {{ result.url.replace('/', '') }}</span>
              </div>
              <router-link :to="result.url" class="result-title">
                {{ result.title }}
              </router-link>
              <p class="result-description">{{ result.description }}</p>
              <span class="result-type">{{ typeLabel[result.type] }}</span>
            </div>
          </template>

          <template v-else>
            <p class="results-stats">Type a search to explore the portfolio</p>
            <div class="no-results">
              <h2 class="no-results-title">What are you looking for?</h2>
              <p class="no-results-hint">Try searching for technologies, companies, projects or roles:</p>
              <div class="related-pills">
                <router-link to="/buscar?q=FastAPI" class="related-pill">FastAPI</router-link>
                <router-link to="/buscar?q=DevOps" class="related-pill">DevOps</router-link>
                <router-link to="/buscar?q=Docker" class="related-pill">Docker</router-link>
                <router-link to="/buscar?q=QA" class="related-pill">QA</router-link>
                <router-link to="/buscar?q=Catalina" class="related-pill">Catalina</router-link>
                <router-link to="/buscar?q=PostgreSQL" class="related-pill">PostgreSQL</router-link>
                <router-link to="/buscar?q=pytest" class="related-pill">pytest</router-link>
                <router-link to="/buscar?q=contact" class="related-pill">Contact</router-link>
              </div>
            </div>
          </template>

          <div v-if="queryText && results.length > 0" class="related-box">
            <h3 class="related-title">Quick links</h3>
            <div class="related-pills">
              <router-link to="/proyectos" class="related-pill">All sections</router-link>
              <router-link to="/curriculum" class="related-pill">Download my CVs</router-link>
              <router-link to="/contacto" class="related-pill">Contact</router-link>
            </div>
          </div>

          <ResultPagination v-if="queryText && results.length > 0" :active="1" />
        </section>

        <KnowledgeCard :facts="searchFacts">
          <p class="desc-text">
            Full-text search across experience, education, projects, skills, curriculum and contact information.
          </p>
        </KnowledgeCard>

      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import GoogleHeader from '../components/GoogleHeader.vue';
import KnowledgeCard from '../components/KnowledgeCard.vue';
import ResultPagination from '../components/ResultPagination.vue';
import { search, profile } from '../data/content';

const route = useRoute();

const queryText = computed(() => (route.query.q || '').toString());
const results = computed(() => search(queryText.value));

const typeLabel = {
  about: 'Profile',
  experience: 'Experience',
  education: 'Education',
  project: 'Project',
  skill: 'Skill',
  curriculum: 'Curriculum',
  contact: 'Contact',
};

const typeIcon = {
  about: 'fas fa-user',
  experience: 'fas fa-briefcase',
  education: 'fas fa-graduation-cap',
  project: 'fas fa-code',
  skill: 'fas fa-cog',
  curriculum: 'fas fa-file-pdf',
  contact: 'fas fa-envelope',
};

const searchFacts = [
  { label: 'Search index', value: '7 experiences · 10 courses · 5 projects · 5 skills · 5 CVs' },
  { label: 'Location', value: profile.location },
  { label: 'Email', value: profile.email },
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
.result-type { font-size: 12px; color: #70757a; }

.no-results { margin-bottom: 30px; }
.no-results-title { font-size: 24px; font-weight: 400; color: #202124; margin-bottom: 8px; }
.no-results-hint { font-size: 14px; color: #4d5156; margin-bottom: 14px; }

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