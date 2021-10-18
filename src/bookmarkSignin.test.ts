import {basePage} from "./basePage";

import { WebDriver, Builder, Capabilities, By } from "selenium-webdriver";
const driver: WebDriver= new Builder()
    .withCapabilities(Capabilities.chrome()).build();
const page= new basePage(driver);

beforeAll(async () => {
    await page.navigate();

});

test("Book Mark Login", async() => {
    await page.functioningBookMark();
}
)

afterAll(async () => {
    await driver.quit();
  });