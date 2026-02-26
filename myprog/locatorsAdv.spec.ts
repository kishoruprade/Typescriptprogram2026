import {test, expect, Locator } from '@playwright/test';

/* timeout:60000;
expect :{
    timeout:5000
}
 */
test('locatorsAdv test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//create a webelement (locator) + perform action on it(click, fill)
       //await page.getByTestId("input-email").fill("kishoruprade2026@gmail.com");

       // header
  /*      const header:Locator = page.getByRole('heading', { name: 'Register Account' });
        const headerExist = await header.isVisible(); 
        console.log('Checking header exist or not: true or false: ' + headerExist); */

        //header
          await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();

        //const ForgottenPwd getbyRole
       /*  const forgottenPwdLink:Locator = page.getByRole('link', { name: 'Forgotten Password' });
        const forgottenPwdLinkExist = await forgottenPwdLink.isEnabled();
        console.log('Checking forgotten password link exist or not: true or false: ' + forgottenPwdLinkExist);
 */
        await expect(page.getByRole('link', { name: 'Forgotten Password' })).toBeEnabled();

                await expect(page.getByRole('radio', { name: 'yes' })).toBeEnabled(); //case insensitive
                await page.getByRole('radio', { name: 'no' }).click();

                 await expect (page.getByRole('checkbox')).toBeVisible();
                  await page.getByRole('checkbox').click();

                  // await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled(); 
                  //await page.getByRole('button', { name: 'Continue' }).click();


                  await page.locator('input[type="submit"]').click(); //use by CSS selector

                  await page.waitForTimeout(7000);

     //await new Promise(() =>{}); //this will stop browser to close
 console.log('test locatorAdv  completed successfully');
});
