<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Currículums" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">Close to {{ curriculum.length }} results (0.38 seconds)</p>

          <section v-for="cv in curriculum" :key="cv.slug" class="result-item">
            <div class="result-url">
              <span class="favicon-wrap">
                <i class="fas fa-file-pdf favicon-fa"></i>
              </span>
              <span class="url-text">portfolioerickdev.netlify.app › {{ cv.urlPath }}</span>
            </div>
            <a :href="cv.path" target="_blank" class="result-title">
              {{ cv.title }} — CV (PDF)
            </a>
            <p class="result-description">{{ cv.summary }}</p>
            <div class="result-tags">
              <span v-for="tag in cv.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
            <div class="result-links">
              <a :href="cv.path" download :title="cv.file" class="download-link">
                <i class="fas fa-download"></i> Download {{ cv.file }}
              </a>
            </div>
          </section>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/sobre-erick" class="related-pill">Who I am</router-link>
              <router-link to="/experiencia" class="related-pill">Experience</router-link>
              <router-link to="/conocimientos" class="related-pill">Skills</router-link>
              <router-link to="/contacto" class="related-pill">Contact</router-link>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text">
            All CVs are ATS-friendly (single column, extractable text, standard fonts, max 2 pages) and 100%
            verifiable with the portfolio projects.
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
import { curriculum, profile } from '../data/content';

const cardFacts = [
  { label: 'Formats', value: 'PDF · ATS-friendly · 1-2 pages each' },
  { label: 'Strategy', value: 'Send only the CV matching each vacancy' },
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
.favicon-fa { font-size: 11px; color: #d93025; }
.url-text { font-size: 14px; color: #202124; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.result-title { font-size: 20px; color: #1a0dab; text-decoration: none; display: block; margin: 0 0 4px 0; font-weight: 400; }
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
.download-link { font-size: 14px; color: #1a0dab; text-decoration: none; }
.download-link:hover { text-decoration: underline; }

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