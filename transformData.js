import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/

// My solution
function transformData(data){
// Create a new variable and use the map() method to loop through the data array
const mappedData = data.map(item => 
    ({
// Use string literals to set the fullName property
        fullName: `${item.name.first} ${item.name.last}`,
// Use the toDateString() method to reformat the date of birth
        birthday: new Date (item.dob.date).toDateString()
    })
)
// Return the new array
return mappedData
}

// Suggested solution
// function transformData(data){
//     // use map to loop through the data
//     return data.map(({name, dob}) => {
//         // return an object with the two new properties
//         // concat the first and last name
//          // create a new date object, passing in the dob
//         // format by calling toDateString() method
//         return {
//             fullName: `${name.first} ${name.last}`,
//             birthday: new Date(dob.date).toDateString()
//         }
//     })
// }

console.log(transformData(userData));

// Comments
// Fundamentally the same solution with desctructuring
