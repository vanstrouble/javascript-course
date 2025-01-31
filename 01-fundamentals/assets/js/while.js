const prompt = require('prompt-sync')(); // Necesitarás instalar el paquete prompt-sync

// while.js

// El bucle `while` ejecuta un bloque de código mientras una condición especificada sea verdadera.
// Es útil cuando no sabemos cuántas veces necesitamos repetir el bloque de código.

let count = 0;
console.log("Ejemplo de bucle while:");
while (count < 5) {
    console.log(`El valor de count es: ${count}`);
    count++;
}

// El bucle `do...while` es similar al bucle `while`, pero siempre ejecuta el bloque de código al menos una vez,
// antes de verificar la condición.

let num = 0;
console.log("\nEjemplo de bucle do...while:");
do {
    console.log(`El valor de num es: ${num}`);
    num++;
} while (num < 5);

// Pro Tip: Podemos usar bucles `while` y `do...while` para leer datos de una fuente hasta que se cumpla una condición.
// Ejemplo avanzado: Leer números del usuario hasta que ingrese un número negativo.


let input;
console.log("\nEjemplo avanzado: Leer números del usuario hasta que ingrese un número negativo:");
do {
    input = parseInt(prompt("Ingresa un número (negativo para salir): "), 10);
    if (input >= 0) {
        console.log(`Ingresaste: ${input}`);
    }
} while (input >= 0);

console.log("Has salido del bucle.");
