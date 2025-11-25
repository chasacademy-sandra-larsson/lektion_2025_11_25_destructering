const BASE_URL = "https://api.chucknorris.io/jokes/random";
const jokeContainer = document.getElementById("joke-container");
const btnNewJoke = document.getElementById("new-joke-btn");

async function fetchJokes() {

    try {
         const response = await fetch(`${BASE_URL}`);

        if(!response.ok) {
            throw new Error("Error " + response.status);
        }
        const joke = await response.json();

        console.log(joke)

        renderJoke(joke);

    } catch(error) {
        console.error("Failed to fetch", error.message);
    }
       
}

function renderJoke({icon_url, value} ) {

    jokeContainer.innerHTML = `
       <img src="${icon_url}" alt="Chuck Norris Joke">
       <p>${value}</p>
    `;
}



btnNewJoke.addEventListener("click", fetchJokes);