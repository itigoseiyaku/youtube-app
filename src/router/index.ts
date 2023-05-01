import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useGoogleAccessTokenStore } from '@/stores/auth/googleAccessToken';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'loginPage',
      component: () => import('@/views/auth/loginPage.vue'),
      meta: { requiredLogin: false }
    },
    {
      path: '/google/callback',
      name: 'googleCallback',
      component: () => import('@/views/auth/GoogleCallback.vue'),
      meta: { requiredLogin: false }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'home'
      }
    }
  ]
});

let alreadyRestore = false;
router.beforeEach(async (to, _) => {
  const googleAccessToken = useGoogleAccessTokenStore();
  // アクセストークンを復元する;
  if (!alreadyRestore) {
    alreadyRestore = true;
    await googleAccessToken.checkLogin();
  }

  if (to.meta.requiredLogin === false) {
    return true;
  }

  if (googleAccessToken.isLogin) {
    return true;
  }
  return { name: 'loginPage' };
});

export default router;
