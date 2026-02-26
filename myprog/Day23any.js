/// <reference lib="es2022" />
var num = 12.33;
var something;
something = 123;
something = "Sita";
something = true;
var lang = ["Hanuman", 1, true];
lang.push("Ram");
lang.push("Ram2");
console.log(lang[3]);
for (var a = 0; a < lang.length; a++) {
    console.log(lang[a]);
}
//function for any
function info(a, b) {
    if (a > b) {
        return "testing";
    }
    else {
        return 123;
    }
}
var n = info(10, 20);
console.log(n);
