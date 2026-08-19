<template>
  <aside class="knowledge-card">
    <div class="card-image-header profile-main-img">
      <img :src="avatar" alt="Erick Pérez" class="main-card-img" />
    </div>
    <div class="card-body">
      <h2 class="profile-name">Erick Pérez</h2>
      <p class="profile-subtitle">{{ subtitle }}</p>
      <div class="divider"></div>

      <slot />

      <div class="divider"></div>
      <div class="profile-info">
        <p v-for="fact in facts" :key="fact.label">
          <strong>{{ fact.label }}:</strong> {{ fact.value }}
        </p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import avatarImg from '../assets/ME.jpg';

defineProps({
  subtitle: { type: String, default: 'QA & Automation Analyst | Backend (FastAPI) & DevOps (in transition) | AI-Assisted Engineering' },
  facts: { type: Array, default: () => [] },
});

const avatar = avatarImg;
</script>

<style scoped>
.knowledge-card { border: 1px solid #dadce0; border-radius: 8px; overflow: hidden; height: fit-content; }
.main-card-img { width: 100%; height: 300px; object-fit: cover; }
.card-body { padding: 20px; }
.profile-name { font-size: 28px; font-weight: 400; margin-bottom: 4px; }
.profile-subtitle { color: #70757a; font-size: 16px; }
.divider { height: 1px; background: #dadce0; margin: 15px 0; }
.profile-info p { font-size: 14px; margin-bottom: 8px; }
.profile-info p:last-child { margin-bottom: 0; }
</style>
