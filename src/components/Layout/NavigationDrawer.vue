<template>
  <v-navigation-drawer permanent>
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
