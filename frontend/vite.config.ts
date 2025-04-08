import path from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

// Charger les variables d'environnement
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    // babel({
    //   babelConfig: { plugin: ["@babel/plugin-proposal-decorators"] },
    // }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      reporter: ["text", "html"],
    },
  },
  server: {
    port: Number(process.env.VITE_PORT_FRONT),
    host: "0.0.0.0",
    proxy: {
      "/locales": `${process.env.VITE_TRANSLATION_SERVER_URL}:${process.env.VITE_PORT_TRAD}`,
      "/graphql": `${process.env.VITE_SERVER_URL}:${process.env.VITE_PORT_BACK}/graphql`,
    },
    allowedHosts: [
      "052024-jaune-4.wns.wilders.dev",
      "staging.052024-jaune-4.wns.wilders.dev",
      "staging-apollo.052024-jaune-4.wns.wilders.dev",
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
    },
  },
});
