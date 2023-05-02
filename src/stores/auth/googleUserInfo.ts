import { ref, readonly } from 'vue';
import { defineStore } from 'pinia';
import useGoogleApiFetch from './googleApiFetch';

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

  const { data, error, execute, isFetching } = useGoogleApiFetch<UserInfoResponse>(
    '/oauth2/v2/userinfo',
    {
      immediate: false,
      refetch: false
    }
  )
    .get()
    .json();

  const fetchUserData = async (params: { force?: boolean }) => {
    if (isFetching.value) {
      return;
    }

    userInfo.value = null;

    if (!(params.force || !userInfo.value)) {
      return;
    }

    await execute();

    if (error.value || data.value == null) {
      return;
    }

    userInfo.value = data.value;
  };

  return {
    fetchUserData,
    userInfo: readonly(userInfo)
  };
});
