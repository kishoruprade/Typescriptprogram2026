import {test, expect, Locator } from '@playwright/test';

/* timeout:60000;
expect :{
    timeout:5000
}
 */
test('locatorbasic test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//create a webelement (locator) + perform action on it(click, fill)

//1 Use of ID
 const firstName:Locator = page.locator('id=input-firstname');
 const lastName:Locator = page.locator('id=input-lastname');

 
   await firstName.fill('Kishor');
   await lastName.fill('Test2');

 //2 Use of Class
  const logo: Locator = page.locator('.img-responsive');
  const logoExist = await logo.isVisible();
   console.log('Logo exist or not : true or false : ' + logoExist);

   //3 Use ot Text
    const header:Locator = page.locator('text=Register Account');
    const headerExist = await header.isEnabled();
    console.log('Checking header exist or not: true or false: ' + headerExist);

      //4 Use ot Text
    const continueBtn:Locator = page.locator('text=Continue');
    const continueBtnExist = await continueBtn.isEnabled();
    console.log('Checking button exist or not: true or false: ' + continueBtnExist);
        

        //5 Use ot Text
    const forgottenPwdLink:Locator = page.locator('text=Forgotten Password');
     const forgottenPwdLinkExist = await forgottenPwdLink.isEnabled();
    console.log('Checking forgotten password link exist or not: true or false: ' + forgottenPwdLinkExist);
 

          //6 Use of Text
    const emailId:Locator = page.locator('input#input-email'); //other way of writing css default is csss 
    // const emailId:Locator = page.locator('css=input#input-email');
      await emailId.fill('SameerPot@gmail.com');

      //7 Use of Test
          const telephone:Locator = page.locator('input[name="telephone"]'); //other way of writing css default is css
              // const telephone:Locator = page.locator('css=input[name="telephone"]');
                    await telephone.fill('987654310');

        //8 Use of privacy checkbox
          const privacyCheckBox:Locator = page.locator('input[type="checkbox"]'); //other way of writing css default is css
          //const privacyCheckBox:Locator = page.locator('css=input[type="checkbox"]');
                    await privacyCheckBox.check();
 
   //9 Use of Xpath
    const password:Locator = page.locator('xpath=//input[@id="input-password"]'); // we can use xpath = 
         await password.fill('Kishor@1234');

             //const search:Locator = page.locator('//input[@name="search"]');
                const search:Locator = page.locator('//input[@name="search" and @type="text"]'); //we can skip "xpath ="
                      await search.fill('macbook');
         
                 


   //await new Promise(() =>{}); //this will stop browser to close
 console.log('test locatorbasic  completed successfully');

});
