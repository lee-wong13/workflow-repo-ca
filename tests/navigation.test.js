import { test, expect } from "@playwright/test";

test("user can open venue details from the home page", async ({ page }) => {
  const venue = {
    id: "test-venue",
    name: "Test venue",
    media: ["https://example.com/venue.jpg"],
  };

  await page.route("**/venues", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([venue]),
    }),
  );
  await page.route("**/venues/test-venue", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(venue),
    }),
  );

  await page.goto("/");

  const firstVenue = page.locator("#venue-container a").first();
  await expect(firstVenue).toBeVisible();
  await firstVenue.click();

  await expect(page).toHaveURL(/\/venue\/\?id=/);
  await expect(
    page.getByRole("heading", { name: /Venue details/i }),
  ).toBeVisible();
});
