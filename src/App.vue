<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from '@/views/Layout/AppBar.vue';
import NavigationDrawer from '@/views/Layout/NavigationDrawer.vue';
</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>
