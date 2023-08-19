const { test, expect } = require("@playwright/test");

test("Browser Context-Validating Error login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();

  //to get multiple title which are match----if you not give the wait it'll not display so
  //await page.waitForLoadState("networkidle");
  //or
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
