"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('MouseHover test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.spicejet.com/');
    await page.getByText('Add-ons').first().hover(); //hover on the element 
    await page.getByText('SpicePlus').first().click();
    await page.waitForTimeout(5000);
    await page.goto('https://www.bigbasket.com/');
    await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').isEnabled();
    await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').click();
    await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Fashion', exact: true }).hover();
    await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Footwear' }).hover();
    await page.waitForTimeout(3000);
    await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Kids Footwear' }).click({ force: true });
    /*  await page.goto('https://www.bigbasket.com/', { waitUntil: 'domcontentloaded' });

// Open main menu (Shop by Category / Menu button)
await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').click();
//await page.getByRole('button').first().click();

// Hover on Fashion
await page.getByRole('link', { name: 'Fashion' }).hover();

// Hover on Footwear
await page.getByRole('link', { name: 'Footwear' }).hover();

// Wait until Kids Footwear is visible, then click
const kidsFootwear = page.getByRole('link', { name: 'Kids Footwear' });
await kidsFootwear.waitFor({ state: 'visible' });
await kidsFootwear.click(); */
    //await page.waitForTimeout(70000);
});
//# sourceMappingURL=mousehover.spec.js.map