//const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //click om login button  - property
  //await page.locator("id=login2").click();
  //or
  await page.click("id=login2"); //using property

  //await page.locator("#loginusername").fill("Pradeep"); //using css selector
  //or
  await page.fill("#loginusername", "pradeep007");

  //provide password css
  await page.fill("input[id='loginpassword']", "pradeep@123");

  //Click on Login Button - xpath Locator
  await page.click("//button[normalize-space()='Log in']");

  //verify Logout link present or not
  const logout = await page.locator("//a[normalize-space()='Log out']");
  await expect(logout).toBeVisible();

  await page.close();
});
