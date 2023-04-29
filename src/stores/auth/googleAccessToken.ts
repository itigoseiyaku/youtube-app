import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useGoogleUserInfo } from './googleUserInfo';

export const useGoogleAccessTokenStore = defineStore('auth/googleAccessToken', () => {
  const accessToken = ref<string | null>(null);

  const isLogin = computed<boolean>(() => !!accessToken.value);

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
    accessToken.value = null;
  };

  /**
   * accessTokenの登録
   * @param callbackParam callbackで得られたaccessToken
   * @returns true: 成功, false: 失敗
   */
  const setAccessToken = async (callbackParam: Map<string, string>) => {
    logout();

    const callBackAccessToken = callbackParam.get('access_token');
    if (!callBackAccessToken) {
      return;
    }
    const googleUserInfoStore = useGoogleUserInfo();

    // 取得できたかどうかで判断
    await googleUserInfoStore.fetch({ access_token: callBackAccessToken, force: true });
    if (googleUserInfoStore.userInfo) {
      accessToken.value = callBackAccessToken;
    }
  };

  return {
    isLogin,
    logout,
    loginWithGoogle,
    setAccessToken
  };
});
