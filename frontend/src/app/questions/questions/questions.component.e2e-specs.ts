import { QuestionsPage } from "./questions.component.po";

describe("Admin page", () => {
  let page: QuestionsPage;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    page = new QuestionsPage();
  });

  it("should display the Search button", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Search");
  });
});
