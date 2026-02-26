import { test, expect } from '@playwright/test';

test('Doubleclickevent test', async ({ page }) => {
    //Launch the browser and navigate to url
   await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

   //Check the double click event
    await page.getByText('Double-Click Me To See Alert').dblclick(); 
    await page.waitForTimeout(3000);
    //Handling alert pop-u
    // p

                   

    //Right Click Test in Guru99
    await page.getByText('right click me').click({ button: 'right' }); 
    await page.waitForTimeout(3000);  

    //await page.getByText('Edit').click();await page.locator('xpath=//span[text()="Edit"]').click();  //right click on the element 

      //await page.waitForTimeout(50000);
      //One way of doing right click with menu option
       page.once('dialog', dialog => {
         console.log(`Dialog message: ${dialog.message()}`);
         dialog.dismiss().catch(() => {});
       });
       await page.getByText('Edit').click();

   //shift click 
    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText('Example 1: Menu Element').click({ modifiers: ['Shift'] });
    await page.waitForTimeout(3000);


    //mousehover
      await page.goto('https://www.spicejet.com/');  
   await page.getByText('Add-ons').first().hover();  //hover on the element 
   await page.getByText('SpicePlus').first().click(); 

});
