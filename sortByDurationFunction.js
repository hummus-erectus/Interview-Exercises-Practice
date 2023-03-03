import podcasts from "./data.js";

/* Welcome Aboard Scrimba Airlines

Our Scrimba Airlines in-flight entertainment package
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest.

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

//My solution
function sortByDuration(data, flightLength){
  // Check flightLength is equal to or less than 60
  if (flightLength <= 60){
  // If so, sort data from shortest to longest duration
      data.sort((a, b) => a.duration - b.duration)
  } else {
  // if not, sort data from longest to shortest
      data.sort((a, b) => b.duration - a.duration)
  }
  // console log numbered list using for loop and string literal
  for (let i = 0; i<data.length; i++){
      console.log(`${i+1}. ${data[i].title}, ${data[i].duration} minutes`)
  }

}

// Suggested solution
// function sortByDuration(data, flightLength){
//     // Check if flight is greater than 60 minutes
//     if(flightLength > 60){
//         // if yes, sort decending order (longest to shortest)
//         data.sort((a,b) => b.duration - a.duration);
//     } else {
//         data.sort((a,b) => a.duration - b.duration);
//     }
//    // loop through my sorted array
//    data.forEach(({title, duration}, index) => {
//        // construct a string using the title and duration props
//       // use the index to number the list
//       // console.log each item
//        console.log(`${index + 1}. ${title}, ${duration} minutes`);
//    });
// }


sortByDuration(podcasts, 60);

// Comments
// Revise sort() with fn
// If wanting to use forEach(), remember that the first argument is the element (which in this case is an object that gets deconstructed), the index of the element currently being processed in the array, and the array itself.

