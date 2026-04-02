import { test } from '@playwright/test'

test.describe('Click tests', () => {

    test("Click basic", async ({ page }) => {

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

       //Locator select box
       const selectBox = page.locator("//*[@id='country']");

       //Select option by text
       await selectBox.selectOption("United States");

       //locator mutiple select box
       const multipleSelectBox = page.locator("//*[@id='interests']");

       //Select option by text
       await multipleSelectBox.selectOption(["Technology","Science"]);

    });

});