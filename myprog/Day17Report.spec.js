"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('Google Search Test', () => {
    (0, test_1.test)('Home Page should load successfully @smoke', async ({ page }) => {
        await page.goto('https://www.google.com');
        await (0, test_1.expect)(page).toHaveTitle(/Google/);
    });
    (0, test_1.test)('  @regression', async ({ page }) => {
        await page.goto('https://www.google.com');
        const searchBox = page.locator('textarea[name="q"]');
        await (0, test_1.expect)(searchBox).toBeVisible();
    });
    (0, test_1.test)('Should show result after searching keyword @smoke', async ({ page }) => {
        await page.goto('https://www.google.com');
        const searchBox = page.locator('textarea[name="q"]');
        await searchBox.fill('Playwright');
        await searchBox.press('Enter');
    });
    (0, test_1.test)('Should show result after searching keyword1 @smoke', async ({ page }) => {
        await page.goto('https://www.google.com');
        const searchBox = page.locator('textarea[name="q"]');
        await searchBox.fill('Playwright');
        await searchBox.press('Enter');
    });
});
//# sourceMappingURL=Day17Report.spec.js.map