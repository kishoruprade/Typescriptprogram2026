/// <reference lib="es2022" />
let nothing:never;

function throwError(message:string):never{
    throw new Error(message);
}

//throwError("This is an error message!");

function infiniteLoop():never{
    while(true){
        //console.log("This loop will run forever!");
        // This will break the loop, but the function is still of type never because it doesn't return anything.
       
    }   
    

}

    infiniteLoop(); 