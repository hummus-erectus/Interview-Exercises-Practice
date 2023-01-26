/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

// My solution
function isAnagram(str1, str2){
    if (str1.length != str2.length){
        return 'false'
    } else {
        let sortedStr1=str1.split('').sort().join('')
        let sortedStr2=str2.split('').sort().join('')
        if (sortedStr1 === sortedStr2){
            return 'true'
        } else {
            return 'false'
        }
    }
}

// Suggested solution
// function isAnagram(str1, str2){
//     // are the strings the same length? if yes return false. 
//     if(str1.length !== str2.length) return false;
    
//     // split string into an array
//     // sort
//     // join the array back together as a string
//     const newStr1 = str1.split('').sort().join('');
    
//     // repeat with second word
//     const newStr2 = str2.split('').sort().join('');

//     // are the two words equal? true or false
//     return newStr1 === newStr2;
// }

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));

// Comments
// Ended up at the same solution but got tripped up on some methods
//     .sort is a method for arrays only
//     .The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. 