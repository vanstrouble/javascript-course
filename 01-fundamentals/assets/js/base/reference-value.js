let a = 10;
let b = a;
a = 50;
console.log(a, b); // 10 10

let regina = {name: 'Regina'};
let aidee = 'Aidee';
console.log(regina, aidee); // {name: 'Regina'} 'Aidee'
aidee.name = 'Aidee';
console.log(regina, aidee); // {name: 'Aidee'} 'Aidee'

const changeName = ({...person}) => {
  person.name = 'Juan';
  return person;
};

let juan = {name: 'Juan'};
let memo = changeName(juan);
console.log(juan, memo); // {name: 'Aidee'} {name: 'Aidee'}

// Rest parameter example
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10, 15)); // 30

// Spread operator example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];

console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = {...obj1, ...obj2};

console.log(combinedObj); // {a: 1, b: 2, c: 3, d: 4}
