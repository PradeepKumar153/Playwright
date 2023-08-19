class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInbuton = page.locator("[value='Login']");
    this.userName = page.getByPlaceholder("email@example.com");
    this.password = page.locator("#userPassword");
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password) {
    await this.userName.fill(username);
    await this.password.type(password);
    await this.signInbuton.click();
    await this.page.waitForLoadState("networkidle");
  }
}
module.exports = { LoginPage };
