let userName = 'Regina';
console.log(userName);

userName = 'Antonio';
console.log(userName);

userName = 696969;
console.log(`Type of value: ${typeof userName}, with the value: ${userName}`);

let isCouple = true;
console.log(`${isCouple ? 'Yes' : 'No'}`);

let intNumber = 10;
let floatNumber = 10.5;
console.log(`Value: ${intNumber} is ${typeof intNumber} and ${floatNumber} is ${typeof floatNumber}`);

let undefinedVar;
let nullVar = null;
console.log(`Undefined: ${undefinedVar} and Null: ${nullVar}`);

let symbol1 = Symbol('name');
let symbol2 = Symbol('name');
console.log(symbol1 === symbol2);
