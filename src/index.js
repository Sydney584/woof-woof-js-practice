const BASE_URL = "http://localhost:3000/";


// OBJECTIVE 1
// When the page loads, get all of the pups info/objects. 
// Each pup's  name, to the div bar
//When you have this information, you'll need to add a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).
// 1. Get the relevant data
// 2. Create a component with the data
// 3. Append the component to the DOM


function getpups() {
    const url = `${BASE_URL}pups`;
    return fetch(url)
    .then(resp => resp.json())
    // .then(data => console.log(data));
     
}

const pups = getpups();
console.log(pups);



// const dogBarDiv = document.getElementById('dog-bar');
// const dogSpotDiv = document.getElementById('dog-info');
// const filterBtn = document.getElementById('good-dog-filter');
// const dbURL = 'http://localhost:3000/pups';