import { ref, readonly } from 'vue';
import { defineStore } from 'pinia';

/** ナビゲーションドロワーの状態のみ扱うストア */
export const useNavigationDrawerStore = defineStore('navigationDrawer', () => {
  const isOpen = ref<boolean>(true);

  /** 現在と逆の状態に変更する */
  const change = () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen: readonly(isOpen), change };
});
