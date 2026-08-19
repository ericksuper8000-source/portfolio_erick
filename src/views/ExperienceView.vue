<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Experience" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">Close to {{ experiences.length }} results (0.38 seconds)</p>

          <div v-for="(job, index) in experiences" :key="index" class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">{{ job.company }}</span>
                <span class="url-path"> › {{ job.period }} · {{ job.location }}</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <router-link :to="`/experiencia/${job.slug}`" class="result-title">
              {{ job.role }}
            </router-link>
            <p class="result-description">{{ job.summary }}</p>
            <div class="result-tags">
              <span v-for="tag in job.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
          </div>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/curriculum" class="related-pill">Download my CVs</router-link>
              <router-link to="/conocimientos" class="related-pill">Skills & Tech Stack</router-link>
              <router-link to="/sobre-erick" class="related-pill">Who I am</router-link>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text journey-text">
            <strong>Professional Journey</strong><br /><br />
            My career has evolved from <strong>customer-facing roles</strong> into technically driven positions
            focused on <strong>data, systems, and quality</strong>, moving through financial services, technical
            support, fraud detection and marketing technology.<br /><br />
            <strong>Today</strong>, I focus on delivering reliable, end-to-end solutions by combining
            <strong>quality engineering, backend development (FastAPI) and CI/CD automation</strong>.
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
import { experiences, profile } from '../data/content';

const cardFacts = [
  { label: 'Total experience', value: profile.totalExperience },
  { label: 'Specialization', value: 'QA Engineering, Data Operations & DevOps (in transition)' },
  { label: 'Current location', value: profile.location },
];
</script>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.85; margin-bottom: 25px; }

.result-item { margin-bottom: 30px; }
.result-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
.result-url-area { font-size: 14px; color: #202124; }
.url-domain { font-weight: 400; }
.url-path { color: #4d5156; }
.more-icon { color: #70757a; font-size: 18px; cursor: pointer; }
.result-title { font-size: 20px; color: #1a0dab; font-weight: 400; margin: 0 0 4px 0; text-decoration: none; display: block; }
.result-title:hover { text-decoration: underline; cursor: pointer; }
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

.journey-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}
</style>