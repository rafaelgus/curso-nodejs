'use strict'

const http = require('http')
let options = {
		host : 'jonmircha.com',
		port : 80,
		path : '/'	
}

http
	.get( options , function (res){
		console.log(`El sitio ${options.host} ha respondido. Codigo de Estado: ${res.statusCode}`)
	})
	.on('error', function (err){
		console.log(`El sitio ${options.host} no ha respondido. Codigo de Estado: ${err.code}. Erro: ${err.message}`)
	})
