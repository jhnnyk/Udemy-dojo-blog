<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import TagCloud from '../components/TagCloud.vue';

const { posts, error, load } = getPosts();
load();

const route = useRoute();

const filteredPosts = computed(() => {
  return posts.value.filter((post) => post.tags.includes(route.params.tag));
});
</script>

<template>
  <div class="tag">
    <h1>Tag: {{ route.params.tag }}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><LoadingSpinner /></div>
  </div>
</template>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
