'use strict'
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
*/

const http = require('http')
const hostname = 'localhost'
const port = 3000

function webServer (req,res)
{
	res.statusCode = 200
	res.setHeader('Content-Type','text/html')
	res.end('<h1>Hola Mundo</h1>')
}

http
	.createServer(webServer)
	.listen(port,hostname)

console.log('Servidor corriendo en http//localhost:3000/')