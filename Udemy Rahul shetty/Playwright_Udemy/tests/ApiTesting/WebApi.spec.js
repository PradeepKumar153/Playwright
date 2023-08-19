const { test, expect, request } = require("@playwright/test");
const { APiUtils } = require("./Utils/ApiUtils");

const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6262e9d9e26b7e1a10e89c04" }] };
let response;

test.beforeAll(async () => {
  //Login API
  const apiContext = await request.newContext();
  const apiUtils = new APiUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);
});

test("Place the Order", async ({ page }) => {
  //Start program
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");

  const Orderlist = page.locator("tbody tr");

  //To view order using order Id
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  //Find the Order details by Id
  const OrderlistCount = await Orderlist.count();

  for (let i = 0; i < OrderlistCount; i++) {
    const rowOrderId = await Orderlist.nth(i).locator("th").textContent();
    if (response.OrderId.includes(rowOrderId)) {
      await Orderlist.nth(i).locator("button").first().click();
      break;
    }
  }
  const OrderIddetails = await page.locator(".col-text").textContent();
  await page.pause();
  expect(response.OrderId.includes(OrderIddetails)).toBeTruthy();
});
