import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

  // Find the login locators and fill the firstname field
  await page.locator('#input-firstname').fill('Kishor test 1');

  // Fill the lastname field
  await page.locator('#input-lastname').fill('Learning Automation');

 //await new Promise (() => {}); // this will stop browser to close
 await page.locator('#input-lastname').fill('Learning Automation');

});