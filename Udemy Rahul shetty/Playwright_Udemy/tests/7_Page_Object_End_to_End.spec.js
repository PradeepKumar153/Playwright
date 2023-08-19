const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageObject/POManager");
const dataset = JSON.parse(JSON.stringify(require("../pageObject/Utils/placeorderTestData.json")));

test("End to End Web Automation", async ({ page }) => {
  const poManager = new POManager(page);
  const products = page.locator(".card-body");

  //Login
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(dataset.username, dataset.password);

  //DashBoard
  const dashBoardPage = poManager.getDashboardPage();
  await dashBoardPage.searchProductAddCart(dataset.productName);
  await dashBoardPage.navigateToCart();

  //Cart
  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(dataset.productName);
  await cartPage.Checkout();

  //OrderReview
  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);

  //OrderHistory
  await dashBoardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
