/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulación de ficheros/imagenes
		Criptografía
*/

'use strict'

const buf = Buffer.alloc(100),
	buf2 = Buffer.alloc(26),
	str = '\u00bd + \u00bc = \u00be'

buf.write('abcd',0,4,'ascii')

console.log(
	buf,
	buf.toString('ascii'),
	str,
	str.length + 'caracteres',
	Buffer.byteLength(str,'utf8') + 'bytes'
)

for( let i = 0; i < buf2.length; i++)
{
	buf2[i] = i + 97
}

console.log( buf2.toString('ascii') )