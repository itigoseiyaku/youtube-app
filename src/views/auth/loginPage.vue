<script lang="ts" setup>
import { useGoogleAccessTokenStore } from '@/stores/auth/googleAccessToken';
import NoLoggedInLayoutCopy from '@/views/Layout/NoLoggedInLayout.vue';

const authStore = useGoogleAccessTokenStore();

const onClickGoogleLogin = () => {
  authStore.loginWithGoogle();
};
</script>

<template>
  <NoLoggedInLayoutCopy>
    <v-btn @click="onClickGoogleLogin">Login with Google</v-btn>
  </NoLoggedInLayoutCopy>
</template>
