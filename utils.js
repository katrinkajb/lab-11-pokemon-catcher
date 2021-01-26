import { pokeData } from '../pokemon-data.js';

// Function 1 - Generate random pokemon
export function randomPokemon() {

    const randomIndex = Math.floor(Math.random() * pokeData.length);
    console.log(randomIndex);
    return pokeData[randomIndex];

}

// // Function 2 - check for matching ids and loop until unique
export function uniqueCheck() {

}


// Function - render img from Pokemon data
export function renderPokeImg(pokemonItem) {
    const image = document.createElement('img');
    image.src = pokemonItem.url_image;
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