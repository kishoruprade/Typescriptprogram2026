/// <reference lib="es2022" />

let num:any = 12.33;
let something: any;
   something = 123;
   something = "Sita";
   something = true;
   let lang: any[] = ["Hanuman",1, true];
   lang.push("Ram");
    lang.push("Ram2");
  


    console.log(lang[3]);
     for (let a= 0;a<lang.length;a++){
        
      console.log(lang[a]);
        }
     
    //function for any
      function info(a:number, b:number):any{
         if (a>b){
            return "testing";
         }else {
            return 123;
         }
      }

      let n = info(10,20);
      console.log(n);