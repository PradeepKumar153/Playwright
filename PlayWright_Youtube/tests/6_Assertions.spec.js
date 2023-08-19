const { test, expect } = require("@playwright/test");

test("Assertion test", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  //1) page has url
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //2) page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //3 Element is visible
  //   const element = await page.getByAltText("nopCommerce demo store");
  //or
  const element = await page.locator(".header-logo");
  await expect(element).toBeVisible();

  //Element is enabled
  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  //radio is checked
  const maleRadioButton = await page.locator("#gender-male");
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  //check box
  const checkbox = await page.locator("#Newsletter");
  await expect(checkbox).toBeChecked();

  //Element has attribute
  const regBtn = await page.locator("#register-button");
  await expect(regBtn).toHaveAttribute("type", "submit");

  //Element matches text
  const text = await page.locator(".page-title h1");
  await expect(text).toHaveText("Register");

  //Element contains Text
  await expect(await page.locator(".page-title h1")).toContainText("Reg");

  //Input has a Value
  const emailInput = await page.locator("#Email");
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  //List of elements has given length
  const options = await page.locator('select[name="DateOfBirthMonth"] option');
  await expect(options).toHaveCount(13);
});
