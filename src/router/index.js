import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostDetails from '../views/PostDetails.vue';
import CreatePost from '../views/CreatePost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts/:id',
      name: 'PostDetails',
      component: PostDetails,
      props: true,
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost,
    },
  ],
});

export default router;
