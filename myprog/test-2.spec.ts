import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1771915582519&no_sw_cr=1', {
    waitUntil: 'domcontentloaded',
  });
  await page.getByRole('button', { name: 'Not interested' }).click();
  await expect(page).toHaveTitle(/Google/i);
  await expect(page.locator('textarea[name="q"]')).toBeVisible();
  //take the pull request so that latest file is created
});
