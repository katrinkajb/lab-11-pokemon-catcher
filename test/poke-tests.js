// IMPORT MODULES under test here:
import { renderPokeImg, findById } from '../utils.js';

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
test('this function should take in an array and an id and return a name', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'bulbasaur';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, testArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});