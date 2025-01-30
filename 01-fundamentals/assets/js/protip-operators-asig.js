// Asignación simple
let x = 10; // Asigna el valor 10 a la variable x

// Asignación de adición
x += 5; // Equivalente a x = x + 5, ahora x es 15

// Asignación de sustracción
x -= 3; // Equivalente a x = x - 3, ahora x es 12

// Asignación de multiplicación
x *= 2; // Equivalente a x = x * 2, ahora x es 24

// Asignación de división
x /= 4; // Equivalente a x = x / 4, ahora x es 6

// Asignación de residuo
x %= 5; // Equivalente a x = x % 5, ahora x es 1

// Asignación de exponenciación
x **= 3; // Equivalente a x = x ** 3, ahora x es 1

// Asignación AND
let y = true;
y &&= false; // Equivalente a y = y && false, ahora y es false

// Asignación OR
y ||= true; // Equivalente a y = y || true, ahora y es true

// Asignación de anulación lógica
let z = null;
z ??= 'default'; // Equivalente a z = z ?? 'default', ahora z es 'default'
// Ejemplo de asignación con operadores booleanos

// Asignación AND con valores booleanos
let a = true;
a &&= false; // Equivalente a a = a && false, ahora a es false

// Asignación OR con valores booleanos
let b = false;
b ||= true; // Equivalente a b = b || true, ahora b es true

// Asignación de anulación lógica con valores booleanos
let c = null;
c ??= true; // Equivalente a c = c ?? true, ahora c es true

// Buenas prácticas para simplificar el manejo de operadores booleanos

// Utilizar asignación AND para evitar sobrescribir valores verdaderos
let isActive = true;
isActive &&= checkIfActive(); // Solo se ejecuta checkIfActive si isActive es true

// Utilizar asignación OR para establecer valores predeterminados
let isLoggedIn = false;
isLoggedIn ||= getDefaultLoginStatus(); // Solo se ejecuta getDefaultLoginStatus si isLoggedIn es false

// Utilizar asignación de anulación lógica para manejar valores nulos o indefinidos
let userName = null;
userName ??= 'Guest'; // Solo se asigna 'Guest' si userName es null o undefined
