<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from '@/components/Layout/AppBar.vue';
import NavigationDrawer from '@/components/Layout/NavigationDrawer.vue';
</script>

<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
