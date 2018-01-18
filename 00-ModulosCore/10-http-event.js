'use strict'

const http = require('http').createServer()
const hostname = 'localhost'
const port = 3000

function webServer(req,res)
{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.end('<h1>Hola Mundo</h1>')
}

http
	.on('request',webServer)
	.listen(port,hostname)

console.log('Servidor corriendo en http://localhost:3000')