const { test, expect } = require("@playwright/test");

test("Popup validations", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // await page.goto("http://google.com");
  // await page.goBack();
  // await page.goForward();

  //Validating Hide and show button
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();

  //To handle Popup button
  //page.on("dialog", (dialog) => dialog.dismiss()); //to cancell
  page.on("dialog", (dialog) => dialog.accept()); //to accept ok button
  await page.locator("#confirmbtn").click();

  //To handle Hover
  await page.locator("#mousehover").hover();

  //to handle frames
  const framesPage = page.frameLocator("#courses-iframe");
  await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  const textcheck = await framesPage.locator(".text h2").textContent();
  console.log(textcheck.split(" ")[1]);
});

test.only("Screenshot and Visual comparision", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#displayed-text").screenshot({ path: "partialScreen.png" });
  await page.locator("#hide-textbox").click();
  await page.screenshot({ path: "screenshot.png" });
  await expect(page.locator("#displayed-text")).toBeHidden();
});

test("Visual", async ({ page }) => {
  await page.goto("https://www.rediff.com/");
  expect(await page.screenshot()).toMatchSnapshot("landing.png");
});
