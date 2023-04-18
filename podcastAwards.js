podcasts = [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan", 
        duration: 150, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Bob Smith", "Camilla Lambert"], 
        genre: "true crime",
        rating: 5, 
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures", 
        duration: 99, 
        tags: ["entertainment", "general", "unicorns"], 
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 

// My solution

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
   const authors = data.reduce((accumulator, podcast) => {
       accumulator = accumulator.concat(podcast.hosts)
       return accumulator
   },[])
   return authors
}

function assignAwards(data){
    const authors = getHosts(data)
    let awardedHosts = []
    authors.forEach(host => {
        const random = Math.floor(Math.random()*awards.length)
        awardedHosts.push(`${awards[random]} ${host}`)
    })
    return awardedHosts
}

// Suggested solution

// const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

// function getHosts(data){
//    // reduce the podcasts data down to a list of hosts
//    return data.reduce((acc, curr)=>{
//        // add curr.hosts to the acc array
//        return acc.concat(curr.hosts);
//    }, [])
// }

// function assignAwards(data){
//     // use getHosts() to get a flat array of podcasts hosts
//     const hosts = getHosts(data);
//     // map through my array of hosts. for each:
//     return hosts.map(host => {
//          // use Math.random to generate a rand num between 0 and length of award arr
//          const randIndex = Math.floor(Math.random() * awards.length); 
//         // use the rand num to access a random award index
//         // use string literal to concast a random award to each host 
//         return `${awards[randIndex]} ${host}`;
//     });   
// }


console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));

// Comments

// Can use map() and flat() instead of reduce, e.g:
// return data.map(podcast => podcast.hosts).flat();

// In the reducer can use spread operator , e.g:
// return [...acc, ...curr.hosts];