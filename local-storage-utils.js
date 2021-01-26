import { findById } from './utils.js';

const POKESTATS = 'POKESTATS';


export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));
    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    } else {
        return stats;
    }
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementEncountered(id) {
    const stats = getPokeStats();

    const poke = findById(stats, id);

    if (!poke) {
        const newStats = {
            id: id,
            encountered: 1,
            caught: 0.
        };
        stats.push(newStats);
    } else {
        poke.seen++;
    }

    setPokeStats(stats);
}

export function incrementCaught(id) {
    const stats = getPokeStats;
    const poke = findById(stats, id);

    poke.caught++;
    
    setPokeStats(stats);
}
