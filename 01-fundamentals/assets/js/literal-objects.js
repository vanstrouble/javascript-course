// Ejemplo 1: Objeto literal simple
const persona = {
    nombre: 'Regina',
    edad: 20,
    profesion: 'Abogada',
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

persona.saludar(); // Output: Hola, mi nombre es Juan

// Ejemplo 2: Objeto literal anidado
const empresa = {
    nombre: 'Tech Solutions',
    ubicacion: {
        ciudad: 'Madrid',
        pais: 'España'
    },
    empleados: 50,
    mostrarInfo: function() {
        console.log(`${this.nombre} está ubicada en ${this.ubicacion.ciudad}, ${this.ubicacion.pais}`);
    }
};

empresa.mostrarInfo(); // Output: Tech Solutions está ubicada en Madrid, España

// Ejemplo 3: Uso de métodos abreviados
const libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    publicar() {
        console.log(`El libro "${this.titulo}" fue escrito por ${this.autor}`);
    }
};

libro.publicar(); // Output: El libro "El Quijote" fue escrito por Miguel de Cervantes

// Ejemplo 4: Uso de propiedades computadas
const propiedad = 'color';
const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    [propiedad]: 'Rojo'
};

console.log(coche.color); // Output: Rojo

// Buenas prácticas:
// 1. Usar nombres de propiedades descriptivos y consistentes.
// 2. Mantener el objeto lo más simple posible.
// 3. Utilizar métodos abreviados para funciones.
// 4. Evitar el uso excesivo de objetos anidados para mantener la legibilidad.
// 5. Utilizar propiedades computadas cuando sea necesario.

// Ejemplo 5: Objeto literal para base de datos
const database = {
    users: [
        {
            id: 1,
            name: "Juan Perez",
            address: {
                street: "123 Calle Falsa",
                city: "Ciudad Inventada",
                postalCode: "12345"
            },
            isActive: true,
            age: 30,
            hobbies: ["reading", "swimming", "coding"]
        },
        {
            id: 2,
            name: "Maria Gomez",
            address: {
                street: "456 Avenida Imaginaria",
                city: "Pueblo Ficticio",
                postalCode: "67890"
            },
            isActive: false,
            age: 25,
            hobbies: ["painting", "dancing", "traveling"]
        },
        {
            id: 3,
            name: "Carlos Sanchez",
            address: {
                street: "789 Boulevard Inventado",
                city: "Villa Fantasia",
                postalCode: "11223"
            },
            isActive: true,
            age: 28,
            hobbies: ["gaming", "hiking", "photography"]
        }
    ]
};

console.log(database);
