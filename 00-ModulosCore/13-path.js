'use strict'

const http = require('http').createServer(webServer),
	path = require('path'),
	port = 3000,
	urls = [
		{
			route : '',
			output : '<h1>Home</h1>'
		},
		{
			route : 'acerca',
			output : '<h1>Acerca</h1>'
		},
		{
			route : 'contacto',
			output : '<h1>contacto</h1>'
		}
	]

function webServer (req, res)
{
	const message = 'Hola Node.js'
	let pathURL = path.basename(req.url)

	urls.forEach(function (pos){
		if(pos.route == pathURL)
		{
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(`${message} ${pos.output}`)
		}
	})

	if(!res.finished)
	{
		res.writeHead(404,{'Content-Type':'text/html'})
		res.end('<h1>Error 404: Not Found</h1>')
	}
}

http.listen(port)
console.log('Servidor corriendo en http://localhost:3000')