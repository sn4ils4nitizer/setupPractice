import {employeePageObject} from "./2.7.2EmpPO";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until} from "selenium-webdriver";

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const employeePage = new employeePageObject(driver);

  describe("Practicing PageObjects", () => {
    beforeEach(async () => {
        await employeePage.navigate()
    });
    afterAll(async () =>{
        await driver.quit()
    });

    test("adding an employee", async () => {
      await driver.wait(until.elementLocated(employeePage.header))
      await driver.findElement(employeePage.addEmployee).click();
      await driver.findElement(employeePage.newEmployee).click();
      await driver.findElement(employeePage.nameInput).click();
      await driver.findElement(employeePage.nameInput).clear();
      await driver.findElement(employeePage.nameInput).sendKeys("Lorgar Aurellius");
      await driver.findElement(employeePage.phoneInput).click();
      await driver.findElement(employeePage.phoneInput).clear();
      await driver.findElement(employeePage.phoneInput).sendKeys("1234567890");
      await driver.findElement(employeePage.titleInput).click();
      await driver.findElement(employeePage.titleInput).clear();
      await driver.findElement(employeePage.titleInput).sendKeys("Space Marine");
      await driver.findElement(employeePage.saveButton).click();
      let result = await driver.findElement(employeePage.employeeCardBigName).getText()
      expect(result).toContain("Lorgar Aurellius");  
    });
});