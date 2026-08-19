<template>
  <div class="pagination-wrapper">
    <div class="pagination-content">
      <div class="pagination-letters">
        <span class="g-blue">E</span>
        <span class="g-red">r</span>
        <span class="g-yellow">i</span>
        <span class="g-yellow">i</span>
        <span class="g-yellow">i</span>
        <span class="g-yellow">i</span>
        <span class="g-yellow">i</span>
        <span class="g-yellow">i</span>
        <span class="g-red">c</span>
        <span class="g-blue">k</span>
      </div>
      <div class="pagination-numbers">
        <span v-for="n in 10" :key="n" class="num" :class="{ active: n === active, link: n !== active }">{{ n }}</span>
      </div>
      <span class="next-text">Next</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  active: { type: Number, default: 1 },
});
</script>

<style scoped>
.pagination-wrapper { margin: 60px 0 40px 0; display: flex; justify-content: center; }
.pagination-content { display: inline-block; position: relative; }
.pagination-letters, .pagination-numbers { display: flex; justify-content: center; }
.pagination-letters span, .pagination-numbers .num { width: 26px; text-align: center; display: inline-block; }
.pagination-letters { font-family: 'Product Sans', Arial, sans-serif; font-size: 34px; font-weight: bold; }
.pagination-numbers { font-size: 13px; font-family: Arial, sans-serif; margin-top: -5px; }
.g-blue { color: #4285f4; } .g-red { color: #ea4335; } .g-yellow { color: #fbbc05; }
.num.active { color: #202124; font-weight: bold; cursor: default; }
.num.link { color: #1a73e8; cursor: pointer; }
.next-text { position: absolute; right: -75px; top: 40px; color: #1a73e8; font-size: 13px; cursor: pointer; white-space: nowrap; }

@media (max-width: 991px) {
  .next-text { position: static; display: block; text-align: center; margin-top: 10px; }
}
</style>