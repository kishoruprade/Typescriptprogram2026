import { test, expect } from '@playwright/test';
import { runQuery } from './/db.util';

// This program needs to correct with it's connectivit and path

test('verify data after UI action', async ({ page }) => {
    // 1. Perform UI actions with Playwright
    await page.goto('https://yourapp.com');
    // ... UI interactions to change data

    // 2. Verify the change directly in the database
    const dbResult: any= await runQuery('SELECT setting_value FROM settings_table WHERE user_id = 1');
    expect(dbResult[0].setting_value).toBe('new value');
});