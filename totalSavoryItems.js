import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

// My solution
function totalSavory(arr){
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue.type === "savory"){
           return accumulator + currentValue.price
        }
        return accumulator
    }, 0)
}

// Suggested solution
// function totalSavory(arr){
//     return arr.reduce((acc, curr) => {
//         // check if the current item has a type of "savory"
//             // if yes, return acc += curr.price
//         if(curr.type === "savory") return acc += curr.price;
//             // if no, return acc
//         return acc;
//     }, 0);
// }

console.log(totalSavory(shoppingCart));

// Comments
// Important that if the conditional is not met, the accumulator should be returned