<template>
  <div class="google-wrapper">
    <GoogleHeader query="Erick Pérez — Career Hub" placeholder="Search for Erick or enter text" />

    <main class="results-container">
      <div class="content-grid">
        <section class="results-list">
          <p class="results-stats">Close to 9 results (0.38 seconds)</p>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/ME.jpg" alt="Erick Pérez" class="favicon-me">
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › About Me</span>
            </div>
            <router-link to="/sobre-erick" class="result-title">
              Who I am - Erick Pérez
            </router-link>
            <p class="result-description">
              QA & Automation Analyst with 5+ years validating high-volume campaigns for Fortune 500 brands
              (zero critical errors), pivoting into Backend (FastAPI) and DevOps (CI/CD, Docker, AWS).
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/case.png" alt="">
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › experience › jobs</span>
            </div>
            <router-link to="/experiencia" class="result-title">
              Experience - Employment and Professional Career Path
            </router-link>
            <p class="result-description">
              Over 5 years leading data-driven campaign and QA operations for global brands (Disney, Wells Fargo,
              The New York Times, Starbucks), with a QA framework that cut review time by 25% and zero critical
              delivery errors.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/books.png" alt="">
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › education › courses</span>
            </div>
            <router-link to="/educacion" class="result-title">
              Education – Courses and Continuing Education
            </router-link>
            <p class="result-description">
              DevOps Engineering program (EducacionIT, expected 2027), AWS Cloud Practitioner (in progress),
              Advanced AI-Assisted Engineering &amp; SDD (Big School), advanced Python (80+ hrs), SQL design (20 hrs),
              FastAPI training, plus Platzi and a technical degree in web design.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/skills.png" alt="">
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › skills › technology Stack</span>
            </div>
            <router-link to="/conocimientos" class="result-title">
              Knowledge – Skills and Technology Stack
            </router-link>
            <p class="result-description">
              Python (FastAPI, Pandas, pytest), PostgreSQL, Docker, CI/CD (GitHub Actions, GitLab CI), Linux/Debian,
              AWS (in progress), plus 5+ years of QA &amp; campaign operations and hands-on AI-Assisted Engineering
              (SDD, agents, LLM APIs, RAG fundamentals).
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/projects.png" alt="">
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › portfolio › projects</span>
            </div>
            <router-link to="/mis-proyectos" class="result-title">
              Projects – Software Development and Tools
            </router-link>
            <p class="result-description">
              Portfolio of real projects: API-Learning-Lab (FastAPI + PostgreSQL), WhatsApp Finance Assistant
              (FastAPI + Celery, 48 tests), CI/CD Pipeline Labs (GitHub Actions + GitLab CI + Docker),
              Linux DevOps Labs (Debian) and a Pandas/NumPy data analyzer.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img :src="tattooVaca" alt="">
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › life › art-of-precision</span>
            </div>
            <router-link to="/arte" class="result-title">
              The Art of Precision – Realism Tattoo Work
            </router-link>
            <p class="result-description">
              Realism tattoo artist and academic illustrator: pieces from the studio where detail, anatomy and
              shading meet the same obsession with precision I bring to QA and clean pipelines.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <i class="fas fa-file-pdf favicon-fa"></i>
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › curriculum › downloads</span>
            </div>
            <router-link to="/curriculum" class="result-title">
              Curriculum – Download my CVs
            </router-link>
            <p class="result-description">
              The 5 professional CVs (Python Developer, DevOps, QA & Automation, Campaign Specialist, Linux
              SysAdmin) in ATS-friendly PDF format, ready to download.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <i class="fas fa-envelope favicon-fa"></i>
              </div>
              <span class="url-text">https://portfolioerickdev.netlify.app › contact</span>
            </div>
            <router-link to="/contacto" class="result-title">
              Contact – Erick Pérez
            </router-link>
            <p class="result-description">
              Phone, email, location and social profiles to get in touch quickly.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="https://www.google.com/s2/favicons?sz=64&domain=linkedin.com" alt="">
              </div>
              <span class="url-text">https://linkedin.com › in › erick-perez88</span>
            </div>
            <a href="https://www.linkedin.com/in/erick-perez88/" target="_blank" class="result-title">
              Erick Pérez - LinkedIn Profile
            </a>
            <p class="result-description">
              Connect with Erick on LinkedIn to explore a professional profile featuring recommendations, a growing
              network within the IT industry, and regular updates on projects, skills and career progress.
            </p>
          </section>

          <ResultPagination :active="1" />
        </section>

        <KnowledgeCard :facts="cardFacts">
          <p class="desc-text about-text">
            <strong>About Me</strong><br /><br />
            Erick Pérez is a Costa Rican <strong>QA Engineer &amp; Developer</strong> based in
            {{ profile.location }}, with <strong>10+ years of experience</strong> across technical support, fraud
            analysis, marketing technology and quality assurance.<br /><br />
            <strong>Today</strong>, he is focused on transitioning into <strong>Backend Development and DevOps</strong>,
            combining his QA discipline with Python (FastAPI), CI/CD and Docker to design
            <strong>efficient, reliable, and scalable solutions</strong>.<br /><br />
            <strong>Proof over promises:</strong> a QA framework that cut campaign review time by
            <strong>25%</strong>, a <strong>zero critical-error record</strong> across Fortune 500 campaigns, and
            <strong>48 automated tests</strong> behind his flagship FastAPI project.
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
import tattooVaca from '../assets/tatuaje-vaca.jpeg';

const cardFacts = [
  { label: 'Birth', value: `${profile.birth} (37 years old), San José, Costa Rica` },
  { label: 'Degrees', value: 'DevOps Engineering (EducacionIT, in progress) | AWS Cloud Practitioner (in progress) | Técnico en Diseño de Páginas Web (Fidélitas)' },
  { label: 'Soft skills', value: 'Effective communication, teamwork, problem-solving, adaptability, and flexibility' },
  { label: 'Languages', value: profile.languages },
  { label: 'Interests', value: 'Programming, technology, reading, tattooing, traveling' },
];
</script>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.7; margin-bottom: 25px; }
.result-item { margin-bottom: 30px; }
.result-url-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
.favicon-container { width: 26px; height: 26px; background-color: #f1f3f4; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
.favicon-container.is-image img { width: 16px; height: 16px; object-fit: contain; }
.favicon-me { width: 100% !important; height: 100% !important; object-fit: cover !important; }
.favicon-fa { font-size: 14px; color: #5f6368; }
.url-text { font-size: 14px; color: #202124; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.result-title { font-size: 20px; color: #1a0dab; text-decoration: none; display: block; margin-bottom: 4px; line-height: 1.3; }
.result-title:hover { text-decoration: underline; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

.about-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list { margin-left: 0; }
}
</style>