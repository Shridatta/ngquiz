import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return browser.driver.findElement(by.css("#root-toolbar")).getText();
  }

  getFBButton() {
    return browser.driver.findElement(by.css("#fbbutton")).getText();
  }

  getGoogleButton() {
    return browser.driver.findElement(by.css("#googlebutton")).getText();
  }
}
