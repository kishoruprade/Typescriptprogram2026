
import { test } from '@playwright/test';  

test('Dropdown handling', async ({ page }) => {
await page.getByRole('button', { name: 'Allow all' }).click();

  const countryDropdown = 'select#Contact_CountryCode';
   // await page.selectOption(countryDropdown, { index: 3}); //select the dropdown based on index
    await page.selectOption(countryDropdown, { value: 'AO'}); //select the dropdown based on value attribute
    //await page.selectOption(countryDropdown, { label: 'India'}); //select the dropdown based on visible text
     
      //select#Contact_CountryCode>option
      const allOptions = await page.$$(countryDropdown + '> option');  //$$ is used for all the available options in the dropdown
      console.log("Number of options in dropdown:", allOptions.length);

       for (const e of allOptions) {
        const text = await e.textContent();
        console.log("Dropdown option text:", text);
          if (text === 'India') {
            const value = await e.getAttribute('value');
            console.log("Selecting dropdown option with text 'India' and value:", value);
            await page.selectOption(countryDropdown, { value: value! });
            break;
          }

       }
     
      // await page.waitForTimeout(50000);

      });





