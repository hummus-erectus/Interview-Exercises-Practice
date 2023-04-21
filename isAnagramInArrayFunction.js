/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

// My solution

function isAnagramInArray(anagram, arr){
    // Sort the target string alphabetically, negating case and spaces
    // It must be a string for comparison (comparing arrays checks if they occupy the same space in memory)
    const anagramSorted = anagram.toLowerCase().split('').filter(l => l !==' ').sort().join('')
    // Create an empty array
    let anagramArr = []
    // Loop through the potential anagrams array
    arr.forEach(str => {
        // Sort the target string alphabetically, negating case and spaces
        const possibleAnagram = str.split('').filter(l => l !==' ').sort().join('')
        // Check to see if the string is an anagram and if so add the not-sorted string to the array of anagrams
        if (possibleAnagram === anagramSorted) {
            anagramArr.push(str)
        }
    })
    // Return the resulting array of anagrams
    return anagramArr
}

// Suggested solution

// function sortPhrase(phrase){
//     return phrase.toLowerCase().split('').sort().join('').trim();
// }

// function isAnagramInArray(anagram, arr){
//     // use .filter()
//     // use sortPhrase() to sort both the input phrase and the current phrase in the array
//     // compare the two words to return true or false
//     return arr.filter(item => {
//         const word1 = sortPhrase(anagram);
//         const word2 = sortPhrase(item);

//         return word1 === word2;
//     })
// }

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));

// Comments

// filter() is very useful here
// trim() is good to know
// Try to avoid redundancy by reusing code where possible
