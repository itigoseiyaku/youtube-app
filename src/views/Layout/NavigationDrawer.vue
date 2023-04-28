<script setup lang="ts">
import { useNavigationDrawerStore } from '@/stores/navigationDrawer';

const store = useNavigationDrawerStore();
</script>

<template>
  <v-navigation-drawer :model-value="store.isOpen" permanent>
    <v-list nav>
      <v-list-item :to="{ name: 'home' }" prepend-icon="mdi-home" title="home"></v-list-item>
      <v-list-item
        :to="{ name: 'about' }"
        prepend-icon="mdi-view-dashboard"
        title="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
