import { test, expect } from '@playwright/test';

test('wait test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   await page.waitForLoadState('load', {timeout: 10000 }); 

  // Wait for the URL to contain 'register'
  //await page.waitForURL(/.*register/i, { timeout: 5000 });

  // Add an assertion to verify the test actually passed
  //expect(page.url()).toContain('register');
});