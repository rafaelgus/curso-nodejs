'use strict'

const http = require('http')
let options = {
		host : 'jonmircha.com',
		port : 80,
		path : '/'	
	},
	htmlCode = ''


function httpClient(res)
{
		console.log(`El sitio ${options.host} ha respondido. Codigo de Estado: ${res.statusCode}`)
		res.on('data', function(data){
			htmlCode += data
			console.log(
				data,
				data.toString()
			)
		})
}
function httpError(err)
{
		console.log(`El sitio ${options.host} no ha respondido. Codigo de Estado: ${err.code}. Erro: ${err.message}`)
}
function webServer(req,res)
{
	res.writeHead(200,{'Content-Type':'text/html'})
	res.end(htmlCode)
}
//Instancia de Cliente
http
	.get( options , httpClient )
	.on('error', httpError )

//Instancia Servidor HTTP
http
	.createServer(webServer)
	.listen(3000)
