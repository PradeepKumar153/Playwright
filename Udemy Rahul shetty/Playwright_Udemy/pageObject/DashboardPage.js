class DashboardPage {
  constructor(page) {
    this.products = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart = page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
  }

  async searchProductAddCart(productName) {
    const titles = await this.productsText.allTextContents();
    console.log(titles);

    //To search the product
    const count = await this.products.count();
    for (let i = 1; i < count; i++) {
      if ((await this.products.nth(i).locator("b").textContent()) === productName) {
        /* add to cart
      await products.nth(i).locator(" Add To Cart");
      or */
        console.log("Adding to the Cart : " + (await this.products.nth(i).locator("b").textContent()));
        await this.products.nth(i).getByText(" Add To Cart").click();
        break;
      }
    }
  }
  async navigateToOrders() {
    await this.orders.click();
  }

  async navigateToCart() {
    await this.cart.click();
  }
}

module.exports = { DashboardPage };
