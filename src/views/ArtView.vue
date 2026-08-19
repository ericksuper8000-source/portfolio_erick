<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — The Art of Precision" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">

        <section class="results-list">
          <p class="results-stats">1 result (0.35 seconds)</p>

          <div class="result-item">
            <div class="result-url-row">
              <span class="url-text">portfolioerickdev.netlify.app › life › art-of-precision</span>
            </div>
            <h1 class="detail-title">The Art of Precision — Realism Tattoo Work</h1>
            <p class="desc-text">
              As a realism tattoo artist and academic illustrator, I dedicate my personal time to the pursuit of
              perfection and detail. For me, art is the bridge between technical precision and human storytelling.
              This passion allows me to maintain a healthy professional balance while developing the ability to
              listen and connect with people from all walks of life—a skill that is vital for effective team
              collaboration.
            </p>
            <p class="desc-text">
              The same obsession with detail that I bring to QA, automation and clean pipelines goes into every
              piece I tattoo. A steady hand, an eye for anatomy and shading, and zero tolerance for sloppy lines.
            </p>

            <div class="art-grid">
              <div class="art-item" v-for="piece in tattooWorks" :key="piece.src">
                <img :src="piece.src" :alt="piece.alt" loading="lazy" />
                <span>{{ piece.caption }}</span>
              </div>
            </div>
          </div>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/sobre-erick" class="related-pill">About Erick</router-link>
              <router-link to="/proyectos" class="related-pill">All sections</router-link>
              <router-link to="/contacto" class="related-pill">Contact</router-link>
            </div>
            <router-link to="/sobre-erick" class="back-link">‹ Back to About</router-link>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text">
            Beyond the terminal: realism tattoo art and academic drawing as a discipline of precision.
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
import tattooBarba from '../assets/tatuaje-barba.jpeg';
import tattooDemonio from '../assets/tatuaje-demonio.jpeg';
import tattooEnfermera from '../assets/tatuaje-enfermera.jpeg';
import tattooPikachu from '../assets/tatuaje-pikachu.jpeg';
import tattooVaca from '../assets/tatuaje-vaca.jpeg';

const tattooWorks = [
  { src: tattooBarba, alt: 'Beard realism tattoo', caption: 'Beard realism' },
  { src: tattooDemonio, alt: 'Dark fantasy tattoo piece', caption: 'Dark fantasy' },
  { src: tattooEnfermera, alt: 'Nurse portrait tattoo', caption: 'Portrait study' },
  { src: tattooPikachu, alt: 'Pikachu tattoo', caption: 'Pop culture' },
  { src: tattooVaca, alt: 'Cow realism tattoo', caption: 'Animal realism' },
];

const cardFacts = [
  { label: 'Style', value: 'Realism & illustrative tattoo' },
  { label: 'Also', value: 'Academic drawing and illustration' },
  { label: 'Discipline', value: 'Anatomy, shading and detail' },
  { label: 'Location', value: profile.location },
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
.url-text { font-size: 14px; color: #4d5156; white-space: nowrap; }

.detail-title { font-size: 28px; font-weight: 400; color: #202124; margin: 0 0 12px 0; }
.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; margin-bottom: 12px; }

.art-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 18px;
}
.art-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}
.art-item img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #dfe1e5;
  background: #f1f3f4;
  box-shadow: 0 1px 3px rgba(60, 64, 67, 0.12);
}
.art-item span { font-size: 13px; color: #4d5156; }

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

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}

@media (max-width: 600px) {
  .art-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
}
</style>