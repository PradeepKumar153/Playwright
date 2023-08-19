const { CartPage } = require("./CartPage");
const { DashboardPage } = require("./DashboardPage");
const { LoginPage } = require("./LoginPage");
const { OrdersHistoryPage } = require("./OrdersHistoryPage");
const { OrdersReviewPage } = require("./OrdersReviewPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashBoardPage = new DashboardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }
  getCartPage() {
    return this.cartPage;
  }
  getDashboardPage() {
    return this.dashBoardPage;
  }
  getOrdersHistoryPage() {
    return this.ordersHistoryPage;
  }
  getOrdersReviewPage() {
    return this.ordersReviewPage;
  }
}
module.exports = { POManager };
