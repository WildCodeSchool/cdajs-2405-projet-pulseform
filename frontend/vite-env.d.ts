/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_BACK: string;
}

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
