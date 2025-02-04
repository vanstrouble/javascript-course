/**
 * El operador ternario es una forma concisa de realizar una evaluación condicional en JavaScript.
 * Utiliza tres operandos: una condición, una expresión a evaluar si la condición es verdadera y una expresión a evaluar si la condición es falsa.
 *
 * Los símbolos implicados en el operador ternario son:
 * - `?` : Separa la condición de la expresión a evaluar si la condición es verdadera.
 * - `:` : Separa la expresión a evaluar si la condición es verdadera de la expresión a evaluar si la condición es falsa.
 *
 * Funcionamiento:
 * La sintaxis básica del operador ternario es:
 * `condición ? expresiónSiVerdadero : expresiónSiFalso;`
 * Si la condición es verdadera, se evalúa y devuelve `expresiónSiVerdadero`; de lo contrario, se evalúa y devuelve `expresiónSiFalso`.
 *
 * Ejemplos:
 * 1. Verificar si un número es positivo:
 *    const numero = 5;
 *    const resultado = numero > 0 ? 'Positivo' : 'Negativo';
 *
 * 2. Verificar si un usuario está autenticado:
 *    const isAuthenticated = true;
 *    const mensaje = isAuthenticated ? 'Bienvenido de nuevo!' : 'Por favor, inicia sesión.';
 *
 * 3. Asignar un valor predeterminado si una variable es nula o indefinida:
 *    const nombre = null;
 *    const nombreUsuario = nombre ? nombre : 'Invitado';
 *
 * 4. Verificar si un número es par o impar:
 *    const numero = 4;
 *    const tipoNumero = (numero % 2 === 0) ? 'Par' : 'Impar';
 *
 * 5. Seleccionar un mensaje basado en la hora del día:
 *    const hora = 14;
 *    const saludo = (hora < 12) ? 'Buenos días' : (hora < 18) ? 'Buenas tardes' : 'Buenas noches';
 */
condición ? expresiónSiVerdadero : expresiónSiFalso;
