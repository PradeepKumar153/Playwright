const { test, expect } = require("@playwright/test");

//when you have multiple test you can give only to run particular test
// test.only("Playwright test", async ({ page }) => {
//   await page.goto("https://www.google.com");
// });

test("PlayWright test", async ({ browser }) => {
  const userName = page.locator("#username");
  const passWord = page.locator("//input[@id='password']");
  const signIn = page.locator("#signInBtn");
  const cardTitle = page.locator(".card-body a");

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const title = await page.title();
  console.log(title);

  //css,xpath
  // await page.fill("username", "rahulshetty");
  // or
  //await page.locator("#username").fill("rahulshetty");
  //or
  //await userName.fill("rahulshetty")
  await userName.type("rahulshetty");
  await passWord.type("learning");
  await signIn.click();

  //wait untill this locator shown up page
  const error = await page.locator("[style*='block']").textContent();
  console.log(error);

  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //Now we'll give correct username and password
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await passWord.fill("");
  await passWord.fill("learning");

  //race condition
  await Promise.all([page.waitForNavigation(), signIn.click()]);

  /* const phonetitle = await page.locator("//a[normalize-space()='iphone X']").textContent();
  console.log(phonetitle); */

  //if multiple matching element in the page you can use this
  //if you ask one element it'll will return
  console.log(await cardTitle.first().textContent());
  console.log(await cardTitle.nth(1).textContent());

  //To grab all the product title
  //it will give not display anything but test is pass...if you us above express then only it'll give result
  const allTitles = await cardTitle.allTextContents();
  console.log(allTitles);
});

//Test-2
test.only("UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const documentLink = page.locator("[href*='documents-request']");

  //static dropdown
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  //radiobutton
  //use this if two element are present
  // await page.locator(".radiotextsty").last().click();
  //use this if more element are present
  await page.locator(".radiotextsty").nth(1).click();
  await page.locator("#okayBtn").click();
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  //console.log(await page.locator(".radiotextsty").last().isChecked());

  //checkbox
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  //Blinking text
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

  // await page.pause();
});

//Handling Child Window / other window
test("handling Child Window", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    documentLink.click(),
  ]);
  const text = await newPage.locator(".red").textContent();
  console.log(text);

  //  To get word in sentence
  const text1 = await newPage.locator(".red").textContent();
  const arrayText = text1.split("@");
  const email = arrayText[1].split(" ")[0];
  console.log(email);

  //back to parent window add the word which you got
  await page.locator("#username").type(email);
  const usernametext = await page.locator("#username").textContent();
  console.log(usernametext);
});
