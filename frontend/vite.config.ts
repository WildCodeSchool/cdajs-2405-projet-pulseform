import path from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

// Charger les variables d'environnement
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
  },
  server: {
    port: Number(process.env.VITE_PORT_FRONT),
    host: "0.0.0.0",
    proxy: {
      "/locales": `${process.env.VITE_URL_TRAD}`,
      "/graphql": `${process.env.VITE_URL_BACK}/graphql`,
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
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
console.log("New env :", process.env.VITE_PORT_FRONT);
