"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('Google Search Test', () => {
    (0, test_1.test)('singlefileupload @smoke', async ({ page }) => {
        await page.goto('https://www.orangehrm.com/en/book-a-free-demo');
        // Accept cookies safely
        const allowAll = page.getByRole('button', { name: 'Allow all' });
        if (await allowAll.isVisible()) {
            await allowAll.click();
        }
        const fullName = page.getByRole('textbox', { name: 'Full Name' });
        await fullName.fill('Kishor');
        await (0, test_1.expect)(fullName).toHaveValue('Kishor');
    });
    (0, test_1.test)('singlefileupload2 @regression', async ({ page }) => {
        await page.goto('https://www.orangehrm.com/en/book-a-free-demo');
        const allowAll = page.getByRole('button', { name: 'Allow all' });
        if (await allowAll.isVisible()) {
            await allowAll.click();
        }
        const fullName = page.getByRole('textbox', { name: 'Full Name' });
        await fullName.fill('Kishor');
        await (0, test_1.expect)(fullName).toHaveValue('Kishor');
    });
});
//# sourceMappingURL=Day16lastsessionnaveen.spec.js.map