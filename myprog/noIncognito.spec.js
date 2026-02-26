"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
//import firefox = require('@playwright/test');
//import { firefox, chromium } from 'playwright';
(0, test_1.test)('No Incognito test', async () => {
    //const context: BrowserContext =  await chromium.launchPersistentContext('./user-data', { headless: false, channel: 'chrome'});
    const context = await test_1.firefox.launchPersistentContext('', { headless: false });
    const pages = context.pages(); //2 , 0 to 1
    const page = pages[0];
    //nst page: Page = await conte  xt.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    // await page.waitForTimeout(7000);
});
//# sourceMappingURL=noIncognito.spec.js.map