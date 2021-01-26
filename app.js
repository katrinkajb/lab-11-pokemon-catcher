import { randomPokemon, renderPokeImg } from '../utils.js';


export function setThreePokemon() {
    // Load 3 pokemon on the page
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
