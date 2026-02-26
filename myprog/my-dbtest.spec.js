"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const db_util_1 = require(".//db.util");
// This program needs to correct with it's connectivit and path
(0, test_1.test)('verify data after UI action', async ({ page }) => {
    // 1. Perform UI actions with Playwright
    await page.goto('https://yourapp.com');
    // ... UI interactions to change data
    // 2. Verify the change directly in the database
    const dbResult = await (0, db_util_1.runQuery)('SELECT setting_value FROM settings_table WHERE user_id = 1');
    (0, test_1.expect)(dbResult[0].setting_value).toBe('new value');
});
//# sourceMappingURL=my-dbtest.spec.js.map