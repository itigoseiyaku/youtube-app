import { setActivePinia, createPinia } from 'pinia';
import { useNavigationDrawerStore } from './navigationDrawer';
import { beforeEach, describe, expect, test } from 'vitest';

describe('useNavigationDrawerStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('isOpenの初期値がtrueであること', () => {
    const state = useNavigationDrawerStore();
    expect(state.isOpen).toBe(true);
  });
  test('changeを実行するとisOpenがfalseとなること', () => {
    const state = useNavigationDrawerStore();
    state.change();
    expect(state.isOpen).toBe(false);
  });
});
