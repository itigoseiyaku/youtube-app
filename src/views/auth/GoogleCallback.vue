<script lang="ts" setup>
import { useGoogleAccessTokenStore } from '@/stores/auth/googleAccessToken';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import NoLoggedInLayoutCopy from '@/views/Layout/NoLoggedInLayout.vue';

const hashString = location.hash.replace(/^#/, '');
const params = new URLSearchParams(hashString);

const router = useRouter();
const googleAuthStore = useGoogleAccessTokenStore();

onMounted(async () => {
  await googleAuthStore.loginCallBack(new Map(params));

  if (googleAuthStore.isLogin) {
    router.replace({ name: 'home' });
  } else {
    alert('ログインに失敗しました。再ログインしてください');
    router.replace({ name: 'loginPage' });
  }
});
</script>

<template>
  <NoLoggedInLayoutCopy>
    <div class="d-flex align-center justify-center loading" style="width: 100%; height: 100%">
      <v-progress-circular indeterminate size="64" color="primary" />
    </div>
  </NoLoggedInLayoutCopy>
</template>

<style scoped>
.loading {
  background-color: rgb(var(--v-theme-on-surface), 0.32);
}
</style>
