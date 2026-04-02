import { test } from '@playwright/test'

test.describe('Click tests', () => {

    test("Click basic", async ({ page }) => {

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

        //Locator radio button
        const femaleRadio = page.locator("//*[@id='female']");  

        // locator checkbox
        const readingCheckbox = page.locator("//*[@id='reading']");
        const travelingCheckbox = page.locator("//*[@id='traveling']");

        // Check radio button
        await femaleRadio.check(); 


        //Check checkbox button
        await readingCheckbox.check(); 
        await travelingCheckbox.check(); 

        //Uncheck checkbox button
        await readingCheckbox.uncheck(); 
        await travelingCheckbox.uncheck(); 

        //Get check status of radio button
        const isFemaleChecked = await femaleRadio.isChecked();
        console.log("Is female radio button checked: " + isFemaleChecked);

        //Get check status of checkbox button
        const isReadingChecked = await readingCheckbox.isChecked();
        console.log("Is reading checkbox button checked: " + isReadingChecked);
        const isTravelingChecked = await travelingCheckbox.isChecked();
        console.log("Is traveling checkbox button checked: " + isTravelingChecked);
    });

});