/// <reference lib="es2022" />
var today = new Date();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = daysOfWeek[today.getDay()];
//console.log(`Today is ${dayName}.`);
var day = "".concat(dayName);
//let day: string = "Monday"; // Example day, you can change this to test other days
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}
var mark = 65;
switch (true) {
    case (mark >= 90):
        console.log("Student is passed with A " + mark);
        break;
    case (mark >= 80):
        console.log("Student is passed with B " + mark);
        break;
    case (mark >= 70):
        console.log("Student is passed with C " + mark);
        break;
    case (mark >= 60):
        console.log("Student is passed with D ");
        break;
    default:
        console.log("Invalid marks entered");
        break;
    case (mark < 35):
        console.log("Student is Failed");
        break;
}
