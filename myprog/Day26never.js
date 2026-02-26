/// <reference lib="es2022" />
var nothing;
function throwError(message) {
    throw new Error(message);
}
//throwError("This is an error message!");
function infiniteLoop() {
    while (true) {
        console.log("This loop will run forever!");
        break; // This will break the loop, but the function is still of type never because it doesn't return anything.
    }
}
infiniteLoop();
