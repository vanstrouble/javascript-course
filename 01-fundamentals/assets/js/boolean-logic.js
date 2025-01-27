const returnTrue = () => {
    console.log('returnTrue');
    return true;
};

const returnFalse = () => {
    console.log('returnFalse');
    return false;
};

console.warn("Not ! Negation");
console.log(true);
console.log(!true);
console.log(!false);

console.warn("AND && Conjunction");
console.log(returnTrue() && returnTrue()); // true
console.log(returnTrue() && returnFalse()); // false
console.log(returnFalse() && returnTrue()); // false
console.log(returnFalse() && returnFalse()); // false

console.warn("OR || Disjunction");
console.log(returnTrue() || returnTrue()); // true
console.log(returnTrue() || returnFalse()); // true
console.log(returnFalse() || returnTrue()); // true
console.log(returnFalse() || returnFalse()); // false
