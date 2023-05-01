<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import LoggedInLayout from '@/views/Layout/LoggedInLayout.vue';
</script>

<template>
  <LoggedInLayout>
    <HelloWorld msg="HomePage" />
  </LoggedInLayout>
</template>
