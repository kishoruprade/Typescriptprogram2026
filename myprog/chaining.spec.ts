import { test, expect } from '@playwright/test';

test('chaining test', async ({ page }) => {
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
