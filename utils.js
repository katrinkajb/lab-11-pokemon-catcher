import { pokeData } from './pokemon-data.js';

// Generate random pokemon
export function randomPokemon() {

    const randomIndex = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomIndex];
}

// Load 3 pokemon on the page
export function setThreePokemon() {
    let pokeOne = randomPokemon();
    let pokeTwo = randomPokemon();
    let pokeThree = randomPokemon();
    
    while (pokeOne.id === pokeTwo.id || pokeTwo.id === pokeThree.id || pokeOne.id === pokeThree.id) {
        randomPokemon();
        pokeOne = randomPokemon();
        pokeTwo = randomPokemon();
        pokeThree = randomPokemon();
    }
    
    const img1 = renderPokeImg(pokeOne);
    const img2 = renderPokeImg(pokeTwo);
    const img3 = renderPokeImg(pokeThree);
    
    const div = document.getElementById('poke-pics');
    div.append(img1, img2, img3);
}

// Check for matching ids and loop until unique
export function uniqueCheck() {

}

// Function - render img from Pokemon data
export function renderPokeImg(pokemonItem) {
    const image = document.createElement('img');
    image.src = pokemonItem.url_image;
    // Below isn't working
    image.classList.add = 'pokemon-pics';

    return image;
}

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item.pokemon;
        }
    }
}