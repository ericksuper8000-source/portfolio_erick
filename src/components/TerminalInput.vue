<template>
  <div class="flex gap-2">
    <span class="text-terminal-green shrink-0 font-bold">erick@portfolio:~$</span>
    <input
      ref="inputRef"
      v-model="command"
      type="text"
      class="bg-transparent border-none outline-none text-terminal-text w-full font-mono focus:ring-0 p-0"
      autofocus
      @keydown.up.prevent="moveHistory(-1)"
      @keydown.down.prevent="moveHistory(1)"
      @keyup.enter="handleEnter"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['execute']);
const command = ref('');
const inputRef = ref(null);

// Lógica de historial local
const localHistory = ref([]);
const historyIndex = ref(-1);

const handleEnter = () => {
  const trimmedCommand = command.value.trim();
  if (trimmedCommand) {
    // Guardar en el historial local para las flechas
    localHistory.value.push(trimmedCommand);
    historyIndex.value = -1; // Resetear índice
    
    emit('execute', trimmedCommand);
    command.value = '';
  }
};

const moveHistory = (direction) => {
  if (localHistory.value.length === 0) return;

  if (historyIndex.value === -1 && direction === -1) {
    // Primera vez que presiona hacia arriba
    historyIndex.value = localHistory.value.length - 1;
  } else {
    const newIndex = historyIndex.value + direction;
    if (newIndex >= 0 && newIndex < localHistory.value.length) {
      historyIndex.value = newIndex;
    } else if (newIndex >= localHistory.value.length) {
      // Volver a línea vacía si baja más allá del último
      historyIndex.value = -1;
      command.value = '';
      return;
    }
  }

  if (historyIndex.value !== -1) {
    command.value = localHistory.value[historyIndex.value];
  }
};

onMounted(() => {
  inputRef.value?.focus();
});

// Exponer el inputRef para que HomeView pueda enfocarlo al hacer clic
defineExpose({ inputRef });
</script>