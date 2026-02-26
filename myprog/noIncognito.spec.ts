import { test,firefox, BrowserContext, expect, Page } from '@playwright/test';
//import firefox = require('@playwright/test');
//import { firefox, chromium } from 'playwright';

test('No Incognito test', async () => {

  //const context: BrowserContext =  await chromium.launchPersistentContext('./user-data', { headless: false, channel: 'chrome'});
  const context:BrowserContext =  await firefox.launchPersistentContext('', { headless: false});
  
  
      const pages = context.pages();  //2 , 0 to 1
      const page = pages[0];

  //nst page: Page = await conte  xt.newPage();

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    // await page.waitForTimeout(7000);
});


