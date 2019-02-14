import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    page = new AppPage();
  });

  it("should display the Quiz App navbar heading", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Quiz App");
  });
});
