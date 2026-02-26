"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('login test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId = await page.locator('input[name="email"]');
    const password = await page.locator('input[name="password"]');
    const loginButton = await page.locator('input[value="Login"]');
    await emailId.fill("kishoruprade2026@Gmail.com");
    await password.fill("kishor@123");
    await loginButton.click();
    const title = await page.title();
    console.log(title);
    await page.screenshot({ path: 'example.png' });
    //await browser.close();npx 
});
//# sourceMappingURL=login.spec.js.map