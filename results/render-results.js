import { pokeData } from '../pokemon-data.js';
import { findById } from '../utils.js';

export function renderResults(pokemonData) {
    const pokemonItem = findById(pokeData, pokemonData.id);
    const encounters = pokemonData.encountered;
    const caught = pokemonData.caught;
    const name = pokemonData.name;
    const image = pokemonItem.url_image;
    
    const row = document.createElement('tr');

    const tdImg = document.createElement('img');
    tdImg.src = image;
    tdImg.classList.add('pokemon-img');
    tdImg.width = 20;
    tdImg.height = 20;
    row.append(tdImg);

    const tdName = document.createElement('td');
    tdName.classList.add('pokemon-name');
    tdName.textContent = `${name}`;
    row.append(tdName);

    const tdEncounters = document.createElement('td');
    tdEncounters.classList.add('pokemon-encounter');
    tdEncounters.textContent = `${encounters} encounter(s)`;
    row.append(tdEncounters);

    const tdCaught = document.createElement('td');
    tdCaught.classList.add('pokemon-caught');
    tdCaught.textContent = `caught ${caught} time(s)`;
    row.append(tdCaught);

    return row;
}