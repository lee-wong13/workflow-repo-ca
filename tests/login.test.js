import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    //go to the login page
    await page.goto("/login");

    //fill in the login form
    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page
      .locator("input[name='password']")
      .fill(process.env.TEST_USER_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();
    //assert that the user is redirected to the dashboard
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    //go to the login page
    await page.goto("/login");

    //fill in the login form with wrong password
    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page.locator("input[name='password']").fill("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();
    //assert that an error message is visible
    await expect(page.getByRole("alert")).toBeVisible();
  });
});
