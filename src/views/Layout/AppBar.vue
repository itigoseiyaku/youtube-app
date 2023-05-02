<script setup lang="ts">
import { useNavigationDrawerStore } from '@/stores/layout/navigationDrawer';
import UserInfoMenu from '@/components/Header/UserInfoMenu.vue';
import { useGoogleAccessTokenStore } from '@/stores/auth/googleAccessToken';
import { useGoogleUserInfo } from '@/stores/auth/googleUserInfo';

const store = useNavigationDrawerStore();
const googleAccessTokenStore = useGoogleAccessTokenStore();
const googleUserInfo = useGoogleUserInfo();
</script>

<template>
  <v-app-bar title="Application">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="store.change" />
    </template>
    <template v-slot:append>
      <UserInfoMenu
        :userName="googleUserInfo.userInfo?.name ?? ''"
        :email="''"
        :icon="googleUserInfo.userInfo?.picture"
        @logout="googleAccessTokenStore.logout"
      />
    </template>
  </v-app-bar>
</template>
