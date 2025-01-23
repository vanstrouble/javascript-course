// 1. Declaración de Función
// Usar cuando necesitas definir una función que puede ser elevada (llamada antes de su declaración).
// Buena práctica: Usa declaraciones de funciones para funciones utilitarias que se usan en todo tu código.

function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Expresión de Función
// Usar cuando necesitas definir una función como parte de una asignación de variable. No es elevada.
// Buena práctica: Usa expresiones de funciones para funciones que se usan solo en un ámbito específico.

const add = function(a, b) {
    return a + b;
};

// 3. Función Flecha
// Usar para una sintaxis más corta y cuando necesitas preservar el contexto `this` del código circundante.
// Buena práctica: Usa funciones flecha para funciones pequeñas que no son métodos.

const multiply = (a, b) => a * b;

// 4. Expresión de Función Ejecutada Inmediatamente (IIFE)
// Usar cuando necesitas ejecutar una función inmediatamente después de definirla. Útil para el patrón de módulo.
// Buena práctica: Usa IIFE para crear un nuevo ámbito y evitar contaminar el espacio de nombres global.

(function() {
    console.log('This is an IIFE');
})();

// 5. Función Generadora
// Usar cuando necesitas definir una función que puede ser pausada y resumida, útil para manejar operaciones asíncronas.
// Buena práctica: Usa funciones generadoras para flujos de trabajo asíncronos complejos.

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

// 6. Función Asíncrona
// Usar cuando necesitas manejar operaciones asíncronas con una sintaxis más legible usando `async` y `await`.
// Buena práctica: Usa funciones asíncronas para manejar promesas en un código que parece más sincrónico.

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Buenas Prácticas:
// - Usa nombres de funciones significativos que describan lo que hace la función.
// - Mantén las funciones pequeñas y enfocadas en una sola tarea.
// - Evita usar variables globales dentro de las funciones.
// - Usa parámetros por defecto para manejar los argumentos de las funciones.
// - Documenta tus funciones con comentarios para explicar su propósito y uso.
