import {test, Browser, Page, BrowserContext} from '@playwright/test';
import {chromium} from 'playwright';

test('auth test', async ({})=> {

    const browser:Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context:BrowserContext = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });
    const page:Page = await context.newPage();

    const username  = 'admin';
    const password  = 'admin';
    //const authHeader =  'Basic ' + btoa(username + ':' + password); --One way to do it in browser context
    page.setExtraHTTPHeaders({ 'Authorization': createAuthHeader(username, password) }); // -- Another way to do it

    // Navigate to the login page
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    
    //await page.waitForTimeout(5000);
    await browser.close();
   // await new Promise(() => {});  //prevent browser from closing

});

function createAuthHeader(username: any, password: any)
 {
    return 'Basic ' + btoa(username + ':' + password);

}