<script setup>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';

const { posts, error, load } = getPosts();
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
