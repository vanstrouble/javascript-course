const videogames = [
    'God of War',
    'Spideman',
    'Uncharted',
    'The Last of Us',
    'Horizon Zero Dawn'
];
console.log('Videogames leangth:', videogames.length);

let firstVideogame = videogames[0];
let lastVideogame = videogames[videogames.length - 1];
console.log('First videogame:', firstVideogame);
console.log('Last videogame:', lastVideogame);

videogames.forEach(function(videogame, index) {
    console.log(`[${index}] ${videogame}`);
});

const videogames2 = [...videogames];
let newLength = videogames2.push('Ratchet & Clank'); // Añade 'Ratchet & Clank' al final del array
console.log(videogames2);
console.log('New Videogames2 leangth:', newLength);

newLength = videogames2.unshift('Gran Turismo'); // Añade 'Gran Turismo' al inicio del array
console.log(videogames2);
console.log('New Videogames2 leangth:', newLength);

let deletedGame = videogames2.pop(); // Elimina el último elemento del array (el argumento 'Spiderman' no es necesario)
console.log(deletedGame);
console.log('New Videogames2 leangth:', videogames2.length);

deletedGame = videogames2.shift('Gran Turismo'); // Elimina el primer elemento del array (el argumento 'Gran Turismo' no es necesario)
console.log(videogames2);
console.log(deletedGame);
console.log('New Videogames2 leangth:', newLength);

let position = 1;
const deletedGames = videogames2.splice(position, 1); // Elimina 1 elemento a partir de la posición 1
console.log(deletedGames);
console.log(videogames2);

position = videogames2.indexOf('Uncharted'); // Devuelve la posición del elemento 'Uncharted'
console.log('Uncharted position:', position);
