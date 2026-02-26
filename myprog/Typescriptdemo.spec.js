"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('typescript Program', async ({ page }) => {
    console.log("Hello world my first typescript program");
    function addition(a, b) {
        // let  a: any;
        //let b: any;
        return a + b;
    }
    addition(10, 20);
    console.log(addition);
});
//# sourceMappingURL=Typescriptdemo.spec.js.map