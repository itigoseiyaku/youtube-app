import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => {
    return count.value * 2;
  });
  function increment(val?: number) {
    count.value += val ?? 1;
  }

  return { count, doubleCount, increment };
});
