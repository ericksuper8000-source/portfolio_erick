<template>
  <div class="google-home-clean">
    <header class="home-header">
      <div class="nav-links left-nav">
        <router-link to="/sobre-erick" class="nav-link">Sobre Erick</router-link>
        <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
      </div>

      <div class="nav-links right-nav">
        <a href="https://linkedin.com/in/erick-perez" target="_blank" class="nav-link">LinkedIn</a>
        <a href="https://github.com/erick-perez" target="_blank" class="nav-link">GitHub</a>
        <span class="material-symbols-outlined apps-icon">apps</span>
        
        <router-link to="/sobre-erick" class="avatar-link">
          <img src="../assets/ME.jpg" class="avatar" alt="Erick Pérez" title="Perfil de Erick" />
        </router-link>
      </div>
    </header>

    <main class="main-content">
      <div class="logo-container">
        <span class="g-blue">E</span><span class="g-red">r</span><span class="g-yellow">i</span><span class="g-blue">c</span><span class="g-green-logo">k</span>
      </div>

      <div class="search-wrapper">
        <div class="search-bar">
          <span class="material-symbols-outlined search-icon">search</span>
          
          <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="handleSearch"
            placeholder="Buscar en Erick Google o escribir una URL"
          />

          <div class="search-tools">
            <div class="tool-icon">
              <svg viewBox="0 0 24 24"><path fill="#4285f4" d="m12 15c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3s-3 1.34-3 3v4c0 1.66 1.34 3 3 3z"></path><path fill="#34a853" d="m11 18.92v-2.04c-3.37-.21-6-3.01-6-6.38h2c0 2.76 2.24 5 5 5s5-2.24 5-5h2c0 3.37-2.63 6.17-6 6.38v2.04h-2z"></path></svg>
            </div>
            <div class="tool-icon">
              <svg viewBox="0 0 24 24"><path fill="#4285f4" d="m19.25 4h-2.12c-.22 0-.42-.11-.53-.3l-.84-1.38c-.34-.58-.97-.92-1.65-.92h-4.22c-.68 0-1.3.34-1.65.92l-.84 1.38c-.11.19-.31.3-.53.3h-2.12c-1.38 0-2.5 1.12-2.5 2.5v11c0 1.38 1.12 2.5 2.5 2.5h14.5c1.38 0 2.5-1.12 2.5-2.5v-11c0-1.38-1.12-2.5-2.5-2.5z"></path><path fill="#ea4335" d="m12 18c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"></path></svg>
            </div>
          </div>
        </div>

        <div class="button-group">
          <button @click="handleSearch">Buscar con Erick</button>
          <button @click="handleSearch">Voy a tener suerte</button>
        </div>
      </div>
    </main>

    <footer class="home-footer">
      <div class="footer-row">
        <span>Costa Rica</span>
      </div>
      <div class="footer-row links">
        <div class="f-left">
          <a href="#">Publicidad</a>
          <a href="#">Negocios</a>
        </div>
        <div class="f-right">
          <a href="#">Privacidad</a>
          <a href="#">Condiciones</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const handleSearch = () => {
  // Ahora manejamos la navegación a la página de proyectos
  router.push('/proyectos');
};
</script>

<style scoped>
.google-home-clean {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff !important;
  font-family: 'Roboto', Arial, sans-serif !important;
}

.home-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav-links { display: flex; align-items: center; gap: 15px; }
.nav-link { 
  text-decoration: none; 
  color: #3c4043 !important; 
  font-size: 13px;
  cursor: pointer;
}
.nav-link:hover { text-decoration: underline; }

.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; cursor: pointer; }
.apps-icon { color: #5f6368 !important; cursor: pointer; margin: 0 10px; }

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.logo-container {
  font-family: 'Product Sans', Arial, sans-serif !important;
  font-size: 90px;
  font-weight: 500;
  letter-spacing: -4px;
  margin-bottom: 30px;
  user-select: none;
}
.g-blue { color: #4285f4; } .g-red { color: #ea4335; } .g-yellow { color: #fbbc05; } .g-green-logo { color: #34a853; }

.search-wrapper {
  width: 100%;
  max-width: 584px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  border: 1px solid #dfe1e5 !important;
  border-radius: 24px;
  padding: 0 15px;
  background-color: #ffffff !important;
}

.search-bar:hover { box-shadow: 0 1px 6px rgba(32,33,36,0.28); }

.search-icon { color: #9aa0a6 !important; margin-right: 10px; }
.search-bar input {
  flex-grow: 1;
  border: none !important;
  outline: none !important;
  font-size: 16px !important;
  background: transparent !important;
  color: #202124 !important;
}

.search-bar input::placeholder { color: #9aa0a6 !important; }

.search-tools { display: flex; gap: 12px; }
.tool-icon { width: 24px; height: 24px; cursor: pointer; }

.button-group { margin-top: 30px; display: flex; gap: 12px; }
.button-group button {
  background-color: #f8f9fa !important;
  border: 1px solid #f8f9fa !important;
  border-radius: 4px;
  color: #3c4043 !important;
  font-size: 14px;
  padding: 0 16px;
  height: 36px;
  cursor: pointer;
}

.button-group button:hover {
  border: 1px solid #dadce0 !important;
  color: #202124 !important;
}

.home-footer {
  margin-top: auto;
  background-color: #f2f2f2 !important;
  color: #70757a;
}
.footer-row { padding: 15px 30px; border-bottom: 1px solid #dadce0; }
.footer-row.links { display: flex; justify-content: space-between; border: none; }
.footer-row a { text-decoration: none; color: #70757a !important; font-size: 14px; margin-right: 20px; }
</style>