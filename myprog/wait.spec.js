"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('wait test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.waitForLoadState('load', { timeout: 10000 });
    // Wait for the URL to contain 'register'
    //await page.waitForURL(/.*register/i, { timeout: 5000 });
    // Add an assertion to verify the test actually passed
    //expect(page.url()).toContain('register');
});
//# sourceMappingURL=wait.spec.js.map