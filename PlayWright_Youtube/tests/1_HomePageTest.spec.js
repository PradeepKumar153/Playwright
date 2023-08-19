const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("page Title is: ", pageTitle);

  await expect(page).toHaveTitle("STORE");

  const pageurl = page.url();
  console.log("Page url is : " + pageurl);

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  await page.close();
});
