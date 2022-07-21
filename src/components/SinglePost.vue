<script setup>
import { computed } from 'vue';

const props = defineProps(['post']);

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + '....';
});
</script>

<template>
  <div class="post">
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
  </div>
</template>
