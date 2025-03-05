import { expect, test } from "@playwright/test";

const url = "http://front:3000"; // URL du service front

test("has title", async ({ page }) => {
  await page.goto(url); // Accéder à l'URL

  // Vérifier que le titre de la page contient "PulseForm"
  await expect(page).toHaveTitle(/PulseForm/);
});
