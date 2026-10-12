import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can navigate to the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
  });

  test("user can click the first venue", async ({ page }) => {
    await page.goto("/");
    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();
    await venues.first().click();
  });

  test("venue details page displays the venue details", async ({ page }) => {
    await page.goto("/");
    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();
    await venues.first().click();

    await expect(page.locator("h1")).toContainText(/Venue details/i);
  });
});
