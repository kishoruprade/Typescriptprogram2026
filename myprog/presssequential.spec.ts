import { test, expect } from '@playwright/test';

test('Press Sequential Keys test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.flipkart.com/ ');
   // await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).pressSequentially('macbook');
    await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).press('macbook');

   //await page.waitForTimeout(50000);



});