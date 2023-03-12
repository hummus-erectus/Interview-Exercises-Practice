import postData from "./data.js";

/* Popularity Contest

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media.

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get?

In data.js you'll find a list of Iggy's recent posts.
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

//My solution
function calcAverageLikes(data){
  // Call the reduce() method on the data array
  // Use a callback function that adds the accumulator and the current value's 'likes' property
  // Must include an initial value (of 0)
  return (data.reduce(
      (acc, currentVal) => acc + currentVal.likes,
      0
  ))/data.length
}

// Suggested solution
// function calcAverageLikes(data){
//     // reduce to single total
//     const total = data.reduce((acc, curr)=> {
//         // add curr.likes to acc
//         return acc += curr.likes
//     }, 0);
//     // divide the total by data.length to get the avg
//     return total / data.length;
// }


console.log(calcAverageLikes(postData))

//Comments
// No significant differences
