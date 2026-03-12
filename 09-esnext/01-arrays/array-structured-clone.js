/**
 *  Structured Clone is a new method in JavaScript that allows you to create a deep copy of an object or array.
 * It is similar to the spread operator, but it can handle more complex data structures, such as nested objects
 * and arrays. The structuredClone() method is part of the HTML Living Standard and is supported in modern browsers.
 */

const superHeroes = [
    {
        id: 1,
        name: 'Batman',
        power: 'Money'
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Strength'
    },
    {
        id: 3,
        name: 'Flash',
        power: 'Super Speed'
    },
    {
        id: 4,
        name: 'Aquaman',
        power: 'Talking to Fish'
    }
]

const superHeroesCopy = [...superHeroes]

console.table(superHeroes);
console.table(superHeroesCopy);

// Both arrays have the same content, but they are different objects in memory
console.log(superHeroes === superHeroesCopy); // false

const superHeroesCopy2 = structuredClone(superHeroes);
console.log(superHeroes === superHeroesCopy2); // false
