const pokemonCard = document.getElementById("pokemon-card");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/5";

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
   
    // Render UI

    // Hämtar objekt värden med desttructurering

    const { name,
            id,
            sprites: { 
                other: {
                    'official-artwork': { front_default: image}
                }
            },
            types: [{type: {name: type}}],
            stats: [
                {base_stat: hp},
                {base_stat: attack},
                {base_stat: defense}
            ]
         } = data;

     pokemonCard.innerHTML = `
        <img src="${image}" alt="${name}}" class="pokemon-img">
        <h2 class="pokemon-name">${name}</h2>
        <span class="pokemon-id">#${id}</span>
        <div>
            <span class="pokemon-type">${type}</span>
        </div>
        <div class="stats">
            <div class="stat-item">
                <span class="stat-value">${hp}</span>
                <span class="stat-label">HP</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${attack}</span>
                <span class="stat-label">ATK</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${defense}</span>
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