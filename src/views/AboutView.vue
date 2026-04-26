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
              value="Erick Pérez — Senior DevOps & Quality Engineering Specialist" 
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
          <img src="../assets/ME.jpg" class="avatar" alt="Erick Pérez" />
        </div>
      </div>

      <nav class="search-tabs">
        <div class="tabs-inner">
          <div class="tab active">All</div>
          <div class="tab">Images</div>
          <div class="tab">Videos</div>
          <div class="tab">News</div>
          <div class="tab">More</div>
        </div>
      </nav>
    </header>

    <main class="results-container sobre-mi-container">
      <div class="content-grid">
        
        <section class="results-list history-section">
          <p class="results-stats">About 1,992 results (0.42 seconds)</p>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">erickperez.dev › about › profile</span>
            </div>
            <h1 class="main-title">Erick Pérez: Who I Am</h1>
            <p class="desc-text">
              Experienced Senior QA Specialist with over 5 years of expertise in high-scale marketing ecosystems, currently pivoting into DevOps Engineering. Having delivered zero-error deployments for global brands like Disney and Wells Fargo, I am now applying my automation mindset to CI/CD orchestration, Docker containerization, and AWS cloud infrastructure. Beyond the terminal, I am a realism tattoo artist and a dedicated literature enthusiast who values precision in both code and art.
            </p>
          </div>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">erickperez.dev › career › tech-stack</span>
            </div>
            <h2 class="sub-title">Senior Quality Assurance Specialist — Expertise in Scale</h2>
            <p class="desc-text">
              Beyond technical execution, I believe project success relies on seamless team communication. I have a proven ability to manage multiple production streams while keeping clients and stakeholders aligned through visual, goal-oriented reporting. By translating technical performance into business-driven insights and keeping internal documentation sharp for training, I ensure that every finding becomes a stepping stone for the next big milestone.
            </p>
          </div>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">erickperez.dev › projects › portfolio-orchestrator</span>
            </div>
            <h2 class="sub-title">The Art of Precision: Beyond the Terminal</h2>
            <p class="desc-text">
              As a realism tattoo artist and academic illustrator, I dedicate my personal time to the pursuit of perfection and detail. For me, art is the bridge between technical precision and human storytelling. This passion allows me to maintain a healthy professional balance while developing the ability to listen and connect with people from all walks of life—a skill that is vital for effective team collaboration and understanding the 'why' behind every project.
            </p>
          </div>

          <div class="bio-snippet">
            <div class="result-url-row">
              <span class="url-text">erickperez.dev › life › interests</span>
            </div>
            <h2 class="sub-title">Coffee, Thrillers, and a Rabbit Named Ponyo</h2>
            <p class="desc-text">
              Let’s be real: life is better with a bit of mystery and a lot of imagination. When I’m not debugging or architecting pipelines, you’ll find me lost in a Stephen King multiverse, debating Harry Potter lore, or exploring the complex worlds of Neil Gaiman and Isaac Asimov. I’m a firm believer that a well-told story is the best fuel for a creative mind. Oh, and if you want to talk about how the discipline of academic drawing makes me a more focused engineer (or just want to see pictures of my rabbit), I’m always down for a chat!
            </p>
          </div>

          <div class="personal-carousel-container">
            <h3 class="carousel-title">Inside the Lab & Studio</h3>
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
            </div>
          </div>

          <div class="pagination-wrapper">
            <div class="pagination-content">
              <div class="pagination-letters">
                <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-yellow">i</span><span class="g-red">c</span><span class="g-blue">k</span>
              </div>
              <div class="pagination-numbers">
                <span class="num active">1</span><span class="num link">2</span><span class="num link">3</span><span class="num link">4</span><span class="num link">5</span><span class="num link">6</span><span class="num link">7</span><span class="num link">8</span><span class="num link">9</span><span class="num link">10</span>
              </div>
              <span class="next-text">Next</span>
            </div>
          </div>
        </section>

        <aside class="knowledge-card art-card">
          <div class="card-image-header art-gallery">
            <div class="gallery-grid">
              <img src="../assets/Viajes4.jpg" alt="Pikachu" class="gallery-img" />
              <img src="../assets/tatuaje-enfermera.jpeg" alt="Wolf" class="gallery-img" />
              <img src="../assets/Viajes6.jpg" alt="Portrait" class="gallery-img" />
              <img src="../assets/Viajes5.jpg" alt="Beard" class="gallery-img" />
            </div>
            <span class="gallery-label">Portfolio: Realistic Shading, Pets & Costa Rica</span>
          </div>
          
          <div class="card-body">
            <h2 class="profile-name">Erick Pérez</h2>
            <p class="profile-subtitle">Jr. DevOps Engineer | QA Specialist | Artist</p>
            <div class="divider"></div>
            
            <p class="desc-text artist-quote">
              "In both DevOps and Tattooing, there is no room for error. It's about precision, scalability, and leaving a lasting mark of quality."
            </p>
            
            <div class="divider"></div>
            
            <div class="profile-info">
              <p><strong>Specialty:</strong> CI/CD Pipelines & Realistic Art.</p>
              <p><strong>Cloud:</strong> AWS Certified Practitioner (Candidate).</p>
              <p><strong>Current Stack:</strong> Python, Docker, GitLab, Linux.</p>
              <p><strong>Location:</strong> Costa Rica.</p>
            </div>
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<style scoped>
.google-wrapper {
  font-family: 'Roboto', sans-serif;
  color: #202124;
  background: white;
  min-height: 100vh;
  overflow-x: hidden;
}

/* HEADER */
.search-header {
  padding-top: 25px;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 0 5%;
  gap: 30px;
}

.brand-logo {
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  font-family: 'Product Sans', Arial, sans-serif;
}
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

.mic-icon, .camera-icon {
  font-size: 24px;
  cursor: pointer;
  color: #4285f4;
}

.user-actions { margin-left: auto; display: flex; align-items: center; gap: 20px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }

.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }

/* CUERPO */
.sobre-mi-container { 
  padding: 0 5% 20px 5% !important;
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
}

.results-stats { 
  color: #70757a; 
  font-size: 14px; 
  padding-top: 15px;
  margin-bottom: 25px;
}

.history-section { 
  max-width: 652px; 
  margin-left: 135px; 
}

.bio-snippet { margin-bottom: 35px; }

.main-title { font-size: 28px; font-weight: 400; color: #202124; margin-bottom: 2px; }

/* MODIFICACIÓN AQUÍ: Quitamos cursor pointer y hover underline */
.sub-title { 
  font-size: 20px; 
  font-weight: 400; 
  color: #1a0dab; 
  margin-bottom: 4px; 
  cursor: default; /* Cambiado de pointer a default */
}
.sub-title:hover { 
  text-decoration: none; /* Quitamos el subrayado */
}

.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

.knowledge-card { border: 1px solid #dadce0; border-radius: 8px; overflow: hidden; height: fit-content; margin-top: 55px; }
.art-gallery { background-color: #f8f9fa; padding: 10px; border-bottom: 1px solid #dadce0; }
.gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; }
.gallery-img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; transition: transform 0.3s; }
.gallery-img:hover { transform: scale(1.02); }
.gallery-label { display: block; font-size: 12px; color: #70757a; text-align: center; margin-top: 8px; }

.card-body { padding: 20px; }
.profile-name { font-size: 28px; font-weight: 400; margin: 0; }
.profile-subtitle { color: #70757a; font-size: 16px; margin: 4px 0; }
.divider { height: 1px; background: #dadce0; margin: 15px 0; }
.artist-quote { font-style: italic; border-left: 3px solid #dfe1e5; padding-left: 15px; }

/* ESTILOS DEL CARRUSEL */
.personal-carousel-container { margin-top: 20px; border-top: 1px solid #ebebeb; padding-top: 20px; }
.carousel-title { font-size: 18px; font-weight: 400; margin-bottom: 15px; }
.carousel-track { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 15px; }
.carousel-item { flex: 0 0 180px; display: flex; flex-direction: column; gap: 8px; text-align: center; }
.carousel-item img { width: 100%; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid #dfe1e5; }
.carousel-item span { font-size: 13px; color: #4d5156; }

/* PAGINACIÓN */
.pagination-wrapper { margin: 60px 0 40px 0; display: flex; justify-content: center; }
.pagination-content { display: inline-block; position: relative; }
.pagination-letters, .pagination-numbers { display: flex; justify-content: center; }
.pagination-letters span, .pagination-numbers .num {
  width: 26px; 
  text-align: center;
  display: inline-block;
}
.pagination-letters { font-family: 'Product Sans', Arial, sans-serif; font-size: 34px; font-weight: bold; }
.pagination-numbers { font-size: 13px; font-family: Arial, sans-serif; margin-top: -5px; }
.num.active { color: #202124; font-weight: bold; cursor: default; }
.num.link { color: #1a73e8; cursor: pointer; }
.next-text { position: absolute; right: -75px; top: 40px; color: #1a73e8; font-size: 13px; cursor: pointer; white-space: nowrap; }

/* --- RESPONSIVENESS --- */
@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .history-section, .search-tabs, .pagination-wrapper { margin-left: 0; }
  .sobre-mi-container { padding-top: 20px !important; }
  .header-content { flex-wrap: wrap; justify-content: center; gap: 15px; }
  .brand-logo { font-size: 24px; }
  .next-text { position: static; display: block; text-align: center; margin-top: 10px; }
}

@media (max-width: 480px) {
  .main-title { font-size: 24px; }
  .pagination-letters { font-size: 28px; }
  .pagination-letters span, .pagination-numbers .num { width: 20px; }
  .carousel-item { flex: 0 0 140px; }
}
</style>