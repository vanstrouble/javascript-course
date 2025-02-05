// Ejemplo básico de if-else
let age = 18;

if (age >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Ejemplo de if-else if-else
let grade = 85;

if (grade >= 90) {
    console.log("Tienes una A.");
} else if (grade >= 80) {
    console.log("Tienes una B.");
} else if (grade >= 70) {
    console.log("Tienes una C.");
} else if (grade >= 60) {
    console.log("Tienes una D.");
} else {
    console.log("Tienes una F.");
}

// Uso de operador ternario
let isAdult = age >= 18 ? "Sí, es mayor de edad." : "No, es menor de edad.";
console.log(isAdult);

// Uso de switch como alternativa a múltiples if-else
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Lunes";
        break;
    case 2:
        dayName = "Martes";
        break;
    case 3:
        dayName = "Miércoles";
        break;
    case 4:
        dayName = "Jueves";
        break;
    case 5:
        dayName = "Viernes";
        break;
    case 6:
        dayName = "Sábado";
        break;
    case 7:
        dayName = "Domingo";
        break;
    default:
        dayName = "Día no válido";
}

console.log(dayName);

// Buenas prácticas y pro tips
// 1. Mantén las condiciones simples y legibles.
let temperature = 30;
if (temperature > 0 && temperature < 100) {
    console.log("La temperatura está en un rango aceptable.");
}

// 2. Evita el uso excesivo de if-else anidados.
let user = {
    role: "admin"
};

if (user) {
    if (user.role === "admin") {
        console.log("Acceso concedido.");
    } else {
        console.log("Acceso denegado.");
    }
} else {
    console.log("Usuario no encontrado.");
}

// 3. Usa el operador ternario para condiciones simples.
let message = user ? (user.role === "admin" ? "Acceso concedido." : "Acceso denegado.") : "Usuario no encontrado.";
console.log(message);

// 4. Considera el uso de switch para múltiples condiciones.
let fruit = "manzana";

switch (fruit) {
    case "manzana":
        console.log("Es una manzana.");
        break;
    case "naranja":
        console.log("Es una naranja.");
        break;
    case "plátano":
        console.log("Es un plátano.");
        break;
    default:
        console.log("Fruta no reconocida.");
}
