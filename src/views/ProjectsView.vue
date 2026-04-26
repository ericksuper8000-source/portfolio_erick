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
              value="Proyectos y Repositorios de Erick Pérez" 
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
          <div class="tab active">Todo</div>
          <div class="tab">Images</div>
          <div class="tab">Vídeos</div>
          <div class="tab">Maps</div>
          <div class="tab">More</div>
        </div>
      </nav>
    </header>

    <main class="results-container">
      <div class="content-grid">
        <section class="results-list">
          <p class="results-stats">Close to 9 results (0.38 seconds)</p>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/ME.jpg" alt="Erick Pérez" class="favicon-me">
              </div>
              <span class="url-text">https://erickperez.com › About Me</span>
            </div>
            <router-link to="/sobre-erick" class="result-title">
              Who I am - Erick Pérez
            </router-link>
            <p class="result-description">
              Junior Python developer focused on DevOps, CI/CD, Docker, FastAPI, AWS, and databases, combining marketing expertise with scalable technical solutions.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/case.png" alt="">
              </div>
              <span class="url-text">https://erickperez.com › experience › jobs</span>
            </div>
            <router-link to="/experiencia" class="result-title">
              Experience - Employment and Professional Career Path
            </router-link>
            <p class="result-description">
              Work history focused on Coupon/Email Marketing and Quality Assurance, with over 5 years leading data-driven campaigns for international companies, recognized for precision and error-free execution.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/books.png" alt="">
              </div>
              <span class="url-text">https://erickperez.com › education › courses</span>
            </div>
            <router-link to="/educacion" class="result-title">
              Education – Courses and Continuing Education
            </router-link>
            <p class="result-description">
              Training in web design and Python development, currently pursuing a DevOps career path along with AWS Certified Cloud Practitioner studies, focused on building a strong foundation in cloud and modern development practices.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/skills.png" alt="">
              </div>
              <span class="url-text">https://erickperez.com › skills › technology Stack</span>
            </div>
            <router-link to="/conocimientos" class="result-title">
              Knowledge – Skills and Technology Stack
            </router-link>
            <p class="result-description">
              Proficiency in Python, FastAPI, SQL/NoSQL, Docker, CI/CD, and automation, with skills in QA, Email Marketing, and Artistic Design.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="../assets/projects.png" alt="">
              </div>
              <span class="url-text">https://erickperez.com › portfolio › projects</span>
            </div>
            <router-link to="/mis-proyectos" class="result-title">
              Projects – Software Development and Tools
            </router-link>
            <p class="result-description">
              Portfolio of personal projects, including the Omni-Portfolio Orchestrator, a Python-based data analysis application, and a DevOps Node.js CI project featuring a complete CI/CD automation pipeline with Docker and workflow automation for engineering processes.
            </p>
          </section>

          <section class="result-item">
            <div class="result-url-row">
              <div class="favicon-container is-image">
                <img src="https://www.google.com/s2/favicons?sz=64&domain=linkedin.com" alt="">
              </div>
              <span class="url-text">https://linkedin.com › in › erickperez</span>
            </div>
            <a href="https://www.linkedin.com/in/erick-perez88/" target="_blank" class="result-title">Erick Pérez - LinkedIn Profile</a>
            <p class="result-description">
              Connect with Erick on LinkedIn to explore a professional profile featuring recommendations, a growing network within the IT industry, and regular updates on projects, skills, and career progress. Stay up to date with his journey across Email Marketing, QA, and emerging DevOps and software development expertise.
            </p>
          </section>

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

        <aside class="knowledge-card">
          <div class="card-image-header profile-main-img">
            <img src="../assets/ME.jpg" alt="Erick Pérez" class="main-card-img">
          </div>
          <div class="card-body">
            <h2 class="profile-name">Erick Pérez</h2>
            <p class="profile-subtitle">Jr Python & FastAPI Developer | SQL/NoSQL & Git | QA & Email Marketing Specialist | DevOps Learner (Docker, CI/CD, AWS)</p>
            <div class="divider"></div>
            <p class="desc-text">
              Erick Pérez is a Costa Rican backend developer based in Cartago, with over five years of experience in the tech industry. He has held roles such as Data Fraud Analyst, CRM Administrator, QA Specialist, and Junior Front-End Developer, building a strong foundation in software development and systems analysis.

He is defined by his continuous evolution toward backend development, combining technical and analytical skills to create efficient, high-impact solutions.
            </p>
            <div class="divider"></div>
            <div class="profile-info">
              <p><strong>Birth:</strong> Feb 8, 1989 (37 years old), San Jose, Costa Rica</p>
              <p><strong>Degrees:</strong> Carrera Ing Dev-Ops (In-progress) | Aws Practicioner (In-progresss) | Técnico En Diseño De Páginas Web</p>
              <p><strong>Soft skills:</strong> Effective communication, teamwork, problem-solving, adaptability, and flexibility</p>
              <p><strong>Languages:</strong> Spanish (native) – English (intermediate)</p>
              <p><strong>Interests:</strong> Programming, technology, reading, tattooing, traveling</p>
              <p><strong>Favorite quote:</strong> "There’s always another perspective—and another way to do things better."</p>
            </div>
            
            <div class="divider"></div>
            
            <div class="social-profiles-container">
              <a href="https://github.com/ericksuper8000-source" target="_blank" class="social-icon-link">
                <img src="../assets/Github.webp" alt="Github" class="social-icon">
              </a>
              <a href="https://gitlab.com/ericksuper80" target="_blank" class="social-icon-link">
                <img src="../assets/Gitlab.webp" alt="Gitlab" class="social-icon">
              </a>
              <a href="https://www.linkedin.com/in/erick-perez88/" target="_blank" class="social-icon-link">
                <img src="../assets/linkedin.png" alt="Linkedin" class="social-icon">
              </a>
            </div>

            <div class="divider"></div>
            <div class="profile-info">
              <p><strong>Location:</strong> Cartago, Costa Rica</p>
              <p><strong>Role:</strong> Developer Junior / Python Artist</p>
            </div>
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<style scoped>
.google-wrapper { font-family: 'Roboto', sans-serif; color: #202124; background: white; min-height: 100vh; }
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

.mic-icon, .camera-icon {
  font-size: 24px;
  cursor: pointer;
  color: #4285f4;
}

.user-actions { margin-left: auto; display: flex; align-items: center; gap: 20px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.apps-icon { color: #5f6368; cursor: pointer; }

.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }

.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.7; margin-bottom: 25px; }
.result-item { margin-bottom: 30px; }
.result-url-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
.favicon-container { width: 26px; height: 26px; background-color: #f1f3f4; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
.favicon-container.is-image img { width: 16px; height: 16px; object-fit: contain; }
.favicon-me { width: 100% !important; height: 100% !important; object-fit: cover !important; }
.url-text { font-size: 14px; color: #202124; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.result-title { font-size: 20px; color: #1a0dab; text-decoration: none; display: block; margin-bottom: 4px; line-height: 1.3; }
.result-title:hover { text-decoration: underline; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

.pagination-wrapper { margin: 60px 0 40px 0; display: flex; justify-content: center; }
.pagination-content { display: inline-block; position: relative; }
.pagination-letters, .pagination-numbers { display: flex; justify-content: center; }
.pagination-letters span, .pagination-numbers .num { width: 26px; text-align: center; display: inline-block; }
.pagination-letters { font-family: 'Product Sans', Arial, sans-serif; font-size: 34px; font-weight: bold; margin-bottom: 0; }
.pagination-numbers { font-size: 13px; font-family: Arial, sans-serif; margin-top: -5px; }
.num.active { color: #202124; font-weight: bold; cursor: default; }
.num.link { color: #1a73e8; cursor: pointer; }
.next-text { position: absolute; right: -75px; top: 40px; color: #1a73e8; font-size: 13px; cursor: pointer; }

.knowledge-card { border: 1px solid #dadce0; border-radius: 8px; overflow: hidden; height: fit-content; }
.main-card-img { width: 100%; height: 300px; object-fit: cover; }
.card-body { padding: 20px; }
.profile-name { font-size: 28px; font-weight: 400; margin-bottom: 4px; }
.profile-subtitle { color: #70757a; font-size: 16px; }
.divider { height: 1px; background: #dadce0; margin: 15px 0; }
.profile-info p { font-size: 14px; margin-bottom: 8px; }

/* Estilos para los iconos sociales */
.social-profiles-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 5px 0;
}
.social-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.2s ease;
}
.social-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .results-list, .search-tabs { margin-left: 0; }
}
</style>