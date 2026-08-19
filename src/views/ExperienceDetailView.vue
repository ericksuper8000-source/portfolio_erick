<template>
  <div class="google-wrapper">
    <GoogleHeader :query="headerQuery" placeholder="Search for Erick or enter text" />

    <main v-if="item" class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">1 result (0.35 seconds)</p>

          <div class="result-item">
            <div class="result-url-row">
              <span class="url-text">portfolioerickdev.netlify.app › {{ item.urlPath }}</span>
            </div>
            <h1 class="detail-title">{{ item.role }}</h1>
            <p class="detail-meta">
              {{ item.company }} · {{ item.period }} · {{ item.duration }} · {{ item.location }}
            </p>
            <p class="desc-text">{{ item.description }}</p>

            <ul class="detail-bullets">
              <li v-for="(bullet, i) in item.bullets" :key="i">{{ bullet }}</li>
            </ul>

            <div class="detail-tags">
              <span v-for="tag in item.tags" :key="tag" class="mini-tag">{{ tag }}</span>
            </div>
          </div>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link
                v-for="r in item.related"
                :key="r.label"
                :to="r.to"
                class="related-pill"
              >{{ r.label }}</router-link>
            </div>
            <router-link :to="'/experiencia'" class="back-link">‹ Back to Experience</router-link>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text">
            Part of a 10+ year career evolving from customer-facing roles into data, systems and quality —
            currently transitioning into Backend (FastAPI) and DevOps.
          </p>
        </KnowledgeCard>

      </div>
    </main>

    <main v-else class="results-container">
      <div class="not-found">
        <h1 class="not-found-title">Page not found</h1>
        <p class="not-found-hint">The requested experience does not exist.</p>
        <router-link to="/experiencia" class="back-link">‹ Back to Experience</router-link>
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
import { findExperience, experiences, profile } from '../data/content';

const route = useRoute();
const item = computed(() => findExperience(route.params.slug));
const headerQuery = computed(() => (item.value ? `Erick Pérez — ${item.value.role}` : 'Erick Pérez — Experience'));
const nextItem = computed(() => {
  const idx = experiences.findIndex((e) => e.slug === route.params.slug);
  return idx >= 0 ? experiences[(idx + 1) % experiences.length] : null;
});

const cardFacts = [
  { label: 'Company', value: item.value ? item.value.company : '' },
  { label: 'Period', value: item.value ? `${item.value.period} (${item.value.duration})` : '' },
  { label: 'Location', value: item.value ? item.value.location : '' },
  { label: 'Next in career', value: nextItem.value ? nextItem.value.company : profile.location },
];
</script>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.85; margin-bottom: 25px; }

.result-item { margin-bottom: 20px; }
.result-url-row { display: flex; align-items: center; margin-bottom: 4px; }
.url-text { font-size: 14px; color: #4d5156; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.detail-title { font-size: 28px; font-weight: 400; color: #202124; margin: 0 0 2px 0; }
.detail-meta { font-size: 14px; color: #70757a; margin: 0 0 14px 0; }
.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; margin-bottom: 12px; }

.detail-bullets { margin: 0 0 14px 0; padding-left: 20px; }
.detail-bullets li { font-size: 14px; line-height: 1.58; color: #4d5156; margin-bottom: 6px; }

.detail-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.mini-tag {
  background: #f1f3f4;
  border: 1px solid #dadce0;
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 11px;
  color: #3c4043;
}

.related-box { margin: 30px 0; }
.related-title { font-size: 14px; font-weight: 400; color: #70757a; margin-bottom: 10px; }
.related-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
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
.back-link { font-size: 13px; color: #1a0dab; text-decoration: none; }
.back-link:hover { text-decoration: underline; }

.not-found { margin-left: 135px; max-width: 652px; padding: 40px 0; }
.not-found-title { font-size: 28px; font-weight: 400; color: #202124; margin: 0 0 8px 0; }
.not-found-hint { font-size: 14px; color: #4d5156; margin-bottom: 14px; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
  .not-found { margin-left: 0; }
}
</style>