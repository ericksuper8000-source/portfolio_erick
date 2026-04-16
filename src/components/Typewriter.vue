<template>
  <span :class="color">{{ displayedText }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  text: String,
  speed: { type: Number, default: 20 },
  color: { type: String, default: 'text-terminal-text' }
});

const displayedText = ref('');

onMounted(() => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < props.text.length) {
      displayedText.value += props.text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, props.speed);
});
</script>