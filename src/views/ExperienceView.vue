<template>
  <div class="google-wrapper">
    <header class="search-header">
      <div class="header-content">
        <router-link to="/" class="brand-logo">
          <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green">k</span>
        </router-link>
        
        <div class="search-box-container">
          <div class="search-box">
            <input type="text" value="Experiencia laboral de Erick Pérez" readonly />
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
          <div class="tab active">Experiencia</div>
          <div class="tab">Imágenes</div>
          <div class="tab">Vídeos</div>
          <div class="tab">Más</div>
        </div>
      </nav>
    </header>

    <main class="results-container">
      <div class="content-grid">
        
        <section class="results-list">
          <p class="results-stats">Cerca de 9 resultados (0.38 segundos)</p>

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
            <p class="profile-subtitle">Programador y Senior QA</p>
            <div class="divider"></div>
            <p class="desc-text">
              Erick cuenta con una sólida trayectoria internacional, habiendo liderado equipos de consultoría y gestión de proyectos en Argentina y España.
            </p>
            <div class="divider"></div>
            <div class="profile-info">
              <p><strong>Total experiencia:</strong> +13 años</p>
              <p><strong>Especialidad:</strong> Backend & Project Management</p>
              <p><strong>Ubicación actual:</strong> Rosario, Argentina</p>
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
    company: "Nanobytes",
    period: "nov. 2024 - ene. 2026 (1 año y 2 meses)",
    role: "Odoo Developer",
    description: "Mi camino como programador comienza aquí. Desde desarrollo de módulos hasta bug fixes, en Nanobytes soy parte del área de Desarrollo, donde damos soporte técnico a decenas de clientes día a día. (Ubicación: Granada, España)"
  },
  {
    company: "Factor Libre",
    period: "jun. 2022 - mar. 2024 (1 año y 10 meses)",
    role: "Project Manager - Odoo",
    description: "Consultoría a empresas y gestión de proyectos, coordinando con distintas áreas. Parte del área de 'Pedidos' desarrollando mejoras para el sector de Compra y Venta. (Ubicación: Madrid, España)"
  },
  {
    company: "GuadalTech",
    period: "sept. 2021 - jun. 2022 (10 meses)",
    role: "Project Business Analyst - Odoo",
    description: "Gestor de proyectos y Consultor, llevando a cabo más de 10 proyectos, desde el proceso comercial hasta formación y soporte post salida a producción. (Ubicación: Sevilla, España)"
  },
  {
    company: "Adhoc SA",
    period: "sept. 2019 - ago. 2021 (2 años)",
    role: "Consultant Team Leader - Odoo",
    description: "Líder del equipo de Consultores, responsable de que los proyectos se desarrollen en tiempo y forma, manteniendo reuniones estratégicas con clientes. (Ubicación: Rosario, Argentina)"
  },
  {
    company: "Busco Trabajo",
    period: "ago. 2012 - jul. 2021 (9 años)",
    role: "CEO - Founder",
    description: "Plataforma para la búsqueda y oferta laboral, conectando personas del mismo rubro a través de Internet para trabajar juntas. (Ubicación: Rosario, Argentina)"
  },
  {
    company: "Wedoo (Birtum)",
    period: "nov. 2018 - abr. 2019 (6 meses)",
    role: "Project Manager - Odoo",
    description: "Implantaciones completas, soporte funcional y técnico. Gestión de más de 10 proyectos tras emigrar a Barcelona. (Ubicación: Barcelona, España)"
  },
  {
    company: "Adhoc SA",
    period: "mar. 2014 - oct. 2018 (4 años y 8 meses)",
    role: "Project Business Analyst - Odoo",
    description: "De soporte a Consultor Senior, gestionando más de 50 implementaciones de principio a fin y capacitando en el ERP Odoo. (Ubicación: Rosario, Argentina)"
  },
  {
    company: "Manos a la Obra",
    period: "ago. 2013 - ene. 2015 (1 año y 6 meses)",
    role: "Community Manager",
    description: "Redacción de contenido, diseño del plan fotográfico y documental, y gestión de redes sociales (Facebook/Twitter). (Ubicación: Rosario, Argentina)"
  },
  {
    company: "Sersomedia",
    period: "ago. 2011 - ene. 2012 (6 meses)",
    role: "Community Manager",
    description: "Creación de contenido digital para diversas compañías, incluyendo revistas digitales y e-commerce de artículos para motos. (Ubicación: Rosario, Argentina)"
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
.search-box { display: flex; align-items: center; border: 1px solid #dfe1e5; border-radius: 24px; padding: 0 14px 0 20px; height: 44px; }
.search-box input { border: none; outline: none; flex-grow: 1; font-size: 16px; background: transparent; }

.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }
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
.result-description { font-size: 14px; line-height: 1.58; color: #4d5156; }

/* PAGINACIÓN COORDINADA */
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