import shoppingCart from "./data.js";

/*
Use reduce() to total the groceries.
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

// My solution
function total(arr){
    // Reduce the array by adding the price values
    // use .toFixed() to truncate to two decimal places
    return arr.reduce((accumulator, currentValue) => (accumulator + currentValue.price), 0).toFixed(2)
}

// Suggested solution
// function total(arr){
//     const total = arr.reduce((acc, curr) => {
//         return acc + curr.price;
//     }, 0);
//    return total.toFixed(2);
// }

console.log(total(shoppingCart));

// Comments
// be sure to revise the reduce() syntax