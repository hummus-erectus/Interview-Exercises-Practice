/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

// My solution
function clearTheGarden(arr){
    return arr.filter((emoji) => emoji.group === "animal bug" || emoji.group === "plant flower")
}


fetch(api)
    .then(response => response.json())
    .then(result => clearTheGarden(result))
    .then((data) => {
       data.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });
    })
    .catch(err => console.log(err));

// Suggested solution is identical

// Comments
// Note that 'emoji.group === "animal bug" || "plant flower"' will not work as the second part of the expression "plant flower" is treated as a truthy value, which means the filter condition will always evaluate to true for all items in the data array. This is because the || operator in JavaScript returns the first truthy value it encounters, or the last value if all values are falsy. In this case, "plant flower" is a truthy value, so the expression will always be true.

