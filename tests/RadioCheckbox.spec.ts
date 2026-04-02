import { test } from '@playwright/test'

test.describe('Click tests', () => {

    test("Click basic", async ({ page }) => {

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

        const femaleRadio = page.locator("//*[@id='female']");

        await femaleRadio.check(); // Check radio button

    });

});