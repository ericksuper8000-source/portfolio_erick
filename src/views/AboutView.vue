<template>
  <div class="google-wrapper">
    <GoogleHeader :query="profile.headline" placeholder="Search for Erick or enter text" />

    <main class="results-container sobre-mi-container">
      <div class="content-grid">

        <section class="results-list history-section">
          <p class="results-stats">Close to 9 results (0.38 seconds)</p>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">portfolioerickdev.netlify.app › about › profile</span>
            </div>
            <h1 class="main-title">Erick Pérez: Who I Am</h1>
            <p class="desc-text">
              {{ profile.bio }}
            </p>
            <div class="stats-strip">
              <div class="stat">
                <span class="stat-value">10+</span>
                <span class="stat-label">Years in Tech</span>
              </div>
              <div class="stat">
                <span class="stat-value">30+</span>
                <span class="stat-label">Brands served worldwide</span>
              </div>
              <div class="stat">
                <span class="stat-value">3</span>
                <span class="stat-label">Projects built with AI</span>
              </div>
              <div class="stat">
                <span class="stat-value">5+</span>
                <span class="stat-label">Years · Zero critical incidents</span>
              </div>
            </div>
          </div>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">portfolioerickdev.netlify.app › career › quality-engineering</span>
            </div>
            <router-link to="/conocimientos/qa-automation" class="sub-title">
              Senior QA & Automation — Precision at Scale
            </router-link>
            <p class="desc-text">
              I design and execute test case strategies, functional and regression validation, and automated test
              suites (pytest) with CI/CD quality gates. My QA framework at Cheetah Digital reduced campaign review
              cycles by 25%, and my campaign operations record at Catalina holds zero critical delivery errors.
              I translate technical performance into business-driven insights and keep documentation sharp for
              training.
            </p>
          </div>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">portfolioerickdev.netlify.app › life › art-of-precision</span>
            </div>
            <router-link to="/arte" class="sub-title">The Art of Precision: Beyond the Terminal</router-link>
            <p class="desc-text">
              As a realism tattoo artist and academic illustrator, I dedicate my personal time to the pursuit of
              perfection and detail. For me, art is the bridge between technical precision and human storytelling.
              This passion allows me to maintain a healthy professional balance while developing the ability to
              listen and connect with people from all walks of life—a skill that is vital for effective team
              collaboration.
            </p>
            <router-link to="/arte" class="teaser-link">Explore the studio gallery ›</router-link>
          </div>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">portfolioerickdev.netlify.app › life › interests</span>
            </div>
            <h2 class="sub-title">Coffee, Thrillers, and a Rabbit Named Ponyo</h2>
            <p class="desc-text">
              Let’s be real: life is better with a bit of mystery and a lot of imagination. When I’m not debugging
              or architecting pipelines, you’ll find me lost in a Stephen King multiverse, debating Harry Potter
              lore, or exploring the complex worlds of Neil Gaiman and Isaac Asimov. I’m a firm believer that a
              well-told story is the best fuel for a creative mind. Oh, and if you want to talk about how the
              discipline of academic drawing makes me a more focused engineer (or just want to see pictures of my
              rabbit), I’m always down for a chat!
            </p>
          </div>

          <div class="related-box">
            <h3 class="related-title">Related searches</h3>
            <div class="related-pills">
              <router-link to="/curriculum" class="related-pill">Download my CV</router-link>
              <router-link to="/contacto" class="related-pill">Contact</router-link>
              <router-link to="/arte" class="related-pill">Art of Precision</router-link>
              <router-link to="/proyectos" class="related-pill">All sections</router-link>
            </div>
          </div>

          <div class="personal-carousel-container">
            <h3 class="carousel-title">Inside the Lab &amp; Studio</h3>
            <div class="carousel-track">
              <div class="carousel-item">
                <img src="../assets/Viajes.jpg" alt="Travel" />
                <span>Traveling With My Family</span>
              </div>
              <div class="carousel-item">
                <img src="../assets/Viajes2.jpg" alt="Pet" />
                <span>Traveling CR</span>
              </div>
              <div class="carousel-item">
                <img src="../assets/Viajes3.jpg" alt="Reading" />
                <span>I love the beach</span>
              </div>
              <div class="carousel-item">
                <img src="../assets/Viajes4.jpg" alt="Nature" />
                <span>Love Nature</span>
              </div>
              <div class="carousel-item">
                <img src="../assets/Viajes5.jpg" alt="Family trip" />
                <span>Family time</span>
              </div>
              <div class="carousel-item">
                <img src="../assets/Viajes6.jpg" alt="Adventure" />
                <span>Always exploring</span>
              </div>
            </div>
          </div>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="aboutFacts">
          <p class="desc-text artist-quote">
            {{ profile.quote }}
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

const aboutFacts = [
  { label: 'Specialty', value: 'QA & Test Automation, Backend APIs & Realistic Art.' },
  { label: 'Cloud', value: 'AWS Cloud Practitioner (in progress).' },
  { label: 'Current Stack', value: 'Python, FastAPI, PostgreSQL, Docker, CI/CD (GitHub Actions, GitLab CI), Linux · SDD, AI Agents & LLM APIs.' },
  { label: 'Location', value: profile.location },
];
</script>

<style scoped>
.google-wrapper {
  font-family: 'Roboto', sans-serif;
  color: #202124;
  background: white;
  min-height: 100vh;
  overflow-x: hidden;
}

.sobre-mi-container {
  padding: 30px 5% 20px 5%;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 60px;
  max-width: 1250px;
}

.result-url-row {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.url-text {
  font-size: 14px;
  color: #4d5156;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.results-stats {
  color: #70757a;
  font-size: 13px;
  margin-bottom: 25px;
  opacity: 0.85;
}

.history-section {
  max-width: 652px;
  margin-left: 135px;
}

.bio-snippet { margin-bottom: 35px; }

.main-title { font-size: 28px; font-weight: 400; color: #202124; margin-bottom: 2px; }

.sub-title {
  font-size: 20px;
  font-weight: 400;
  color: #1a0dab;
  margin-bottom: 4px;
  cursor: default;
  text-decoration: none;
  display: block;
}
.sub-title:hover { text-decoration: underline; }

.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; }
.artist-quote { font-style: italic; border-left: 3px solid #dfe1e5; padding-left: 15px; }

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

.personal-carousel-container { margin-top: 20px; border-top: 1px solid #ebebeb; padding-top: 20px; }
.carousel-title { font-size: 18px; font-weight: 400; margin-bottom: 15px; }
.carousel-track { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 15px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
.carousel-item { flex: 0 0 180px; display: flex; flex-direction: column; gap: 8px; text-align: center; scroll-snap-align: start; }
.carousel-item img { width: 100%; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid #dfe1e5; }
.carousel-item span { font-size: 13px; color: #4d5156; }

.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 22px;
}
.stat {
  background: #f8f9fa;
  border: 1px solid #dadce0;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  text-align: center;
}
.stat-value { font-size: 24px; font-weight: 500; color: #1a73e8; font-family: 'Roboto', Arial, sans-serif; }
.stat-label { font-size: 12px; color: #5f6368; line-height: 1.3; }

.teaser-link {
  display: inline-block;
  margin-top: 10px;
  font-size: 13px;
  color: #1a0dab;
  text-decoration: none;
}
.teaser-link:hover { text-decoration: underline; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .history-section { margin-left: 0; }
  .sobre-mi-container { padding-top: 20px; }
  .knowledge-card { margin-top: 30px; }
}

@media (max-width: 600px) {
  .stats-strip { grid-template-columns: repeat(2, 1fr); }
  .stat-value { font-size: 20px; }
}

@media (max-width: 480px) {
  .main-title { font-size: 24px; }
  .carousel-item { flex: 0 0 140px; }
}
</style>