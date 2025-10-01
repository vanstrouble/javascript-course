// const fher = {
//     name: 'Fernando Herrera',
//     age: 35,
//     showInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// const pedro = {
//     name: 'Pedro Vázquez',
//     age: 24,
//     showInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// const aidee = {
//     name: 'Aidee Correa',
//     age: 28,
//     showInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// Traditional function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const pedro = new Person('Pedro Vázquez', 24);
const aidee = new Person('Aidee Correa', 28);
pedro.showInfo();
aidee.showInfo();

// ---------------------------------
