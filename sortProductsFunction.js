import products from "./data.js";

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

// My solution
function sortProducts(data){
    // Use the sort() method on the data array using a compare function that takes as its parameters two adjacent objects 
    // The function should check whether the 'price' value of the first object is greater than that of the the second (it does this through subtracting the second from the first and seeing if the result is positive, negative or zero)
    return data.sort((a,b) => a.price - b.price)
    
}

// Suggested Solution
// function sortProducts(data){
//     return data.sort((a,b) => {
//         return a.price - b.price
//     });
// }

const listByCheapest = sortProducts(products);
console.log(listByCheapest);

// Comments
// To list just the item and price use:
// listByCheapest.forEach(item => console.log(item.product, item.price))

// Explanation of sort() method:

/* 

positive num - a before b 
neg - b before a 
0 - nothing changes 

*/ 

/*
a - b sorts numbers in ascending order and 
b - a sorts numbers in descending order 
*/ 


