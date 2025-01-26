// Ejemplo básico de if-else
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Ejemplo de if-else if-else
let nota = 85;

if (nota >= 90) {
    console.log("Tienes una A.");
} else if (nota >= 80) {
    console.log("Tienes una B.");
} else if (nota >= 70) {
    console.log("Tienes una C.");
} else if (nota >= 60) {
    console.log("Tienes una D.");
} else {
    console.log("Tienes una F.");
}

// Uso de operador ternario
let esMayor = edad >= 18 ? "Sí, es mayor de edad." : "No, es menor de edad.";
console.log(esMayor);

// Uso de switch como alternativa a múltiples if-else
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día no válido";
}

console.log(nombreDia);

// Buenas prácticas y pro tips
// 1. Mantén las condiciones simples y legibles.
let temperatura = 30;
if (temperatura > 0 && temperatura < 100) {
    console.log("La temperatura está en un rango aceptable.");
}

// 2. Evita el uso excesivo de if-else anidados.
let usuario = {
    rol: "admin"
};

if (usuario) {
    if (usuario.rol === "admin") {
        console.log("Acceso concedido.");
    } else {
        console.log("Acceso denegado.");
    }
} else {
    console.log("Usuario no encontrado.");
}

// 3. Usa el operador ternario para condiciones simples.
let mensaje = usuario ? (usuario.rol === "admin" ? "Acceso concedido." : "Acceso denegado.") : "Usuario no encontrado.";
console.log(mensaje);

// 4. Considera el uso de switch para múltiples condiciones.
let fruta = "manzana";

switch (fruta) {
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
