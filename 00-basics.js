/* Organización de codigo JS
	librerias/modulos
	constantes
	objetos/variables
	funciones
	eventos
	ejecuciones

Usar camelCase
	Cuando una instrucción tenga una sola palabra, la misma se escribe
	en minusculas. Ej. require().
	Cuando una instrucción tenga mas de una sola palabra, la misma se
	escribe de la siguiente manera. Ej. getElementById()
	Para las clases la primera letra de la palabra empieza en mayusculas.

Usar modo estricto
*/

'use strict'

console.log('Hola mundo desde NodeJS')
console.log(global)
setInterval(function(){
	console.log('Hola NodeJS')
},1000)