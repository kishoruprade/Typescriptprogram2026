 let names: string[] = ["tom", "Naveen","peter","sam","Sameer"]
  names.push("New Name added");
 console.log(names.length);

  for (let a in names ){
    console.log(names[a]);
  }

 //using generic
 let empNames:Array<string> =["tom", "Naveen","peter","sam","Sameer"];
  let empIds:Array<number> =[1,2,3,5,7];
  let empInfo:Array<any>=[1,"Naveen",true, null];

  
//multi type array
let values: (String | number)[]=["Naeen", 100, "Sonu","Saharaukh",30,50,"Salman"];
let val:(String | Boolean)[] = ["Tom", "Sam","Salman",true,false]; 

//first array declaration and init
let users:Array<String>;
 users = ["namen", "Sameer","Pawan", "sushant"];




 //iterate the array in for loop
 let empName:Array<string>= ["Sameer","A", "Tom", "Manu", "Sam"];

 for(let i = 0; i<empName.length;i++)
 {
    console.log(empName[i]);

 }
    console.log("................");

 for (let e in users){
    console.log(e + ":" +users[e]);

 }
 


 