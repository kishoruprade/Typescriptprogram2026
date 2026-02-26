import { test, expect } from '@playwright/test';

test.describe('Google Search Test', () => {

  test('singlefileupload @smoke', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo');

    // Accept cookies safely
    const allowAll = page.getByRole('button', { name: 'Allow all' });
    if (await allowAll.isVisible()) {
      await allowAll.click();
    }

    const fullName = page.getByRole('textbox', { name: 'Full Name' });

    await fullName.fill('Kishor');
    await expect(fullName).toHaveValue('Kishor');
  });

  test('singlefileupload2 @regression', async ({ page }) => {
    await page.goto('https://www.orangehrm.com/en/book-a-free-demo');

    const allowAll = page.getByRole('button', { name: 'Allow all' });
    if (await allowAll.isVisible()) {
      await allowAll.click();
    }

    const fullName = page.getByRole('textbox', { name: 'Full Name' });

    await fullName.fill('Kishor');
    await expect(fullName).toHaveValue('Kishor');
  });

});