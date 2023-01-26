/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

// My solution
function emojifyWord(word){
    let newWord =''
    if (word.startsWith(':') && word.endsWith(':')){
        newWord = word.slice(1,-1)
        for (let key in emojis) {
            if (key === newWord){
                return emojis[key]
            }
        }
        return newWord
    }
    return word
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 


// My solution
function emojifyPhrase(phrase){
    let arr = phrase.split(' ')
    let sentence = arr.map((a) => emojifyWord(a))
    sentence = sentence.join(' ')
    return sentence
}

// Suggested solution
// function emojifyWord(word){
//     // starts or ends with colon?
//         // no: return word 
//     if(!word.startsWith(":") && !word.endsWith(":")) return word; 
    
//     // yes: remove colons 
//     const slice = word.slice(1, -1);
//     // exists in emoji object? 
//     if(emojis[slice]){
//          // yes: return emoji 
//          return emojis[slice]
//     } else {
//         return slice;
//     }   
// }

// function emojifyPhrase(phrase){
//     // split the passed in phrase into an array
//     // map through the array and call emojifyWord() on each word in the phrase
//     // join the array back together as a string, and return
//     const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
//     return newPhrase.join(" ")
    
// }



console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

// Comments
// For...in loop was unnecessary, can just check directly whether the string exists as a property of the emoji object. I like using the return statement to end the for loop.
