import { incrementCaught, incrementEncountered } from './local-storage-utils.js';
import { pokeData } from './pokemon-data.js';

// Generate random pokemon
export function randomPokemon() {
    
    const randomIndex = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomIndex];
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
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
    
    incrementEncountered(pokeOne.id);
    incrementEncountered(pokeTwo.id);
    incrementEncountered(pokeThree.id);

    const div = document.getElementById('poke-pics');
    div.append(img1, img2, img3);
}

// Function - render img from Pokemon data
export function renderPokeImg(pokemonItem) {
    const image = document.createElement('img');
    image.src = pokemonItem.url_image;
    // Below isn't working
    image.classList.add = 'pokemon-pics';

    image.addEventListener('click', () => {
        incrementCaught(pokemonItem.id);

        // if (numberOfTurns < 10) {
        //     setThreePokemon();
        // } else {
        //     window.location = 'results';
        // }
    });

    return image;
}
