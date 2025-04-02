import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // babel({
    //   babelConfig: { plugin: ["@babel/plugin-proposal-decorators"] },
    // }),
  ],
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
    // allowedHosts: ["052024-jaune-4.wns.wilders.dev"],
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@graphql": path.resolve(__dirname, "src/graphql/"),
    },
  },
});
