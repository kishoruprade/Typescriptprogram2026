"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const buffer_1 = require("buffer");
const path_1 = __importDefault(require("path"));
// single File upload test
(0, test_1.test)('singlefileupload test', async ({ page }) => {
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
    await page.setInputFiles('input[name="upfile"]', 'C:\\Users\\dell\\Downloads\\assetApplicationInvoiceLookup, 1_21_2026, 5_35_25 PM.csv'); //use setInputFiles to upload file
    await page.waitForTimeout(2000);
    //deselect the selected files from file upload
    await page.locator('input[name="upfile"]').setInputFiles([]);
    //upload the file on the fly
    await page.locator('input[name="upfile"]').setInputFiles({
        name: 'hanumanchalisa.txt',
        mimeType: 'text/plain',
        buffer: buffer_1.Buffer.from('This is a sample text file content written on fly by Kishor'),
    });
    await page.getByRole('button', { name: 'Press' }).click();
    await page.waitForTimeout(5000);
    //multiple file upload
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('input#filesToUpload').setInputFiles([
        path_1.default.join('C:/Users/dell/Downloads/Remittance Upload CSV Template (6).csv'),
        path_1.default.join('C:/Users/dell/Downloads/assetApplicationInvoiceLookup, 1_21_2026, 5_35_25 PM.csv'),
        path_1.default.join('C:/Users/dell/Downloads/hanumanchalisa.pdf')
    ]);
    await page.waitForTimeout(5000);
    //delect all the files
    await page.locator('input#filesToUpload').setInputFiles([]); //to delete all the files from the file upload input field
    await page.waitForTimeout(5000);
});
//# sourceMappingURL=Day13singlefileupload.spec.js.map