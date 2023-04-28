<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from '@/views/Layout/AppBar.vue';
import NavigationDrawer from '@/views/Layout/NavigationDrawer.vue';
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
