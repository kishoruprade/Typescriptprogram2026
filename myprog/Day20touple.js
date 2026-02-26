"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = ["Sameer", 100];
console.log(person[1]); //print 1
let users = ["manu", 101, true];
console.log(users[2]); //print 2
console.log(users[0]); //print 3
console.log("___________");
for (let i in users) {
    console.log(users[i]);
}
let data = [["Salman", 200], ["Laliy", 500]];
console.log(data[0][0]);
/*for (let a in data){
   console.log(data[a]);

    }
*/
let customers = ["Ram", 201];
customers.push("Ravi", 401);
console.log(customers);
//# sourceMappingURL=Day20touple.js.map