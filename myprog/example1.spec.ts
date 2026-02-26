import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.linkedin.com');
  await expect(page).toHaveTitle(/LinkedIn/);
});