/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/ 

const slotMachine = document.querySelector('.emoji-slots-game'); 
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

// My solution

function makeFruitArray(arr){
    // Filter the array to just return objects with the value for fruit in the group property
   return arr.filter(emoji => emoji.group === "food fruit")
}

function getRandomFruits(arr){
    // Declare an empty array to hold the random selection of fruit
    let randomArray = []
    // Loop through 9 times
    for (let i = 0; i<9; i++){
        // Get a random number that corresponds to an index of the array
        const randomNum = Math.floor(Math.random()*arr.length)
        // Push the object at that index to the new array
        randomArray.push(arr[randomNum])
    }
    return randomArray
}

// write your fetch request here
fetch(food)
    // Convert the response to a json object, call the getRandomFruits function on the result, then loop through the random array, setting the innerHTML of one of the li elements of the ul to the htmlCode value for each object
    .then(response => response.json())
    .then(result => getRandomFruits(makeFruitArray(result)))
    .then(data => {
        for (let i = 0; i < slotMachine.children.length; i++) {
            slotMachine.children[i].innerHTML = data[i].htmlCode[0]
        }
    })
    .catch(err => console.log(err))

    // Suggested solution
    // function makeFruitArray(arr){
    //     // filter by group prop, looking for a str that includes the word "fruit"
    //     return arr.filter(emoji => emoji.group.includes("fruit"));
    //  }
     
    //  function getRandomFruits(arr){
    //      // initialize a new arr to hold 9 random fruits
    //      const randomFruits = [];
    //      // create a loop 0 - 9
    //      for(let i = 0; i < 9; i++){
    //          // generate a random num
    //          // use the random number as an index to choose a random fruit from the fruit arr
    //          // push the random fruit into new arr 
    //          let randNum = Math.floor(Math.random() * arr.length);
    //          randomFruits.push(arr[randNum]);
    //      }
    //      console.log(randomFruits.length)
    //      return randomFruits
    //  }
     
    //  // write your fetch request here 
    //  fetch(food)
    //      .then(response => response.json())
    //      .then(result => makeFruitArray(result))
    //      .then(fruits => getRandomFruits(fruits))
    //      .then(fruit => {
    //          fruit.forEach(fruit => {
    //              slotMachine.innerHTML += `
    //                  <li>
    //                      ${fruit.htmlCode}
    //                  </li>
    //              `
    //          })
    //      })
    //      .catch(err => console.log(err))

    // Comments
    // Very similar. Could have deleted the initial elements, but knowing how to use .children is useful