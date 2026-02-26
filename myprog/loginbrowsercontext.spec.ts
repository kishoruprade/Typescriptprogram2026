import { test, expect } from '@playwright/test';

test('loginbrowsercontext test', async ({ browser }) => {

  // Create first browser context and page
  const browserContext_1 = await browser.newContext();
  const page1 = await browserContext_1.newPage();

  // Create second browser context and page
  const browserContext_2 = await browser.newContext();
  const page2 = await browserContext_2.newPage();
  
  // Browser 1 - Navigate to the login page
  await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  const emailId1 = await page1.locator('input[name="email"]');
  const password1 = await page1.locator('input[name="password"]');
  const loginButton1 = await page1.locator('input[value="Login"]');

  await emailId1.fill('kishoruprade2026@gmail.com');
  await password1.fill('kishor@123');
  await loginButton1.click();

  // Browser 2 - Navigate to the login page
  await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  const emailId2 = await page2.locator('input[name="email"]');
  const password2 = await page2.locator('input[name="password"]');
  const loginButton2 = await page2.locator('input[value="Login"]');

  await emailId2.fill('userpw@pw.com');
  await password2.fill('Test@123');
  await loginButton2.click();

  // Verify titles from both pages
  const title1 = await page1.title();
  const title2 = await page2.title();
  
  console.log('Page 1 title:', title1);
  console.log('Page 2 title:', title2);
  
  // Take screenshots
  await page1.screenshot({ path: 'example1.png' });
  await page2.screenshot({ path: 'example2.png' });

  // Assertions
  expect(title1).toBe('My Account');
  expect(title2).toBe('My Account');

  // Keep browser open - wait for manual close (30 minutes)
  //await page1.waitForTimeout(30 * 60 * 1000);


  // Cleanup
  //await browserContext_1.close();
  //await browserContext_2.close();
});