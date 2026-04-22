import { test, expect } from "@playwright/test";

test("main anchors are reachable", async ({ page }) => {
  await page.goto("/");

  await page.click('a[href="#projects"]');
  await expect(page.locator("#projects")).toBeVisible();

  await page.click('a[href="#awards"]');
  await expect(page.locator("#awards")).toBeVisible();
});
