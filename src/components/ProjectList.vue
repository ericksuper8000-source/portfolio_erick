<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
    <div 
      v-for="project in projects" 
      :key="project.id"
      class="border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-all hover:opacity-90 group"
    >
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-terminal-green font-bold">{{ project.name }}</h3>
        <a :href="project.link" target="_blank" class="text-gray-500 hover:text-white">
          <i class="fas fa-external-link-alt text-xs"></i>
        </a>
      </div>
      <p class="text-xs text-gray-400 mb-3">{{ project.description }}</p>
      <div class="flex gap-2">
        <span 
          v-for="tech in project.tech" 
          :key="tech"
          class="text-[10px] px-2 py-1 bg-white/10 rounded-md text-gray-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: Array
});
</script>