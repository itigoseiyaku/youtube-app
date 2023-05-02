<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon?: string;
    userName: string;
    email: string;
  }>(),
  {}
);
const emit = defineEmits<{
  (e: 'logout'): void;
}>();
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props: attr }">
      <v-btn v-bind="attr" class="d-flex align-center" size="48" variant="text">
        <v-icon size="48">
          <img class="user-icon" :src="props.icon" referrerpolicy="no-referrer" />
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item :title="props.userName" :subtitle="props.email">
        <template #prepend>
          <v-list-item-media start>
            <v-icon size="32">
              <img class="user-icon" :src="props.icon" referrerpolicy="no-referrer" />
            </v-icon>
          </v-list-item-media>
        </template>
      </v-list-item>
      <v-list-item title="ログアウト" @click="emit('logout')" />
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped>
.user-icon {
  height: 100%;
  width: 100%;
}
</style>
