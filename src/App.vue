<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink></v-navigation-drawer
    >
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>
