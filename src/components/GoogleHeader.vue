<template>
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
            :value="inputQuery"
            @input="inputQuery = $event.target.value"
            :placeholder="placeholder"
            @keyup.enter="submitSearch"
          />
          <div class="search-icons-group">
            <span v-if="inputQuery" class="material-symbols-outlined clear-icon" @click="clearSearch">close</span>
            <span class="material-symbols-outlined mic-icon">mic</span>
            <span class="material-symbols-outlined camera-icon">camera_alt</span>
          </div>
        </div>
      </div>

      <div class="user-actions">
        <router-link to="/proyectos" class="apps-link" title="Sections">
          <span class="material-symbols-outlined apps-icon">apps</span>
        </router-link>
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
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  query: { type: String, default: '' },
  placeholder: { type: String, default: 'Search for Erick or enter text' },
});

const router = useRouter();
const inputQuery = ref(props.query);

watch(() => props.query, (val) => {
  inputQuery.value = val;
});

function submitSearch() {
  const q = inputQuery.value.trim();
  if (q) {
    router.push({ path: '/buscar', query: { q } });
  }
}

function clearSearch() {
  inputQuery.value = '';
}
</script>

<style scoped>
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
  min-width: 0;
}

.search-icons-group { display: flex; align-items: center; gap: 12px; }
.mic-icon, .camera-icon { font-size: 24px; cursor: pointer; color: #4285f4; }
.clear-icon { font-size: 18px; cursor: pointer; color: #5f6368; }

.user-actions { margin-left: auto; display: flex; align-items: center; gap: 20px; }
.apps-link { display: flex; align-items: center; }
.apps-icon { color: #5f6368; cursor: pointer; }
.avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }

.search-tabs { padding: 0 5%; margin-top: 20px; margin-left: 135px; }
.tabs-inner { display: flex; gap: 25px; color: #70757a; font-size: 14px; }
.tab.active { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 12px; }

@media (max-width: 991px) {
  .search-tabs { margin-left: 0; }
  .header-content { flex-wrap: wrap; justify-content: center; gap: 15px; }
  .brand-logo { font-size: 24px; }
  .search-box-container { max-width: 100%; }
}

@media (max-width: 600px) {
  .search-header { padding-top: 14px; }
  .header-content { padding: 0 12px; gap: 10px; row-gap: 12px; }
  .brand-logo { order: 1; font-size: 22px; }
  .user-actions { order: 2; margin-left: auto; gap: 12px; }
  .search-box-container { order: 3; flex-basis: 100%; max-width: 100%; }
  .search-box { height: 40px; }
  .avatar { width: 28px; height: 28px; }
  .search-tabs { margin-top: 10px; padding: 0 12px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .tabs-inner { gap: 18px; white-space: nowrap; }
}
</style>
