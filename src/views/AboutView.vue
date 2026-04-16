<template>
  <div class="google-wrapper">
    <header class="search-header">
      <div class="header-content">
        <router-link to="/" class="brand-logo">
          <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green">k</span>
        </router-link>
        
        <div class="search-box-container">
          <div class="search-box">
            <input type="text" value="Erick Pérez Programador Artista Tatuador" readonly />
            <div class="search-icons-group">
              <span class="material-symbols-outlined mic-icon">mic</span>
              <span class="material-symbols-outlined camera-icon">camera_alt</span>
              <span class="material-symbols-outlined search-icon-btn">search</span>
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
          <div class="tab active">Todo</div>
          <div class="tab">Arte</div>
          <div class="tab">Código</div>
          <div class="tab">Historia</div>
        </div>
      </nav>
    </header>

    <main class="results-container sobre-mi-container">
      <div class="content-grid">
        
        <section class="results-list history-section">
          <p class="results-stats">Aproximadamente 32 años de vida (0.02 segundos)</p>

          <div class="bio-snippet">
            <h1 class="main-title">Quién soy</h1>
            <p class="desc-text">
              Soy **Erick Pérez**, nacido el 02/04/1992 en Rosario, Santa Fe, Argentina. Soy un apasionado de la programación, el fútbol y el pádel. En el año 2018 decidí mudarme a España, pasando primero por Barcelona y luego por Sevilla, y tras varios años en el viejo continente, decidí volver a mi querida Rosario.
            </p>
          </div>

          <div class="bio-snippet">
            <h2 class="sub-title">Emprendedor y Autodidacta</h2>
            <p class="desc-text">
              Me defino como una persona emprendedora, autodidacta y dinámica, donde le gusta estar en constante movimiento buscando nuevos retos y desafíos. Durante mi vida pude concretar algunos proyectos que me permitieron ir adentrándome en las nuevas tecnologías y la programación, descubriendo así que lo que realmente me apasionaba era sentarme frente a la pantalla y crear código.
            </p>
          </div>

          <div class="bio-snippet">
            <h2 class="sub-title">Raíces Digitales (Adsense & Webs)</h2>
            <p class="desc-text">
              Desde los 15 años que estoy metido en el mundo de Internet, creando mis propias páginas web y blogs diseñados para trabajar con Google Adsense, modelo de negocio que me permitió trabajar de esta forma durante muchos años y dar mis primeros pasos en el mundo IT.
            </p>
          </div>

          <div class="bio-snippet">
            <h2 class="sub-title">Objetivo Profesional</h2>
            <p class="desc-text">
              Mi objetivo es consolidarme como un gran programador y seguir aprendiendo día a día para estar actualizado de las nuevas tendencias y tecnologías. Te invito a que sigas recorriendo mi CV para que puedas conocerme completamente.
            </p>
          </div>
        </section>

        <aside class="knowledge-card art-card">
          <div class="card-image-header art-gallery">
            <div class="gallery-grid">
              <img src="../assets/tatuaje-pikachu.jpeg" alt="Pikachu Erick" class="gallery-img" />
              <img src="../assets/tatuaje-enfermera.jpeg" alt="Lobo Erick" class="gallery-img" />
              <img src="../assets/tatuaje-demonio.jpeg" alt="Retrato Erick" class="gallery-img" />
              <img src="../assets/tatuaje-barba.jpeg" alt="Barba Erick" class="gallery-img" />
            </div>
            <span class="gallery-label">Prácticas en piel sintética</span>
          </div>
          
          <div class="card-body">
            <h2 class="profile-name">Erick Pérez</h2>
            <p class="profile-subtitle">Programador | Artista | Tatuador</p>
            <div class="divider"></div>
            
            <p class="desc-text artist-quote">
              "Programar y tatuar comparten la misma esencia: la precisión y la creación de algo perdurable. La lógica del código y la creatividad del arte son mi motor."
            </p>
            
            <div class="divider"></div>
            
            <div class="profile-info">
              <p><strong>Especialidad:</strong> Backend & Sombreado Realista.</p>
              <p><strong>Pasiones:</strong> Código limpio, Naturaleza, Tinta.</p>
              <p><strong>Ubicación:</strong> Rosario, Argentina.</p>
            </div>
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<script setup>
// Lógica de navegación si fuera necesaria
</script>

<style scoped>
.google-wrapper {
  font-family: 'Roboto', sans-serif;
  color: #202124;
  background: white;
  min-height: 100vh;
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
  padding: 0 14px 0 20px;
  height: 44px;
}
.search-box input { border: none; outline: none; flex-grow: 1; font-size: 16px; background: transparent; color: #202124; }
.search-icons-group { display: flex; align-items: center; gap: 12px; color: #70757a; }

.user-actions { margin-left: auto; display: flex; align-items: center; gap: 20px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }

.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }

/* CUERPO - AJUSTE DE ESPACIOS */
.sobre-mi-container { 
  padding: 40px 5% 20px 5% !important; /* Más espacio arriba */
}

.content-grid { 
  display: grid; 
  grid-template-columns: 1fr 380px; 
  gap: 60px; 
  max-width: 1250px; 
}

.results-stats { 
  color: #70757a; 
  font-size: 14px; 
  margin-left: 135px; 
  margin-bottom: 25px; /* Separa la línea de estadísticas del primer resultado */
}

.history-section { max-width: 652px; margin-left: 135px; }
.bio-snippet { margin-bottom: 35px; } /* Más aire entre cada "bloque" de historia */

.main-title { font-size: 28px; font-weight: 400; color: #202124; margin-bottom: 8px; }
.sub-title { font-size: 20px; font-weight: 400; color: #1a0dab; margin-bottom: 4px; cursor: pointer; }
.sub-title:hover { text-decoration: underline; }
.desc-text { font-size: 14px; line-height: 1.58; color: #4d5156; }

/* TARJETA DE ARTE */
.knowledge-card { border: 1px solid #dadce0; border-radius: 8px; overflow: hidden; height: fit-content; }
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

/* RESPONSIVO */
@media (max-width: 991px) {
  .content-grid { grid-template-columns: 1fr; }
  .history-section, .results-stats, .search-tabs { margin-left: 0; }
  .sobre-mi-container { padding-top: 20px !important; }
}
</style>