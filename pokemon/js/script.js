const pokemonCard = document.getElementById("pokemon-card");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/10";

async function fetchPokemons() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        renderPokemon(data);

    } catch(error) {
        console.error("Error fetching pokemon", error);
        pokemonCard.innerHTML = "<div>Error Loading Pokemon</div>"
    }
 
}


function renderPokemon(data) {
    console.log(data);
     console.log(pokemonCard)
    // Render UI

     pokemonCard.innerHTML = `
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}}" class="pokemon-img">
        <h2 class="pokemon-name">${data.name}</h2>
        <div>
            <span class="pokemon-type">${data.types[0].type.name}</span>
        </div>
        <div class="stats">
            <div class="stat-item">
                <span class="stat-value">${data.stats[0].base_stat}</span>
                <span class="stat-label">HP</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${data.stats[1].base_stat}</span>
                <span class="stat-label">ATK</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${data.stats[2].base_stat}</span>
                <span class="stat-label">DEF</span>
            </div>
        </div>
    `;

    // Hämtar objekt-värden med punktnotation
    pokemonCard.innerHTML = `
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}}" class="pokemon-img">
        <h2 class="pokemon-name">${data.name}</h2>
        <div>
            <span class="pokemon-type">${data.types[0].type.name}</span>
        </div>
        <div class="stats">
            <div class="stat-item">
                <span class="stat-value">${data.stats[0].base_stat}</span>
                <span class="stat-label">HP</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${data.stats[1].base_stat}</span>
                <span class="stat-label">ATK</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${data.stats[2].base_stat}</span>
                <span class="stat-label">DEF</span>
            </div>
        </div>
    `;
}

fetchPokemons();