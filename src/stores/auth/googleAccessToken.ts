import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import { useGoogleUserInfo } from './googleUserInfo';
import { useStorage } from '@vueuse/core';

export const useGoogleAccessTokenStore = defineStore('auth/googleAccessToken', () => {
  const accessToken = useStorage('access_token', '', localStorage);

  const isLogin = ref<boolean>(false);

  /** GoogleにOAuth認証でログインする */
  const loginWithGoogle = () => {
    const loginUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

    const params = {
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URL,
      response_type: 'token',
      scope: import.meta.env.VITE_GOOGLE_SCOPE,
      prompt: 'select_account'
    };

    const query = new URLSearchParams(params);
    location.href = `${loginUrl}?${query.toString()}`;
  };

  /** ログアウトする */
  const logout = () => {
    isLogin.value = false;
    accessToken.value = null;
  };

  const loginCallBack = async (callbackParam: Map<string, string>) => {
    logout();

    const callBackAccessToken = callbackParam.get('access_token');

    if (!callBackAccessToken) {
      return;
    }

    accessToken.value = callBackAccessToken;

    await checkLogin();
  };

  /**
   * accessTokenの登録
   * @param accessToken
   * @returns true: 成功, false: 失敗
   */
  const checkLogin = async () => {
    // 取得できたかどうかで判断
    const googleUserInfoStore = useGoogleUserInfo();
    await googleUserInfoStore.fetchUserData({ force: true });

    if (googleUserInfoStore.userInfo) {
      isLogin.value = true;
    }
  };

  return {
    isLogin: readonly(isLogin),
    logout,
    loginWithGoogle,
    loginCallBack,
    checkLogin,
    accessToken: readonly(accessToken)
  };
});
