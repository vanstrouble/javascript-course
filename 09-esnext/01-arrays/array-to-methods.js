/**
 * Array to Methods
 * The modern `to*` array methods (like `toSorted`, `toReversed`, `toSpliced`, and `with`) return a new array
 * instead of mutating the original one. They follow an immutable approach: transform data and keep the source intact.
 */

const heroes = [
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

const heroesCopy = heroes;
console.log('are they the same between heroes and heroesCopy?', heroes === heroesCopy); // true, both variables reference the same array

// heroes.sort((a, b) => a.name.localeCompare(b.name));

console.table(heroes);
// console.table(heroesCopy);

const heroesSorted = heroes.toSorted((a, b) => a.name.localeCompare(b.name));

console.table(heroesSorted);
console.log('are they the same between heroes and heroesSorted?', heroes === heroesSorted); // false, toSorted creates a new array with the sorted values
