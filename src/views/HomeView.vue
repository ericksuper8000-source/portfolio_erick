<template>
  <div class="home-wrapper">
    <nav class="top-nav">
      <div class="nav-side nav-left">
        <router-link to="/sobre-erick" class="nav-link">About Erick</router-link>
        <router-link to="/proyectos" class="nav-link">Latest Projects</router-link>
      </div>
      <div class="nav-side nav-right">
        <a href="https://github.com/erickperez" target="_blank" class="nav-link">Github</a>
        <a href="https://linkedin.com/in/erickperez" target="_blank" class="nav-link">Linkedin</a>
        <span class="material-symbols-outlined apps-icon">apps</span>
        <router-link to="/sobre-erick">
          <img src="../assets/ME.jpg" class="avatar" alt="Erick Pérez" />
        </router-link>
      </div>
    </nav>

    <main class="main-content">
      <div class="logo">
        <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green">k</span>
      </div>

      <div class="search-container">
        <div class="search-box">
          <span class="material-symbols-outlined search-icon-left">search</span>
          <input 
            type="text" 
            class="search-input" 
            @keyup.enter="$router.push('/proyectos')"
          />
          <div class="search-icons-group">
            <span class="material-symbols-outlined mic-icon">mic</span>
            <span class="material-symbols-outlined camera-icon">camera_alt</span>
          </div>
        </div>

        <div class="buttons-container">
          <button class="btn" @click="$router.push('/proyectos')">Erick Search</button>
          <button class="btn" @click="$router.push('/mis-proyectos')">I'm Feeling Lucky</button>
        </div>
      </div>

      <div class="lang-offered">
        Erick offered in: <a href="#">English (United States)</a>
      </div>
    </main>

    <footer class="home-footer">
      <div class="location">Costa Rica</div>
      <div class="footer-links">
        <div class="links-side">
          <router-link to="/sobre-erick">Who I am</router-link>
          <router-link to="/experiencia">Experience</router-link>
          <router-link to="/proyectos">Projects</router-link>
        </div>
        <div class="links-side">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Mantenemos tu estilo intacto, solo forzamos limpieza visual */
.home-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: white !important;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 6px 15px;
  height: 60px;
}

.nav-side {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  flex: 1;
}

.nav-right { justify-content: flex-end; }
.nav-left { justify-content: flex-start; }

.nav-link, a { 
  text-decoration: none; 
  color: #202124; 
}
.nav-link:hover { text-decoration: underline; }

.apps-icon { color: #5f6368; cursor: pointer; padding: 8px; border-radius: 50%; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; margin-left: 8px; cursor: pointer; }

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
}

.logo {
  font-size: 92px;
  font-weight: 500;
  margin-bottom: 28px;
  font-family: 'Product Sans', Arial, sans-serif;
  letter-spacing: -2px;
}
.g-blue { color: #4285f4; } .g-red { color: #ea4335; } .g-yellow { color: #fbbc05; } .g-green { color: #34a853; }

.search-container { 
  width: 100%; 
  max-width: 584px; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-box {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  padding: 0 14px;
  height: 46px;
  background: white;
}
.search-box:hover { box-shadow: 0 1px 6px rgba(32,33,36,0.28); border-color: transparent; }

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  color: #202124 !important; /* Texto negro */
}

.search-icon-left { color: #9aa0a6; font-size: 20px; }
.mic-icon, .camera-icon {
  font-size: 24px;
  cursor: pointer;
  color: #4285f4;
}

.buttons-container {
  margin-top: 28px;
  display: flex;
  gap: 12px;
}

.btn {
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  padding: 0 16px;
  height: 36px;
  font-size: 14px;
  cursor: pointer;
}

.lang-offered { font-size: 13px; margin-top: 25px; color: #4d5156; }
.lang-offered a { color: #1a0dab; text-decoration: none; margin-left: 5px; }

.home-footer { background: #f2f2f2; color: #70757a; font-size: 14px; margin-top: auto; }
.location { padding: 15px 30px; border-bottom: 1px solid #dadce0; }
.footer-links { 
  display: flex; 
  justify-content: space-between; 
  padding: 0 20px; 
}
.links-side { display: flex; padding: 15px 10px; }
.links-side a { text-decoration: none; color: #70757a; margin: 0 12px; }
</style>