import { test, expect } from '@playwright/test';

test.describe('Google Search Test', () => {

  test('Home Page should load successfully @smoke', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
  });

  test('  @regression', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[name="q"]');
    await expect(searchBox).toBeVisible();
  });

  test('Should show result after searching keyword @smoke', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill('Playwright');
    await searchBox.press('Enter');
  });

    test('Should show result after searching keyword1 @smoke', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill('Playwright');
    await searchBox.press('Enter');
  });

});