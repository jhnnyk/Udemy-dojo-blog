<script setup>
import { ref } from 'vue';

const p = ref(null);

const name = ref('john');
const age = ref(46);

const handleClick = () => {
  name.value = 'luigi';
};
</script>

<template>
  <main>
    home
    <p ref="p">my name is {{ name }} and my age is: {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add to age</button>
    <input type="text" v-model="name" />
  </main>
</template>
