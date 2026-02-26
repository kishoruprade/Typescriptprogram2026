import { test, expect } from '@playwright/test';

test('typescript Program', async ({ page }) => {


console.log("Hello world my first typescript program");
    

 function addition(a:number, b:number){
    // let  a: any;
     //let b: any;
    return  a+b;

 }
   addition(10,20);
   console.log(addition);

});
