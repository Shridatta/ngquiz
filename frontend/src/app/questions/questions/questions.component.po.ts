import { browser, by, element } from "protractor";

export class QuestionsPage {
  navigateTo() {
    return browser.get("/admin/questions");
  }

  getParagraphText() {
    return browser.driver.findElement(by.css("#search")).getText();
  }
}
