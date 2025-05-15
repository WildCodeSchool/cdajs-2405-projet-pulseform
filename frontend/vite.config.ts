import path from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import sass from "sass";
import { defineConfig } from "vite";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      reporter: ["text", "html"],
    },
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "\\.scss$": path.resolve(__dirname, "__mocks__/styleMock.ts"),
    },
  },
  server: {
    port: Number(process.env.VITE_PORT_FRONT),
    host: "0.0.0.0",
    proxy: {
      "/locales": `${process.env.VITE_TRANSLATION_SERVER_URL}:${process.env.VITE_PORT_TRAD}`,
      "/graphql": {
        target: process.env.VITE_URL_BACK,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, ""),
      },
    },
    allowedHosts: [
      `${process.env.VITE_SERVER_URL_DEV}`,
      `${process.env.VITE_SERVER_URL_DEV_APOLLO}`,
      `${process.env.VITE_SERVER_URL_STAGING}`,
      `${process.env.VITE_SERVER_URL_STAGING_APOLLO}`,
      `${process.env.VITE_SERVER_URL_PRODUCTION}`,
      `${process.env.VITE_SERVER_URL_PRODUCTION_APOLLO}`,
    ],
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@graphql": path.resolve(__dirname, "src/graphql/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@tests": path.resolve(__dirname, "src/tests/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@use "sass:color";`,
      },
    },
  },
});
