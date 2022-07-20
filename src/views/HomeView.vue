<script setup>
import { ref } from 'vue';

const p = ref(null);

const name = 'john';
const age = 45;

const handleClick = () => {
  console.log(p, p.value);
  p.value.classList.add('test');
  p.value.textContent = 'hello, skater';
};
</script>

<template>
  <main>
    home
    <p ref="p">my name is {{ name }} and my age is: {{ age }}</p>
    <button @click="handleClick">click me</button>
  </main>
</template>
