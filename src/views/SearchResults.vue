<template>
  <div class="bg-white min-h-screen text-gray-800 font-sans">
    <header class="p-6 border-b border-gray-200 flex items-center gap-8">
      <div class="text-2xl font-bold">
        <span class="text-blue-500">G</span><span class="text-red-500">o</span><span class="text-yellow-500">o</span><span class="text-blue-500">g</span><span class="text-green-500">l</span><span class="text-red-500">e</span>
      </div>
      <div class="flex-1 max-w-2xl relative">
        <input type="text" class="w-full border border-gray-200 rounded-full py-2 px-5 shadow-sm focus:shadow-md outline-none" value="Erick Perez">
      </div>
    </header>

    <nav class="px-36 border-b border-gray-200 text-sm text-gray-500 flex gap-6 py-3">
      <button class="text-blue-600 border-b-2 border-blue-600 pb-3 font-medium">Todo</button>
      <button class="hover:text-blue-600">Experiencia</button>
      <button class="hover:text-blue-600">Educación</button>
      <button class="hover:text-blue-600">Proyectos</button>
    </nav>

    <main class="px-36 py-8 flex gap-12">
      <section class="w-2/3">
        <div v-for="item in results" :key="item.title" class="mb-8 max-w-xl">
          <p class="text-xs text-gray-600 mb-1">{{ item.url }}</p>
          <a href="#" class="text-xl text-blue-800 hover:underline decoration-blue-800">{{ item.title }}</a>
          <p class="text-sm text-gray-700 mt-2">{{ item.description }}</p>
        </div>
      </section>

      <aside class="w-1/3 border border-gray-200 rounded-xl p-4 shadow-sm h-fit">
        <img src="tu-foto.jpg" class="w-full h-48 object-cover rounded-lg mb-4">
        <h2 class="text-2xl">Erick</h2>
        <p class="text-gray-500 mb-4">Senior Programmer & DevOps</p>
        <hr class="mb-4">
        <div class="text-sm space-y-3">
          <p><strong>Nacimiento:</strong> San José, Costa Rica</p>
          <p><strong>Experiencia:</strong> +10 años en IT</p>
          <p><strong>Habilidades:</strong> Vue, Docker, Python, FastAPI</p>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
const results = [
  {
    title: "Quién soy - Erick Perez",
    url: "https://www.erickperez.dev",
    description: "Te cuento brevemente quién soy y cuáles son mis intereses principales en el mundo IT..."
  },
  {
    title: "Experiencia - Empleos",
    url: "https://www.erickperez.dev/experiencia",
    description: "Conoce mi trayectoria trabajando con empresas de Estados Unidos y mi enfoque en calidad..."
  }
];
</script>