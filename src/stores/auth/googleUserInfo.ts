import { ref, readonly } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';

interface UserInfo {
  family_name: string;
  name: string;
  picture: string;
  locale: string;
  given_name: string;
  id: string;
}

/**
 * Googleのユーザー情報取得APIのレスポンス
 */
interface UserInfoResponse {
  family_name: string;
  name: string;
  picture: string;
  locale: string;
  given_name: string;
  id: string;
}

export const useGoogleUserInfo = defineStore('auth/googleUserInfo', () => {
  const userInfo = ref<UserInfo | null>(null);

  const fetch = async (params: { access_token?: string; force?: boolean }) => {
    userInfo.value = null;

    if (!params.access_token) {
      return;
    }

    if (!(params.force || !userInfo.value)) {
      return;
    }

    const { data, error } = await useFetch<UserInfoResponse>(
      'https://www.googleapis.com/oauth2/v2/userinfo',
      {
        async beforeFetch({ options }) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${params.access_token}`
          };

          return {
            options
          };
        }
      }
    );
    if (error.value || data.value == null) {
      return;
    }

    userInfo.value = data.value;
  };

  return {
    fetch,
    userInfo: readonly(userInfo)
  };
});
