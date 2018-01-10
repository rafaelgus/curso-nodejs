/*
Streams
	'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
	3 tipos: Lectura / Escritura / Duplex
	Instancias de EventEmitter
	Acceso asíncrono
	Es raro crear streams directamente
	pero muchors recursos nos ofrecen este interfaz
	Detrás de muchos mecanismos de Node.JS
		stdin/stdout
		request de HTTP
		Sockets
		Manipulación de ficheros/imagenes
*/

'use strict'
const fs = require ('fs'),
	readStream = fs.createReadStream('assets/nombres.txt'),
	writeStream = fs.createWriteStream('assets/nombres_copia.txt')

	readStream.pipe(writeStream)

	readStream
		.on('data',function(chunk){
			console.log(
				'He leído:',
				chunk.length,
				'caracteres'
			)
		})

		.on('end',function(){
			console.log('Terminé de leer el archivo')	
		})