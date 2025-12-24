import { test, expect } from "@playwright/test";

test("create purchase request", async ({ page }) => {
  await page.goto("/request");
  await page.getByPlaceholder("https://amazon.com/...").fill("https://amazon.com/item");
  await page.getByLabel("Item title").fill("Wireless headphones");
  await page.getByLabel("USD price").fill("120");
  await page.getByLabel("Quantity").fill("1");
  await page.getByRole("button", { name: "Submit request" }).click();
  await expect(
    page.getByText("Request submitted. We will send an ETB quote within 24 hours.")
  ).toBeVisible();
});
