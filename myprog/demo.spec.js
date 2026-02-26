"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('login1 @smoke', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    /*const emailId = await page.locator('input[name="email"]');
  const password = await page.locator('input[name="password"]');
  const loginButton = await page.locator('input[value="Login"]');

  await emailId.fill("kishoruprade2027@Gmail.com");
  await password.fill("kishor@123");
  await loginButton.click();

  const title = await page.title();
  console.log("test 1",title);
  await page.screenshot({ path: 'example.png' });
  //await browser.close();npx   */
});
(0, test_1.test)('login2 @regression', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    /*const emailId = await page.locator('input[name="email"]');
const password = await page.locator('input[name="password"]');
const loginButton = await page.locator('input[value="Login"]');

await emailId.fill("kishoruprade2027@Gmail.com");
await password.fill("kishor@123");
await loginButton.click();

const title = await page.title();
console.log("test 2", title);
await page.screenshot({ path: 'example.png' });
//await browser.close();npx  */
});
(0, test_1.test)('login3 test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    /* const emailId = await page.locator('input[name="email"]');
    const password = await page.locator('input[name="password"]');
    const loginButton = await page.locator('input[value="Login"]');
  
    await emailId.fill("kishoruprade2026@Gmail.com");
    await password.fill("kishor@123");
    await loginButton.click();
  
    const title = await page.title();
    console.log("loging test 3",title);
    await page.screenshot({ path: 'example.png' });
    //await browser.close();npx
     */
});
//# sourceMappingURL=demo.spec.js.map