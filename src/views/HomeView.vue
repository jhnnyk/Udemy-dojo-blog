<script setup>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

const posts = ref([]);
const error = ref(null);

const load = async () => {
  try {
    let data = await fetch('http://localhost:3000/posts');
    if (!data.ok) {
      throw Error('no data available');
    }
    posts.value = await data.json();
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

load();
</script>

<template>
  <main>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </main>
</template>
