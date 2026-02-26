"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["tom", "Naveen", "peter", "sam", "Sameer"];
names.push("New Name added");
console.log(names.length);
for (let a in names) {
    console.log(names[a]);
}
//using generic
let empNames = ["tom", "Naveen", "peter", "sam", "Sameer"];
let empIds = [1, 2, 3, 5, 7];
let empInfo = [1, "Naveen", true, null];
//multi type array
let values = ["Naeen", 100, "Sonu", "Saharaukh", 30, 50, "Salman"];
let val = ["Tom", "Sam", "Salman", true, false];
//first array declaration and init
let users;
users = ["namen", "Sameer", "Pawan", "sushant"];
//iterate the array in for loop
let empName = ["Sameer", "A", "Tom", "Manu", "Sam"];
for (let i = 0; i < empName.length; i++) {
    console.log(empName[i]);
}
console.log("................");
for (let e in users) {
    console.log(e + ":" + users[e]);
}
//# sourceMappingURL=Day18TypescriptArray.js.map