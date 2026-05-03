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
              value="Erick Pérez — Jr. DevOps Engineer & Quality Specialist" 
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
            <h2 class="profile-name">Erick Pérez - My Journey</h2>
            <p class="profile-subtitle">Jr. DevOps Engineer & Quality Specialist</p>
<div class="divider"></div>

<p class="desc-text">
  <strong>Professional Journey</strong><br><br>

  My career has evolved from <strong>customer-facing roles</strong> into technically driven positions focused on 
  <strong>data, systems, and quality</strong>. I began in financial services supporting North American clients, 
  developing a solid foundation in problem-solving and handling complex, high-impact scenarios.<br><br>

  I then transitioned into <strong>technical support</strong> for gaming and consumer technology, strengthening my ability to 
  troubleshoot <strong>system-level issues</strong> in fast-paced environments. This experience led me into 
  <strong>fraud detection</strong>, where I built a data-driven mindset centered on pattern recognition, risk analysis, 
  and informed decision-making.<br><br>

  Building on this, I moved into <strong>marketing technology</strong>, working with 
  <strong>data pipelines, API integrations, and global campaign operations</strong>. Over time, my role evolved toward 
  engineering practices—designing QA frameworks, validating complex workflows, and improving process efficiency.<br><br>

  <strong>Today</strong>, I focus on delivering reliable, end-to-end solutions by combining 
  <strong>technical execution, data validation, and performance optimization</strong>.
</p>
            <div class="divider"></div>
            <div class="profile-info">
				<p><strong>Total experience:</strong> 10+ years</p>
				<p><strong>Specialization:</strong> QA Engineering, Data Operations & DevOps (in transition)</p>
				<p><strong>Current location:</strong> Costa Rica</p>
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
    company: "Catalina Marketing",
    period: "Nov 2023 – Dec 2025 (2 years 1 month)",
    role: "Senior Campaign Specialist – Marketing Operations & Data Systems",
    description: "Managed end-to-end execution of in-store and digital coupon campaigns, leveraging CMS and CRM platforms to deliver personalized, data-driven marketing solutions. Combined technical operations, data validation, and client collaboration to ensure reliable campaign delivery and measurable business impact."
  },
  {
    company: "Marigold (formerly Cheetah Digital)",
    period: "Sep 2021 – Oct 2023 (2 years 1 month)",
    role: "Senior Email QA Engineer (CQE) – Campaign Quality & Automation",
    description: "Led quality assurance and validation processes for enterprise email marketing campaigns, ensuring accuracy, reliability, and high-performance delivery across complex data-driven systems. Focused on test design, automation, and process optimization in a production-like environment."
  },
  {
    company: "Experian → Marigold (formerly Cheetah Digital)",
    period: "Aug. 2020 - Aug. 2021 (1 year)",
    role: "Email Marketing Specialist – Marketing Technology & Data Operations",
    description: "Maintained continuity in role and responsibilities following the transition of the email marketing business unit from Experian to Marigold. Managed marketing technology operations and data-driven campaign execution for global clients, focusing on data integration, workflow optimization, and cross-platform coordination."
  },
  {
    company: "Experian CR",
    period: "Oct. 2019 – Aug. 2020 (10 months)",
    role: "Email Marketing Specialist – Marketing Technology & Data Operations",
    description: "Managed marketing technology operations and data-driven campaign execution for global clients, focusing on data integration, workflow optimization, and cross-platform coordination. Played a key role in ensuring reliable data pipelines and high-quality campaign delivery across multiple regions."
  },
  {
    company: "Western Union",
    period: "Mar. 2016 - Feb. 2019 (2 years 11 months)",
    role: "Fraud Detection Analyst – Digital Transactions & Risk Operations",
    description: "Transitioned into a specialized role focused on digital fraud detection and risk analysis, supporting the identification and prevention of fraudulent activity across global online transactions. Analyzed customer profiles and transactional data to detect suspicious patterns, contributing to the protection of users and the integrity of financial systems."
  },
  {
    company: "Concentrix",
    period: "Jun. 2015 – Dec. 2015 (7 months)",
    role: "Technical Support Specialist – Apple Ecosystem (Founding Team)",
    description: "Selected as part of the founding team responsible for launching and scaling the technical support line for Apple products in Costa Rica, supporting U.S. customers across iPhone, Mac, Apple Watch, and Apple digital services. Played a key role in establishing support processes, troubleshooting standards, and knowledge-sharing practices in a newly formed operational environment."
  },
  {
    company: "Aegis (now Teleperformance",
    period: "Apr. 2012 - Jan. 2015 (2 years and 9 months)",
    role: "Technical Support Specialist – Gaming Platforms & Digital Services",
    description: "Delivered advanced technical support for U.S.-based gaming platforms and digital retail partners, including Game Informer and GameStop, resolving issues related to user accounts, digital content, and platform access. Operated within a high-volume, systems-driven environment requiring analytical thinking, precision, and efficient issue resolution.y"
  },
  {
    company: "Sykes (now Foundever)",
    period: "Ago. 2011 - Feb. 2012 (6 months)",
    role: "Customer Support Specialist – Banking Services",
    description: "Delivered high-quality customer support for U.S. and Canadian clients on behalf of Bank of America, managing a wide range of banking inquiries including account management, transactions, and mortgage-related concerns. Acted as the primary point of contact, ensuring accurate, compliant, and customer-focused solutions in a fast-paced, high-volume environment."
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