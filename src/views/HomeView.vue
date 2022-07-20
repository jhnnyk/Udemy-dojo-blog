<script setup>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

const posts = ref([
  {
    title: 'welcome to the blog',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, praesentium! Pariatur itaque, voluptatem velit, excepturi accusantium adipisci perspiciatis voluptates aperiam odio, nam vel ad sapiente asperiores. Voluptas, maiores. Distinctio, architecto!',
    id: 1,
  },
  { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
]);
</script>

<template>
  <main>
    <h1>Home</h1>
    <PostList :posts="posts" />
  </main>
</template>

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, praesentium!
Pariatur itaque, voluptatem velit, excepturi accusantium adipisci perspiciatis
voluptates aperiam odio, nam vel ad sapiente asperiores. Voluptas, maiores.
Distinctio, architecto!
