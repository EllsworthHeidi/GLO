import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");
const geckodriver = require ("geckodriver");

export class basePage{
    driver: WebDriver
    url: string = "https://www.churchofjesuschrist.org/study";
    url1: string = "http://test.churchofjesuschrist.org/study";
    url2: string= "http://stage.churchofjesuschrist.org/study";


    //Waiting to find stable selectors for each companent
    bookMrk: By= By.className("sc-1g7hsbc-0 qXKBF iconButton--V5Iv");
    bookMrkPopOut: By= By.className("calloutInner-25XfU")
    // signIn: By = By.className("sc-1lb7nf5-0 jIMHvo primary-GiF2n")
    // usrName: By = By
    // passWord: By = By
    // nextBtn: By = By
    // verifyBtn: By= By

    constructor(driver: WebDriver) {
        this.driver = driver;

    }
    async navigate() {
        await this.driver.get(this.url)
    }

    async functioningBookMark() {
        await this.driver.wait (until.elementLocated(this.bookMrk));
        await this.driver.findElement(this.bookMrk).click();
    }

    async bookMarkSignIn() {
        await this.driver.wait(until.elementLocated(this.bookMarkSignIn));
        await this.driver.wait(until.elementLocated(this.signIn));
        await this.driver.findElement(this.signIn).click();
    }

    async mainPageLogIn () {
        await this.driver.wait(until.elementLocated(this.usrName)); 
        await this.driver.findElement(this.usrName).clear();
        await this.driver.findElement(this.usrName).sendKeys("")
        await this.driver.findElement(this.nextBtn).click();
        


    }

}
