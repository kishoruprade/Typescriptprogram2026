import {test, expect, Locator } from '@playwright/test';
import { Buffer } from 'buffer';
import path from 'path';


test.use({

   actionTimeout: 3000
});

  test.describe('Autowait tests', () => {

// single File upload test
  test('Autowait1 test', async ({ page }) => {

  //await page.setDefaultTimeout(150000); // Set a default timeout for all actions
  await page.goto('https://api.cogmento.com/register/?lang=en-GB');
  await page.getByLabel('I agree to the Terms of Use.').focus();
  await page.getByLabel('I agree to the Terms of Use.').check(); // Wait for the checkbox to be available and check it

  //await page.waitForTimeout(5000);

});

  test('Autowait2 test', async ({ page }) => {

  //await page.setDefaultTimeout(150000); // Set a default timeout for all actions
  await page.goto('https://api.cogmento.com/register/?lang=en-GB');
  await page.getByLabel('I agree to the Terms of Use.').focus();
  await page.getByLabel('I agree to the Terms of Use.').check(); // Wait for the checkbox to be available and check it

  //await page.waitForTimeout(5000);

});


test('Autowaitcheck3 test', async ({ page }) => {

  //await page.setDefaultTimeout(150000); // Set a default timeout for all actions
  await page.goto('https://api.cogmento.com/register/?lang=en-GB');
  await page.getByLabel('I agree to the Terms of Use.').focus();
  await page.getByLabel('I agree to the Terms of Use.').check(); // Wait for the checkbox to be available and check it
  // await page.getByLabel('I agree to the Terms of Use.').check({timeout: 5000});

  //await page.waitForTimeout(5000);

});

});


