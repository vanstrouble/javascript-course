/**
 * The `Array.prototype.with()` method creates a new array with a specified element replaced by
 * a new value at a given index. It does not mutate the original array, but instead returns a new
 * array with the updated value.
 */

const state = [
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

const index = 1;
const newName = 'Green Lantern';
const newPower = 'Power Ring';

const newState = state.with(index, {
    ...state[index],
    name: newName,
    power: newPower
})

console.table(state);
console.table(newState);

// The original state is not mutated, a new array is created with the updated object
console.log(state === newState);
