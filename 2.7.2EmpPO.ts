import {Builder, By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  
const chromedriver = require("chromedriver");

  export class employeePageObject {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
      addEmployee: By = By.name("addEmployee");
      newEmployee: By = By.xpath('//li[@class="listText"][11]');
      nameInput: By = By.name("nameEntry");
      phoneInput: By = By.name("phoneEntry");
      titleInput: By = By.name("titleEntry");
      saveButton: By = By.id("saveBtn");
      header: By = By.css('.titleText');
      employeeCardBigName: By = By.id("employeeTitle");
      constructor(driver: WebDriver){
        this.driver = driver
      };
      async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header));
      };
      async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
      };
      async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        await this.driver.findElement(elementBy).sendKeys(keys);
      };
      async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        await this.driver.findElement(elementBy).getText();
      };
  };

  
      
  /* this is a commment */