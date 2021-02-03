// want to turn our data objs into an array of #s

export function makeEncounteredArray(arrayOfObjects) {
    const encounteredArray = [];

    for (let item of arrayOfObjects) {
        encounteredArray.push(item.encountered);
    }

    return encounteredArray;
}


export function makeCaughtArray(arrayOfObjects) {
    const caughtArray = [];

    for (let item of arrayOfObjects) {
        caughtArray.push(item.caught);
    }

    return caughtArray;
}


// want to turn data objs into array of strings
export function makeNamesArray(arrayOfObjects) {
    const namesArray = [];

    for (let item of arrayOfObjects) {
        namesArray.push(item.name);
    }

    return namesArray;
}