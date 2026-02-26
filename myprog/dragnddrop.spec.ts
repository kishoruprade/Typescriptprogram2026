import { test, expect } from '@playwright/test';

test('draganddrop test', async ({ page }) => {
    //Launch the browser and navigate to url
   await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

   //one way to use drag and drop method
   const source = page.locator('#draggable');
    const target = page.locator('#droppable');
    await source.dragTo(target); 

  //another way to drag and drop
   //await page.locator('#draggable').dragTo(page.locator('#droppable'));  //drag and drop method
   await page.waitForTimeout(3000);
  

   //third way to drag and drop
      await page.locator('#draggable').hover();
        await page.mouse.down();
        await page.locator('#droppable').hover();
        await page.mouse.up();

});
