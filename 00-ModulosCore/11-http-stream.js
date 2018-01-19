'use strict'

const http = require('http').createServer(webServer),
	fs = require('fs'),
	index = fs.createReadStream('assets/index.html'),
	port = 3000

function webServer(req,res)
{
	res.writeHead(200,{'Content-Type':'text/html'})
	index.pipe(res)
}

http.listen(port)

console.log('Servidor corriendo en http://localhost:3000')