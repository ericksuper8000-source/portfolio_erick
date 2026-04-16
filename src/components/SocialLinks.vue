<template>
  <div class="flex flex-col gap-3 mt-2 mb-4">
    <a 
      v-for="link in socialLinks" 
      :key="link.name" 
      :href="link.url" 
      target="_blank"
      class="flex items-center gap-3 text-terminal-text hover:text-terminal-green transition-colors w-fit"
    >
      <i :class="[link.icon, 'w-5']"></i>
      <span class="text-sm tracking-wide">{{ link.name }}</span>
    </a>
  </div>
</template>

<script setup>
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/erickperez', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/erickperez', icon: 'fab fa-linkedin' },
  { name: 'Email', url: 'mailto:tu-correo@ejemplo.com', icon: 'fas fa-envelope' }
];
</script>