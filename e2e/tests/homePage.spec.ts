import { expect, test } from "@playwright/test";

const url = "https://staging.052024-jaune-4.wns.wilders.dev/"; // URL du staging
test("has title", async ({ page }) => {
  await page.goto(url); // Accéder à l'URL

  // Vérifier que le titre de la page contient "PulseForm"
  await expect(page).toHaveTitle(/PulseForm/);
});
