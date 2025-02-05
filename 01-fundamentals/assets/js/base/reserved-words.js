// Ejemplos de uso de palabras reservadas en JavaScript

// 1. Uso de 'if' y 'else'
let number = 10;
if (number > 5) {
    console.log('El número es mayor que 5');
} else {
    console.log('El número es 5 o menor');
}

// 2. Uso de 'for'
for (let i = 0; i < 5; i++) {
    console.log('Iteración número: ' + i);
}

// 3. Uso de 'function'
function greet(name) {
    return 'Hola, ' + name;
}
console.log(greet('Mundo'));

// 4. Uso de 'return'
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// 5. Uso de 'const' y 'let'
const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;
console.log('Área del círculo: ' + area);

// 6. Uso de 'switch'
let day = 3;
switch (day) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    default:
        console.log('Otro día');
}

// 7. Uso de 'try' y 'catch'
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('Ocurrió un error: ' + error.message);
}

// 8. Uso de 'class'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hola, mi nombre es ' + this.name);
    }
}

let person = new Person('Juan', 30);
person.greet();
