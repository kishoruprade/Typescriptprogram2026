"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('chaining test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo');
    //await page.locator('form#Form_getForm>>#Form_getForm_FullName').fill('Naveen');
    //await page.locator('form#Form_getForm>>text=Get a Free Demo').click();
    /*         const form =  page.locator('form#Form_getForm');
            const getYourFreeDemoButton = page.getByRole('button', { name: 'Get a Free Demo' });
            await form.locator(getYourFreeDemoButton).click(); */
    await page.locator('form#Form_getForm').locator('#Form_getForm_FullName').fill('Naveen');
    await page.locator('form#Form_getForm').getByRole('button', { name: 'Get a Free Demo' }).click();
    await page.waitForTimeout(7000);
});
//# sourceMappingURL=chaining.spec.js.map