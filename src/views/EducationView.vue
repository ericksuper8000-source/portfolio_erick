<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Education & Certifications" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">Close to {{ education.length }} results (0.38 seconds)</p>

          <div v-for="(item, index) in education" :key="index" class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">{{ item.provider }}</span>
                <span class="url-path"> › {{ item.period }}</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <router-link :to="`/educacion/${item.slug}`" class="result-title">
              {{ item.title }}
            </router-link>
            <p class="result-description">{{ item.summary }}</p>
            <div class="result-tags">
              <span v-for="tag in item.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
          </div>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/conocimientos" class="related-pill">Skills & Tech Stack</router-link>
              <router-link to="/curriculum" class="related-pill">Download my CVs</router-link>
              <router-link to="/mis-proyectos" class="related-pill">Projects</router-link>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text">
            Erick applies a strong quality assurance automation mindset to cloud architecture and CI/CD
            development, balancing technical precision with rigorous visual execution.
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
import { education, profile } from '../data/content';

const cardFacts = [
  { label: 'Education', value: 'DevOps Engineering Degree (In Progress)' },
  { label: 'Core Focus', value: 'Automation, Cloud Infrastructure & SDD' },
  { label: 'Location', value: profile.location },
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

.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}
</style>