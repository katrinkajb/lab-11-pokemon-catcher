// import { pokemon } from './pokemon-data.js';

export function renderResults(pokemon) {
    const encounters = pokemon.encountered;
    const caught = pokemon.caught;
    const name = pokemon.name;
    // const image = pokemon.url_image;
    
    const row = document.createElement('tr');

    // const tdImg = document.createElement('img');
    // tdImg.src = image;
    // tdImg.classList.add('pokemon-img');
    // row.append(tdImg);
    // tdImg.width = 50;
    // tdImg.height = 50;

    const tdName = document.createElement('td');
    tdName.classList.add('pokemon-name');
    tdName.textContent = `${name}`;
    row.append(tdName);

    const tdEncounters = document.createElement('td');
    tdEncounters.classList.add('pokemon-encounter');
    tdEncounters.textContent = `${encounters} encounters`;
    row.append(tdEncounters);

    const tdCaught = document.createElement('td');
    tdCaught.classList.add('pokemon-caught');
    tdCaught.textContent = `caught ${caught} time(s)`;
    row.append(tdCaught);

    return row;
}