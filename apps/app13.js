//Validación de inicio y fin de una expresión
// ^Inicio
// Fin$

var expresionInicio = /^E/;
var expresionFin = /a$/;
var expresionInicioFin = /^E|a$/;

console.log(expresionInicioFin.test('Esta es una cadena válida'));
