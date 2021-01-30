import { getPokeStats, setPokeStats } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { renderResults } from './render-results.js';
import { makeEncounteredArray, makeCaughtArray, makeNamesArray } from '../results/munge.utils.js';

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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeNamesArray(pokeArray),
        datasets: [{
            label: '# of times encountered',
            data: makeEncounteredArray(pokeArray),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        },
        {
            label: '# of times caught',
            data: makeCaughtArray(pokeArray),
            backgroundColor:'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); 


