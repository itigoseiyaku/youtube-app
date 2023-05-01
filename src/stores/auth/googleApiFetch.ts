import { createFetch } from '@vueuse/core';
import { useGoogleAccessTokenStore } from './googleAccessToken';

const useGoogleApiFetch = createFetch({
  baseUrl: 'https://www.googleapis.com',
  combination: 'chain',
  options: {
    async beforeFetch({ options, cancel }) {
      const googleAccessTokenStore = useGoogleAccessTokenStore();
      const accessToken = googleAccessTokenStore.accessToken;
      if (!accessToken) {
        cancel();
        return;
      }
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`
      };

      return {
        options
      };
    }
  }
});

export default useGoogleApiFetch;
