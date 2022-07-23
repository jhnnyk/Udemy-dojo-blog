<script setup>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import TagCloud from '../components/TagCloud.vue';

const { posts, error, load } = getPosts();
load();
</script>

<template>
  <main class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><LoadingSpinner /></div>
  </main>
</template>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
