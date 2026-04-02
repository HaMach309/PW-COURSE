import { test } from '@playwright/test'

test.describe('Click tests', () => {

    test("Click basic", async ({ page }) => {

        await page.goto("https://material.playwrightvn.com/018-mouse.html");

        const clickArea = page.locator("//div[@id='clickArea']");

        await clickArea.click(); // Click chuột trái

        await clickArea.click({ button: "right" }); // Click chuột phải

        await clickArea.click({ button: "middle" }); // Click chuột giữa

        await clickArea.click({ clickCount: 100 }); // Click 100 lần

        await clickArea.dblclick(); // Double click



        // await clickArea.click({ delay: 3_000 });

        await clickArea.click({ force: true }); // Click không chờ

        await clickArea.click({ modifiers: ['Alt','Control'] }); // Click với kèm theo phím Alt và Control

        await clickArea.click({ position: { x: 100, y: 100 } }); // Click với tọa độ x = 100, y = 100

        await clickArea.click({ trial: true }); // Click với thử nghiệm

    });

});