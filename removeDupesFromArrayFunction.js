/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

// My solution
function removeDupesFromArray(arr){
    let newArr = []
    for (let i = 0; i<arr.length; i++){
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
return newArr
}

// Suggested solution 1 (simple)
// function removeDupesFromArray(arr){
//     // create a new arr to hold unique items 
//     // for each item in recipe arr
//         // if the item is NOT yet in the unique arr, push it in
//         // if it is in the unique arr, move on to the next item (do nothing)
//     // return the unique arr 
    
//     const uniqueItems = []; 
    
//     arr.forEach(item => {
//        if(!uniqueItems.includes(item)){
//            uniqueItems.push(item);
//        }
//     });
//     return uniqueItems;
// }


// Suggested solution 2
// function removeDupesFromArray(arr){
//     // create a new object to keep track of duplicates 
//     // use filter to loop thorugh each item in the arr
//         // for each item in arr
//             // look up the item in the lookup table
//             // if the item does NOT exist in the lookup, add it and return true
//         // return false
    
//     const trackDupes = {};
    
//     return arr.filter(item => {
//         if(!trackDupes[item]){
//             trackDupes[item] = true;
//             return true;
//         }
//         return false;
//     });
// }

// Suggested solution 3
// function removeDupesFromArray(arr){
//     return [...new Set(arr)];
// }

console.log(removeDupesFromArray(eggScrambleRecipe));

// Comments
// Solution 1 is similar, should get more comfortable using forEach()
// Solution 2 avoids nested looping with filter()
// Solution 3 is a neat trick so should definitely study Sets