"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// single File upload test
(0, test_1.test)('singlefileupload test', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo');
    await page.getByRole('button', { name: 'Allow all' }).focus();
    await page.getByRole('button', { name: 'Allow all' }).click();
    const fullName = await page.getByRole('textbox', { name: 'Full Name' });
    await fullName.focus();
    await page.waitForTimeout(2000);
    //await expect(fullName).toBeFocused();
    fullName.fill('Kishor');
    await page.waitForTimeout(9000);
});
//# sourceMappingURL=Day14focusOnElement.spec.js.map