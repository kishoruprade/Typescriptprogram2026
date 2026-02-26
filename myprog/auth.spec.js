"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
(0, test_1.test)('auth test', async ({}) => {
    const browser = await playwright_1.chromium.launch({ headless: false, channel: 'chrome' });
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });
    const page = await context.newPage();
    const username = 'admin';
    const password = 'admin';
    //const authHeader =  'Basic ' + btoa(username + ':' + password); --One way to do it in browser context
    page.setExtraHTTPHeaders({ 'Authorization': createAuthHeader(username, password) }); // -- Another way to do it
    // Navigate to the login page
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    //await page.waitForTimeout(5000);
    await browser.close();
    // await new Promise(() => {});  //prevent browser from closing
});
function createAuthHeader(username, password) {
    return 'Basic ' + btoa(username + ':' + password);
}
//# sourceMappingURL=auth.spec.js.map