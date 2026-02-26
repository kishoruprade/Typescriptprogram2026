"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('locator', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    // Find the login locators and fill the firstname field
    await page.locator('#input-firstname').fill('Kishor test 1');
    // Fill the lastname field
    await page.locator('#input-lastname').fill('Learning Automation');
    //await new Promise (() => {}); // this will stop browser to close
    await page.locator('#input-lastname').fill('Learning Automation');
});
//# sourceMappingURL=locator.spec.js.map