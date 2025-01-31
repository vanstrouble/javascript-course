// Descripción de `for...in` y `for...of` en JavaScript

// `for...in`
// El bucle `for...in` itera sobre todas las propiedades enumerables de un objeto que están
// en el objeto mismo y no en su cadena de prototipos.

const objeto = { a: 1, b: 2, c: 3 };

console.log('Ejemplo sencillo de for...in:');
for (const propiedad in objeto) {
    console.log(`${propiedad}: ${objeto[propiedad]}`);
}

// `for...of`
// El bucle `for...of` itera sobre objetos iterables (incluyendo Array, Map, Set, el objeto
// arguments, etc.) invocando un iterador personalizado con cada iteración.

const arreglo = [10, 20, 30];

console.log('Ejemplo sencillo de for...of:');
for (const valor of arreglo) {
    console.log(valor);
}

// Ejemplo avanzado de `for...in`
// Iterar sobre las propiedades de un objeto anidado

const objetoAnidado = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle Falsa',
        numero: 123
    }
};

console.log('Ejemplo avanzado de for...in:');
for (const propiedad in objetoAnidado) {
    if (typeof objetoAnidado[propiedad] === 'object') {
        for (const subPropiedad in objetoAnidado[propiedad]) {
            console.log(`${subPropiedad}: ${objetoAnidado[propiedad][subPropiedad]}`);
        }
    } else {
        console.log(`${propiedad}: ${objetoAnidado[propiedad]}`);
    }
}

// Ejemplo avanzado de `for...of`
// Iterar sobre un Map

const mapa = new Map([
    ['nombre', 'Ana'],
    ['edad', 25]
]);

console.log('Ejemplo avanzado de for...of:');
for (const [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`);
}

// Protip: Usar `for...of` con `Object.entries` para iterar sobre las propiedades de un objeto

const objetoProtip = { x: 1, y: 2, z: 3 };

console.log('Protip: Usar for...of con Object.entries:');
for (const [clave, valor] of Object.entries(objetoProtip)) {
    console.log(`${clave}: ${valor}`);
}
