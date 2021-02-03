// IMPORT MODULES under test here:
import { renderPokeImg, findById } from '../utils.js';
import { getPokeStats, incrementEncountered, setPokeStats, incrementCaught } from '../local-storage-utils.js';
import { makeEncounteredArray, makeCaughtArray, makeNamesArray } from '../results/munge.utils.js';

const test = QUnit.test;

const testArray = [
    { 
        'pokemon':'bulbasaur',
        'id':1,       
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    }, {    
        'pokemon':'charmander',
        'id':5,       
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    }, {
        'pokemon':'ivysaur',
        'id':2,       
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    }];
const testPokemon1 = { 'pokemon':'bulbasaur', 'id':1, 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' };

const resultsArrayTest = [
    { id: 10, name: 'squirtle', encountered: 10, caught: 0 },
    { id: 6, name: 'charmeleon', encountered: 6, caught: 1 },
    { id: 19, name: 'beedrill', encountered: 6, caught: 3 },
    { id: 21, name: 'pidgey', encountered: 5, caught: 0 },
    { id: 15, name: 'metapod', encountered: 1, caught: 0 },
    { id: 1, name: 'bulbasaur', encountered: 12, caught: 2 },
    { id: 14, name: 'caterpie', encountered: 4, caught: 2 },
    { id: 7, name: 'charizard', encountered: 7, caught: 2 },
    { id: 11, name: 'wartortle', encountered: 5, caught: 2 },
    { id: 17, name: 'weedle', encountered: 7, caught: 2 },
    { id: 18, name: 'kakuna', encountered: 4, caught: 0 },
    { id: 5, name: 'charmander', encountered: 6, caught: 3 },
    { id: 2, name: 'ivysaur', encountered: 5, caught: 3 },
    { id: 12, name: 'blastoise', encountered: 3, caught: 0 }
];

// Test for renderPokeImg
test('renderPokeImg should take an id and return an img', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = `<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPokeImg(testPokemon1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});

// findById
test('findById should take in an array and an id and return a name', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 'pokemon':'bulbasaur', 'id':1, 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(testArray, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

// incrementEncountered(id) - add 1
test('incrementEncountered should take an id and increment the encountered count by 1. Total encountered should be 4', (expect) => {
    const testStats = [{
        id: 4,
        encountered: 3,
        caught: 2
    }];

    setPokeStats(testStats);

    const expected = [{
        id: 4,
        encountered: 4,
        caught: 2
    }];

    incrementEncountered(4);

    const actual = getPokeStats();
    
    expect.deepEqual(actual, expected);
});

// incrementCaught
test('incrementCaught should take an id and increment the caught count by 1. Total caught should be 1', (expect) => {
    const testStats = [{
        id: 4,
        encountered: 1,
        caught: 0
    }];

    setPokeStats(testStats);

    const expected = [{
        id: 4,
        encountered: 1,
        caught: 1
    }];

    incrementCaught(4);

    const actual = getPokeStats();
    
    expect.deepEqual(actual, expected);
});

// makeDataArray
test('makeEncounteredArray should take an array of objects and return an array of numbers', (expect) => {

    const expected = [10, 6, 6, 5, 1, 12, 4, 7, 5, 7, 4, 6, 5, 3];

    const actual = makeEncounteredArray(resultsArrayTest);
    
    expect.deepEqual(actual, expected);
});

test('makeCaughtArray should take an array of objects and return an array of numbers', (expect) => {

    const expected = [0, 1, 3, 0, 0, 2, 2, 2, 2, 2, 0, 3, 3, 0];

    const actual = makeCaughtArray(resultsArrayTest);
    
    expect.deepEqual(actual, expected);
});

// // makeNamesArray
test('makeNamesArray should take an array of objects and return an array of strings', (expect) => {

    const expected = ['squirtle', 'charmeleon', 'beedrill', 'pidgey', 'metapod', 'bulbasaur', 'caterpie', 'charizard', 'wartortle', 'weedle', 'kakuna', 'charmander', 'ivysaur', 'blastoise'];

    const actual = makeNamesArray(resultsArrayTest);
    
    expect.deepEqual(actual, expected);
});