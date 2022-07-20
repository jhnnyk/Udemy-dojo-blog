<script setup>
import { computed } from 'vue';

const props = defineProps(['post']);

const snippet = computed(() => {
  return props.post.body.substring(0, 50) + '....';
});
</script>

<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>
