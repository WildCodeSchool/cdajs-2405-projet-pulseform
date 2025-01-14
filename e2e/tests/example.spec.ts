import { expect, test } from "@playwright/test";

const url = "http://front:3000";
test("has title", async ({ page }) => {
  await page.goto(url);   // Go to http://front:3000/ and not localhost (voir service front dans docker-compose.e2e.yml)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PulseForm/);
});
