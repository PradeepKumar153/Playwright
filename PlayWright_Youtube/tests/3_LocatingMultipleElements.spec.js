const { test, expect } = require("@playwright/test");

test("LocateMultipleElements", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //   const links = await page.$$("a");
  //   for (const link of links) {
  //     const linktext = await link.textContent();
  //     console.log(linktext);
  //   }

  //It will wait to load home page
  await page.waitForSelector("//div[@id='tbodyid']//h4/a");

  //Locate all the products displayed on home page
  const products = await page.$$("//div[@id='tbodyid']//h4/a");
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }

  //for particular title
});
