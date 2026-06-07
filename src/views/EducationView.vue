<template>
  <div class="google-wrapper">
    <header class="search-header">
      <div class="header-content">
        <router-link to="/" class="brand-logo">
          <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green">k</span>
        </router-link>
        
        <div class="search-box-container">
          <div class="search-box">
            <span class="material-symbols-outlined search-icon-left">search</span>
            
            <input 
              type="text" 
              class="search-input"
              value="Erick Pérez — Education & Certifications" 
              readonly 
            />
            
            <div class="search-icons-group">
              <span class="material-symbols-outlined mic-icon">mic</span>
              <span class="material-symbols-outlined camera-icon">camera_alt</span>
            </div>
          </div>
        </div>

        <div class="user-actions d-none d-md-flex">
          <span class="material-symbols-outlined apps-icon">apps</span>
          <router-link to="/sobre-erick">
            <img src="../assets/ME.jpg" class="avatar" alt="Erick Pérez" />
          </router-link>
        </div>
      </div>

      <nav class="search-tabs">
        <div class="tabs-inner">
          <div class="tab active">All</div>
          <div class="tab">Images</div>
          <div class="tab">Videos</div>
          <div class="tab">Maps</div>
          <div class="tab">More</div>
        </div>
      </nav>
    </header>

    <main class="results-container">
      <div class="content-grid">
        
        <section class="results-list">
          <p class="results-stats">Close to 9 results (0.38 seconds)</p>

          <div v-for="(job, index) in experiences" :key="index" class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">{{ job.company }}</span>
                <span class="url-path"> › {{ job.period }}</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <h3 class="result-title">{{ job.role }}</h3>
            <p class="result-description">{{ job.description }}</p>
          </div>

          <div class="pagination-wrapper">
            <div class="pagination-content">
              <div class="pagination-letters">
                <span class="g-blue">E</span>
                <span class="g-red">r</span>
                <span class="g-yellow">i</span>
                <span class="g-yellow">i</span>
                <span class="g-yellow">i</span>
                <span class="g-yellow">i</span>
                <span class="g-yellow">i</span>
                <span class="g-yellow">i</span>
                <span class="g-red">c</span>
                <span class="g-blue">k</span>
              </div>
              <div class="pagination-numbers">
                <span class="num">1</span>
                <span class="num link">2</span>
                <span class="num link">3</span>
                <span class="num link">4</span>
                <span class="num link">5</span>
                <span class="num link">6</span>
                <span class="num link">7</span>
                <span class="num link">8</span>
                <span class="num link">9</span>
                <span class="num link">10</span>
              </div>
              <span class="next-text">Next</span>
            </div>
          </div>
        </section>

        <aside class="knowledge-card">
          <div class="card-image-header profile-main-img">
            <img src="../assets/ME.jpg" alt="Erick Pérez" class="main-card-img">
          </div>
          <div class="card-body">
            <h2 class="profile-name">Erick Pérez</h2>
            <p class="profile-subtitle">Jr. DevOps Engineer | QA Specialist | Artist</p>
            <div class="divider"></div>
            <p class="desc-text">
              Erick applies a strong quality assurance automation mindset to cloud architecture and CI/CD development, balancing technical precision with rigorous visual execution.
            </p>
            <div class="divider"></div>
            <div class="profile-info">
              <p><strong>Education:</strong> DevOps Engineering Degree (In Progress)</p>
              <p><strong>Core Focus:</strong> Automation, Cloud Infrastructure & SDD</p>
              <p><strong>Location:</strong> Costa Rica</p>
            </div>
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<script setup>
const experiences = [
  {
    company: "erickperez.dev › education › devops-engineering",
    period: "Expected 2027",
    role: "DevOps Engineering Degree — EducacionIT",
    description: "Comprehensive technical program focusing on infrastructure automation, cloud architecture, and modern deployment lifecycles. Gaining hands-on expertise in CI/CD pipeline orchestration, containerization (Docker), and cloud infrastructure management."
  },
  {
    company: "erickperez.dev › credentials › ia-driven-development",
    period: "Issued 2026",
    role: "Advanced AI-Assisted Engineering & Spec-Driven Development — Big School",
    description: "Intensive certification focused on modern software engineering methodologies leveraging state-of-the-art AI tooling. Mastered Spec-Driven Development (SDD) to architect flawless technical blueprints, optimize token budget allocation, and minimize technical debt. Hands-on experience orchestrating advanced AI workflows using Claude Code, context-aware autonomous agents, persistent memory layers, and NotebookLM for deep documentation ingestion."
  },
  {
    company: "erickperez.dev › education › independent-study",
    period: "Continuous Learning",
    role: "Advanced Python & Desktop Applications — Independent Study",
    description: "(80+ hours of combined theory & practice). Focus: Object-Oriented Programming (OOP), Data Validation, and GUI Development (Tkinter). Applied directly to building local software solutions with clean, structured architecture."
  },
  {
    company: "erickperez.dev › education › independent-study",
    period: "Specialized Training",
    role: "Relational Databases & SQL Design — Intensive Course",
    description: "(20 hours). Focus: Database normalization, complex query optimization, and ensuring transactional data integrity across relational models."
  },
  {
    company: "erickperez.dev › education › independent-study",
    period: "Specialized Training",
    role: "Backend Architecture with FastAPI — Specialized Course",
    description: "(4 hours). Focus: High-performance RESTful API development, asynchronous routing, and implementing Spec-Driven Development (SDD) for seamless backend workflows."
  },
  {
    company: "erickperez.dev › credentials › web-development-platzi",
    period: "Issued 2021",
    role: "Web Development Program — Escuela de Desarrollo Web Platzi",
    description: "Intensive track covering modern web standards, semantic HTML5, responsive CSS architectures, and foundational JavaScript logic for building dynamic user interfaces."
  },
  {
    company: "erickperez.dev › credentials › database-analysis-platzi",
    period: "Issued 2020",
    role: "Relational Database Analysis & Design — Platzi",
    description: "Specialized coursework focused on conceptual modeling, entity-relationship diagrams (ERD), relational algebra, and writing efficient SQL statements for data retrieval."
  },
  {
    company: "erickperez.dev › education › fidelitas-university",
    period: "Issued 2014",
    role: "Technical Degree in Web Page Design — Universidad Fidélitas",
    description: "Professional technical program centered on web layout techniques, visual interface design principles, and optimizing digital assets for cross-browser web deployments."
  },
  {
    company: "erickperez.dev › education › computer-systems-engineering",
    period: "Attended 2013",
    role: "Computer Systems Engineering — Universidad Latina de Costa Rica",
    description: "Foundational coursework in computer science, algorithmic logic, programming fundamentals, and discrete mathematics. (Undergraduate program, incomplete)."
  }
];
</script>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }

/* HEADER */
.search-header { padding-top: 25px; border-bottom: 1px solid #ebebeb; position: sticky; top: 0; background: white; z-index: 100; }
.header-content { display: flex; align-items: center; padding: 0 5%; gap: 30px; }
.brand-logo { font-size: 30px; font-weight: 500; text-decoration: none; font-family: 'Product Sans', Arial, sans-serif; }
.g-blue { color: #4285f4; } .g-red { color: #ea4335; } .g-yellow { color: #fbbc05; } .g-green { color: #34a853; }

.search-box-container { flex-grow: 1; max-width: 692px; }
.search-box { 
  display: flex; 
  align-items: center; 
  border: 1px solid #dfe1e5; 
  border-radius: 24px; 
  padding: 0 14px 0 18px; 
  height: 44px; 
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.search-icon-left { 
  color: #9aa0a6; 
  font-size: 20px; 
  margin-right: 10px;
}

.search-input { 
  border: none; 
  outline: none; 
  flex-grow: 1; 
  font-size: 16px; 
  background: transparent; 
  color: #202124 !important;
  font-family: Arial, sans-serif;
}

.search-icons-group { display: flex; align-items: center; gap: 12px; }
.mic-icon, .camera-icon { font-size: 24px; cursor: pointer; color: #4285f4; }

.user-actions { margin-left: auto; display: flex; align-items: center; gap: 20px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.apps-icon { color: #5f6368; cursor: pointer; }

.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }

/* LAYOUT */
.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }

/* STATS */
.results-stats { color: #70757a; font-size: 13px; opacity: 0.85; margin-bottom: 25px; }

/* ITEMS DE EXPERIENCIA */
.result-item { margin-bottom: 30px; }
.result-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
.result-url-area { font-size: 14px; color: #202124; }
.url-domain { font-weight: 400; }
.url-path { color: #4d5156; }
.more-icon { color: #70757a; font-size: 18px; cursor: pointer; }
.result-title { font-size: 20px; color: #1a0dab; font-weight: 400; margin: 0 0 4px 0; }
.result-title:hover { text-decoration: underline; cursor: pointer; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

/* PAGINACIÓN */
.pagination-wrapper { margin: 60px 0; display: flex; justify-content: center; }
.pagination-content { display: inline-block; position: relative; }
.pagination-letters { font-family: 'Product Sans', sans-serif; font-size: 34px; font-weight: bold; display: flex; justify-content: center; margin-bottom: 2px; }
.pagination-letters span { width: 24px; text-align: center; }
.pagination-numbers { display: flex; justify-content: center; font-size: 13px; }
.pagination-numbers .num { width: 24px; text-align: center; }
.num.link { color: #1a73e8; cursor: pointer; }
.next-text { position: absolute; right: -75px; top: 40px; color: #1a73e8; font-size: 13px; cursor: pointer; }

/* KNOWLEDGE CARD */
.knowledge-card { border: 1px solid #dadce0; border-radius: 8px; overflow: hidden; height: fit-content; }
.main-card-img { width: 100%; height: 300px; object-fit: cover; }
.card-body { padding: 20px; }
.profile-name { font-size: 28px; font-weight: 400; margin-bottom: 4px; }
.profile-subtitle { color: #70757a; font-size: 16px; }
.divider { height: 1px; background: #dadce0; margin: 15px 0; }
.profile-info p { font-size: 14px; margin-bottom: 8px; }

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list, .search-tabs { margin-left: 0; }
}
</style>