
export function renderResults(pokemon) {
    const encounters = pokemon.encountered;
    const caught = pokemon.caught;
    const name = pokemon.name;
    
    const row = document.createElement('tr');

    const pName = document.createElement('td');
    pName.classList.add('pokemon-name');
    pName.textContent = `${name}`;
    row.append(pName);

    const pEncounters = document.createElement('td');
    pEncounters.classList.add('pokemon-encounter');
    pEncounters.textContent = `${encounters} encounters`;
    row.append(pEncounters);

    const pCaught = document.createElement('td');
    pCaught.classList.add('pokemon-caught');
    pCaught.textContent = `caught ${caught} time(s)`;
    row.append(pCaught);

    return row;
}