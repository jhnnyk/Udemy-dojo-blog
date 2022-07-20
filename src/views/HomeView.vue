<script setup>
import { ref, computed } from 'vue';

const search = ref('');
const names = ref([
  'mario',
  'yoshi',
  'luigi',
  'toad',
  'bowser',
  'koopa',
  'peach',
]);

const matchingNames = computed(() => {
  return names.value.filter((name) => name.includes(search.value));
});
</script>

<template>
  <main>
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term: {{ search }}</p>
    <ul>
      <li v-for="name in matchingNames" :key="name">{{ name }}</li>
    </ul>
  </main>
</template>
