<script lang="ts" setup>
import { useGoogleAccessTokenStore } from '@/stores/auth/googleAccessToken';

const authStore = useGoogleAccessTokenStore();

const onClickGoogleLogin = () => {
  authStore.loginWithGoogle();
};
</script>

<template>
  <v-container>
    <v-btn @click="onClickGoogleLogin">Login with Google</v-btn>
  </v-container>
</template>
