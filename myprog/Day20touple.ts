/// <reference lib="es2022" />


let person:[string, number]=["Sameer",100];

console.log(person[1]);//print 1
let users:[string, number, boolean]= ["manu",101,true];

console.log(users[2]);//print 2
console.log(users[0]); //print 3
console.log("___________")
for (let i in users){
    console.log(users[i]);  
}

let data:[string, number][] = [["Salman", 200], ["Laliy",500]];
  console.log(data[0][0]);

 /*for (let a in data){
    console.log(data[a]);

     }
*/
 

   let customers:[string, number] = ["Ram", 201];
   customers.push("Ravi",401);
   console.log(customers);



