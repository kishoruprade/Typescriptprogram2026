/// <reference lib="es2022" />
var flag = false;
if (flag) {
    console.log("This code will always execute.");
}
else {
    console.log("This codewill never execute.");
}
//Conditional operators are <, >, <=, >=, ===, !=
function greaterNumber(x, y) {
    console.log("Comparing numbers: " + x + " and " + y);
    if (x >= y) {
        console.log("x is greater than y and number is : " + x);
    }
    else {
        console.log("y is greater than x  and number is:" + y);
    }
}
greaterNumber(5, 10);
//If else if statement
var a = 80;
var b = 60;
var c = 1130;
if (a > b && a > c) {
    console.log("a is the greatest number: " + a);
}
else if (b > c) {
    console.log("b is the greatest number: " + b);
}
else {
    console.log("c is the greatest number: " + c);
}
//Ternary operator
console.log("Ternary operator example:" + "?");
var number1 = 300;
var number2 = 500;
number1 > number2 ? console.log("number1 is greater than number2: " + number1) : console.log("number2 is greater than number1: " + number2);
var browser = "chrome";
browser === "chrome" ? console.log("Launch chrome.") : console.log("launch other browser like mozilla | webkit | edge.");
