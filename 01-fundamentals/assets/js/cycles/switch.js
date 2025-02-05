// Ejemplo básico de uso de switch en JavaScript
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 0:
            dayName = 'Domingo';
            break;
        case 1:
            dayName = 'Lunes';
            break;
        case 2:
            dayName = 'Martes';
            break;
        case 3:
            dayName = 'Miércoles';
            break;
        case 4:
            dayName = 'Jueves';
            break;
        case 5:
            dayName = 'Viernes';
            break;
        case 6:
            dayName = 'Sábado';
            break;
        default:
            dayName = 'Número de día inválido';
    }
    return dayName;
}

// Ejemplo avanzado con agrupación de casos
function getFruitColor(fruit) {
    let color;
    switch (fruit) {
        case 'manzana':
        case 'fresa':
        case 'cereza':
            color = 'rojo';
            break;
        case 'plátano':
        case 'limón':
            color = 'amarillo';
            break;
        case 'uva':
        case 'mora':
            color = 'morado';
            break;
        default:
            color = 'Color desconocido';
    }
    return color;
}

// Ejemplo con uso de funciones en los casos
function performAction(action) {
    switch (action) {
        case 'start':
            start();
            break;
        case 'stop':
            stop();
            break;
        case 'pause':
            pause();
            break;
        default:
            console.log('Acción desconocida');
    }

    function start() {
        console.log('Iniciando...');
    }

    function stop() {
        console.log('Deteniendo...');
    }

    function pause() {
        console.log('Pausando...');
    }
}

// Ejemplo con uso de constantes
const Actions = {
    START: 'start',
    STOP: 'stop',
    PAUSE: 'pause'
};

function performActionWithConstants(action) {
    switch (action) {
        case Actions.START:
            console.log('Iniciando...');
            break;
        case Actions.STOP:
            console.log('Deteniendo...');
            break;
        case Actions.PAUSE:
            console.log('Pausando...');
            break;
        default:
            console.log('Acción desconocida');
    }
}

// Ejemplo con retorno temprano para evitar el uso de break
function getSeason(month) {
    switch (month) {
        case 'diciembre':
        case 'enero':
        case 'febrero':
            return 'Invierno';
        case 'marzo':
        case 'abril':
        case 'mayo':
            return 'Primavera';
        case 'junio':
        case 'julio':
        case 'agosto':
            return 'Verano';
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            return 'Otoño';
        default:
            return 'Mes desconocido';
    }
}
