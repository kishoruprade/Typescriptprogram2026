"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('login1 test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // Find the login locators
    const emailId = await page.locator('input[name="email"]');
    const password = await page.locator('input[name="password"]');
    const loginButton = await page.locator('input[value="Login"]');
    // Enter login and password details
    await emailId.fill('kishoruprade2026@gmail.com');
    await password.fill('kishor@123');
    // Click on login button
    await loginButton.click();
    // Verify the login page title
    const title = await page.title();
    console.log(title);
    // Take screenshot of the page
    await page.screenshot({ path: 'example1.png' });
    // Assert the title
    (0, test_1.expect)(title).toBe('My Account');
});
//# sourceMappingURL=login1.spec.js.map