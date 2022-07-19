<script setup>
const name = 'john';
const age = 45;

const handleClick = () => {
  console.log('you clicked me');
};
</script>

<template>
  <main>
    home
    <p>my name is {{ name }} and my age is: {{ age }}</p>
    <button @click="handleClick">click me</button>
  </main>
</template>
