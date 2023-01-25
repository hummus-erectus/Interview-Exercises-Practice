/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    const upper = word.charAt(0).toUpperCase() + word.slice(1)
    return upper;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    const words = str.split(" ")
    for (let i=0; i < words.length; i++){
        words[i]=capitalizeWord(words[i])
    }
    return words.join(" ")
    
}


// Suggested solution
// function capitalizeWord(word){
//     return word[0].toUpperCase() + word.slice(1);
// }

// function toTitleCase(str){
//     // split sentence into an array of words
//     const sentenceArr = str.split(' ');
//     // loop through the arrays of words and capitalizeWord func on each word
//     const capArr = sentenceArr.map(word => capitalizeWord(word));
//     // join sentence arr back into a string
//     return capArr.join(' ');
// }

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

//Comments
// The charAt() method and using the index to select a character in a string are functionally equivalent, but charAt() is a method provided by the String object, while using the index to select a character is a feature of JavaScript's string data type.

//Using .map() for part 2 is more concise.
