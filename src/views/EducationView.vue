<template>
  <div class="google-wrapper">
    <header class="search-header">
      <div class="header-content">
        <router-link to="/" class="brand-logo">
          <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green">k</span>
        </router-link>
        
        <div class="search-box-container">
          <div class="search-box">
            <input type="text" value="Educación y Formación de Erick Pérez" readonly />
            <div class="search-icons-group">
              <span class="material-symbols-outlined mic-icon">mic</span>
              <span class="material-symbols-outlined camera-icon">camera_alt</span>
              <span class="material-symbols-outlined search-icon-btn">search</span>
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
          <div class="tab">Todo</div>
          <div class="tab">Experiencia</div>
          <div class="tab active">Educación</div>
          <div class="tab">Imágenes</div>
          <div class="tab">Más</div>
        </div>
      </nav>
    </header>

    <main class="results-container">
      <div class="content-grid">
        
        <section class="results-list">
          <p class="results-stats">Cerca de 6 resultados (0.35 segundos)</p>

          <section class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">AWS Training</span>
                <span class="url-path"> › certification › cloud-practitioner</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <h3 class="result-title">AWS Certified Cloud Practitioner</h3>
            <p class="result-description">
              Preparación activa y estudio de los fundamentos de la nube de Amazon Web Services, cubriendo conceptos básicos de infraestructura, seguridad y servicios principales.
            </p>
          </section>

          <section class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">Erick Pérez</span>
                <span class="url-path"> › estudios › devops-engineering</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <h3 class="result-title">Arquitectura DevOps y Administración Linux</h3>
            <p class="result-description">
              Especialización en administración de sistemas Debian-based, despliegue de contenedores con Docker y automatización de flujos de trabajo mediante CI/CD.
            </p>
          </section>

          <section class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">Desarrollo Backend</span>
                <span class="url-path"> › lenguajes › python-fastapi</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <h3 class="result-title">Desarrollo Web Avanzado con Python y FastAPI</h3>
            <p class="result-description">
              Formación continua en creación de APIs de alto rendimiento, gestión de bases de datos SQL/NoSQL y aplicación de mejores prácticas en código limpio (Clean Code).
            </p>
          </section>

          <section class="result-item">
            <div class="result-header">
              <div class="result-url-area">
                <span class="url-domain">Cheetah Digital</span>
                <span class="url-path"> › training › qa-automation</span>
              </div>
              <span class="material-symbols-outlined more-icon">more_vert</span>
            </div>
            <h3 class="result-title">Especialización en Quality Assurance y Email Marketing</h3>
            <p class="result-description">
              Capacitación avanzada en metodologías de prueba de software y gestión técnica de campañas de marketing digital a gran escala.
            </p>
          </section>

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
              <span class="next-text">Siguiente</span>
            </div>
          </div>
        </section>

        <aside class="knowledge-card">
          <div class="card-image-header profile-main-img">
            <img src="../assets/ME.jpg" alt="Erick Pérez" class="main-card-img">
          </div>
          <div class="card-body">
            <h2 class="profile-name">Erick Pérez</h2>
            <p class="profile-subtitle">Formación y Aprendizaje</p>
            <div class="divider"></div>
            <p class="desc-text">
              Un enfoque constante en el aprendizaje autodidacta y la especialización técnica en tecnologías de nube y desarrollo backend.
            </p>
            <div class="divider"></div>
            <div class="profile-info">
              <p><strong>Enfoque actual:</strong> Cloud Computing (AWS)</p>
              <p><strong>Stack:</strong> Python, DevOps, Linux</p>
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
.search-box { display: flex; align-items: center; border: 1px solid #dfe1e5; border-radius: 24px; padding: 0 14px 0 20px; height: 44px; }
.search-box input { border: none; outline: none; flex-grow: 1; font-size: 16px; background: transparent; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }
.results-container { padding: 30px 5%; }
.content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 60px; max-width: 1250px; }
.results-list { margin-left: 135px; max-width: 652px; }
.results-stats { color: #70757a; font-size: 13px; opacity: 0.85; margin-bottom: 25px; }
.result-item { margin-bottom: 30px; }
.result-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
.result-url-area { font-size: 14px; color: #202124; }
.url-domain { font-weight: 400; }
.url-path { color: #4d5156; }
.more-icon { color: #70757a; font-size: 18px; }
.result-title { font-size: 20px; color: #1a0dab; font-weight: 400; margin: 0 0 4px 0; }
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }
.pagination-wrapper { margin: 60px 0; display: flex; justify-content: center; }
.pagination-content { display: inline-block; position: relative; }
.pagination-letters { font-family: 'Product Sans', sans-serif; font-size: 34px; font-weight: bold; display: flex; justify-content: center; margin-bottom: 2px; }
.pagination-letters span { width: 26px; text-align: center; }
.pagination-numbers { display: flex; justify-content: center; font-size: 13px; }
.pagination-numbers .num { width: 26px; text-align: center; }
.num.link { color: #1a73e8; cursor: pointer; }
.next-text { position: absolute; right: -75px; top: 40px; color: #1a73e8; font-size: 13px; cursor: pointer; }
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