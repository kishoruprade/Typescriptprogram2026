"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('has title', async ({ page }) => {
    await page.goto('https://www.linkedin.com');
    await (0, test_1.expect)(page).toHaveTitle(/LinkedIn/);
});
//# sourceMappingURL=example1.spec.js.map