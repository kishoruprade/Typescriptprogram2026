import {test, expect, Locator } from '@playwright/test';
import { Buffer } from 'buffer';
import path from 'path';


// single File upload test
test('singlefileupload test', async ({ page }) => {


  await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
  await page.setInputFiles('input[name="upfile"]', 'C:\\Users\\dell\\Downloads\\assetApplicationInvoiceLookup, 1_21_2026, 5_35_25 PM.csv'); //use setInputFiles to upload file

   await page.waitForTimeout(2000);
    
   //deselect the selected files from file upload
    await page.locator('input[name="upfile"]').setInputFiles([]);
     
    //upload the file on the fly
   await page.locator('input[name="upfile"]').setInputFiles({
  name: 'hanumanchalisa.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('This is a sample text file content written on fly by Kishor'),
});
     await page.getByRole('button', { name: 'Press' }).click();

     await page.waitForTimeout(5000);

   //multiple file upload
   await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
      await page.locator('input#filesToUpload').setInputFiles([
        path.join('C:/Users/dell/Downloads/Remittance Upload CSV Template (6).csv'),
       path.join('C:/Users/dell/Downloads/assetApplicationInvoiceLookup, 1_21_2026, 5_35_25 PM.csv'),
        path.join('C:/Users/dell/Downloads/hanumanchalisa.pdf')
]);

    await page.waitForTimeout(5000);

  //delect all the files
    await page.locator('input#filesToUpload').setInputFiles([]); //to delete all the files from the file upload input field

    
await page.waitForTimeout(5000);

});
