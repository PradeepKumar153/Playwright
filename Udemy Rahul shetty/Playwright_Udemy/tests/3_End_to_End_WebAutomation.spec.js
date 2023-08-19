const { test, expect } = require("@playwright/test");

test("End to End Web Automation", async ({ page }) => {
  const productName = "iphone 13 pro";
  const products = page.locator(".card-body");
  const email = "anshika@gmail.com";
  const Orderlist = page.locator("tbody tr");

  //Start program
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill("anshika@gmail.com");
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);

  //To search the product
  const count = await products.count();
  for (let i = 1; i < count; i++) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      /* add to cart
      await products.nth(i).locator(" Add To Cart");
      or */
      console.log("Adding to the Cart : " + (await products.nth(i).locator("b").textContent()));
      await products.nth(i).getByText(" Add To Cart").click();
      break;
    }
  }

  //open the cart
  await page.locator("[routerlink*='cart']").click();
  //assert the product is visible
  await page.locator("div li").first().waitFor();
  const checkProduct = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
  expect(checkProduct).toBeTruthy();

  //to checkout the product
  //await page.locator("//button[normalize-space()='Checkout']").click(); or
  //await page.getByRole("button", { name: "Checkout" }).click();  or
  await page.locator("text=Checkout").click();

  //payment Method
  const listOfPaymentMode = await page.locator(".payment__types div").allTextContents();
  console.log(listOfPaymentMode);

  //Email verify
  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

  //dynamic drop down
  await page.locator("[placeholder*='Country']").type("ind", { delay: 100 });
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optioncount = await dropdown.locator("button").count();
  for (let i = 0; i < optioncount; i++) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  //Placing Order
  await page.locator(".action__submit").click();

  //order Cormirmation
  const orderConfirmation = page.locator(".hero-primary");
  console.log(await orderConfirmation.textContent());
  expect(await orderConfirmation).toHaveText(" Thankyou for the order. ");

  //Order Id;
  const OrderId = await page.locator(".em-spacer-1 .ng-star-inserted ").textContent();
  console.log("Your Order Id is : " + OrderId);

  //To view order using order Id
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  //Find the Order details by Id
  const OrderlistCount = await Orderlist.count();

  for (let i = 0; i < OrderlistCount; i++) {
    const rowOrderId = await Orderlist.nth(i).locator("th").textContent();
    if (OrderId.includes(rowOrderId)) {
      await Orderlist.nth(i).locator("button").first().click();
      break;
    }
  }
  await page.pause();
  const OrderIddetails = await page.locator(".col-text").textContent();
  expect(OrderId.includes(OrderIddetails)).toBeTruthy();
});
