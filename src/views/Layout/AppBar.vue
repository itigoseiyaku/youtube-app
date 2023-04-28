<script setup lang="ts">
import { useNavigationDrawerStore } from '@/stores/navigationDrawer';

const store = useNavigationDrawerStore();
</script>

<template>
  <v-app-bar title="Application">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="store.change" />
    </template>
  </v-app-bar>
</template>
