import { findById } from './utils.js';
// import { pokeData } from './pokemon-data.js';

const POKESTATS = 'POKESTATS';

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));
    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}

export function incrementEncountered(id) {
    const stats = getPokeStats();
    const poke = findById(stats, id);
    // const pokeName = pokeData.pokebase;

    if (!poke) {
        const newStats = {
            id: id,
            // name: pokeName,
            encountered: 1,
            caught: 0
        };
        stats.push(newStats);
    } else {
        poke.encountered++;
    }
    // console.log(pokebase);
    setPokeStats(stats);
}

export function incrementCaught(id) {
    const stats = getPokeStats();
    const poke = findById(stats, id);

    poke.caught++;

    setPokeStats(stats);
}
