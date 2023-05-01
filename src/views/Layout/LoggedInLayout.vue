<script setup lang="ts">
import AppBar from '@/views/Layout/AppBar.vue';
import NavigationDrawer from '@/views/Layout/NavigationDrawer.vue';
</script>

<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
