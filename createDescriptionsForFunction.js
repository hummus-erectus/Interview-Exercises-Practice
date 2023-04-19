const podcasts = [
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
        id: 4,
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        id: 5,
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        id: 6,
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

// My solution
function createDescriptionsFor(data){
    // Create new, empty array
    let descArray = []
    // Loop through the podcasts
    data.forEach((podcast) => {
        // Create an empty hosts array
        let hosts = ''
        // Check if there are multiple hosts
        if(podcast.hosts.length === 1){
            // Assign the only host to the hosts variable
            hosts = podcast.hosts[0]
        } else if(podcast.hosts.length === 2){
            // Join the two hosts as a string and assign it to the hosts variable
            let hostsArr = [...podcast.hosts]
            hosts = hostsArr.join(' and ')
        } else {
            // Remove the last item in the array and assign it to a variable
            let hostsArr = [...podcast.hosts]
            const last = hostsArr.pop()
            // Create a new string joining the resulting array and then add the final host
            const str = `${hostsArr.join(', ')}, and ${last}`
            hosts = str
        }
        
        // Copy the podcast object and add a new property, 'description' to the object. Assign it  a string literal
        const descPodcast = {
            ...podcast,
            description: `${podcast.title} is a ${podcast.duration} minute ${podcast.genre} podcast hosted by ${hosts}`
        }
        // Add the object to the new array
        descArray.push(descPodcast)
    })
    // Return the array
    return descArray
}

// Suggested solution

// function createDescriptionsFor(data){
//     // map through the data
//     return data.map(podcast => {
//         const {title, duration, genre, hosts} = podcast;
//         // use title, duration, genre and host data to make description
//         // for each podcast object, add description prop
//         return {
//             ...podcast,
//             description: `${title} is a ${duration} minute ${genre} podcast hosted 
//             by ${hosts[0]}.`
//         };
//     })
// }

console.log(createDescriptionsFor(podcasts))

// Comments
// Use map()!
// Restructuring and spreading are both useful in the sample solution
// Scrim is missing for the stretch goal
