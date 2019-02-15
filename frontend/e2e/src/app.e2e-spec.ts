import { AppPage } from "./app.po";

describe("Home page", () => {
  let page: AppPage;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    page = new AppPage();
  });

  it("should display the Quiz App navbar heading", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Quiz App");
  });

  it("should have login with facebook button", () => {
    page.navigateTo();
    expect(page.getFBButton()).toContain("Login with facebook");
  });

  it("should have login with google button", () => {
    page.navigateTo();
    expect(page.getGoogleButton()).toContain("Login with Google");
  });
});
