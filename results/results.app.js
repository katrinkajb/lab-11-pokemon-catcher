import { getPokeStats, setPokeStats } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { renderResults } from './render-results.js';

// Display results

const table = document.getElementById('totals-rows');
const pokeArray = getPokeStats();

for (let pokemon of pokeArray) {
    const pokeItem = findById(pokeArray, pokemon.id);
    const resultsRow = renderResults(pokeItem);
        
    table.append(resultsRow);
}


// grab play-again-button and clear local storage when clicked

const replayButton = document.getElementById('play-again-button');

replayButton.addEventListener('click', () => {
    setPokeStats([]);
    window.location = '../index.html';

});
