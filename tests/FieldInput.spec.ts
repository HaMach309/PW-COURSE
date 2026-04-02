import { test } from '@playwright/test'

test.describe('Click tests', () => {

    test("Click basic", async ({ page }) => {

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

        const usernameField = page.locator("//*[@id='username']");

        await usernameField.fill("anhdl@gmail.com"); // Điền vào trường username
        
        await usernameField.pressSequentially("anhdl@gmail.com", { delay: 100 }); // Điền vào trường username với delay 100ms

    });

});