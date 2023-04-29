/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // その他の環境変数...
  VITE_GOOGLE_CLIENT_ID: string;
  VITE_GOOGLE_REDIRECT_URL: string;
  VITE_GOOGLE_SCOPE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
