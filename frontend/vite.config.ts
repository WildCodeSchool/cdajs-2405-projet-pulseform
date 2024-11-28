import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // add jsdom to vite
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      reporter: ["text", "html"],
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      "/locales": "http://translation:8051",
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@scss": path.resolve(__dirname, "src/scss"),
    },
  },
});
