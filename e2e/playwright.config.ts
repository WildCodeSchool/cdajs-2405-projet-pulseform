import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Répertoire des tests
  timeout: 30 * 1000, // Timeout global
  expect: {
    timeout: 5000, // Timeout pour les assertions
  },
  fullyParallel: true, // Exécution parallèle des tests
  retries: 2, // Nombre de tentatives en cas d'échec
  workers: process.env.CI ? 1 : undefined, // Nombre de workers
  reporter: "html", // Rapport au format HTML
  use: {
    actionTimeout: 0, // Délai d'attente pour les actions
    trace: "on-first-retry", // Activer les traces pour les retries
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
