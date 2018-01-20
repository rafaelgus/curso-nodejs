'use strict'

const http = require('http').createServer(webServer),
	path = require('path'),
	url = require('url'),
	port = 3000,
	urls = [
		{
			id : 1,
			route : '',
			output : '<h1>Home</h1>'
		},
		{
			id : 2,
			route : 'acerca',
			output : '<h1>Acerca</h1>'
		},
		{
			id :3,
			route : 'contacto',
			output : '<h1>contacto</h1>'
		}
	]

function webServer (req, res)
{
	const message = 'Hola Node.js'
	let pathURL = path.basename(req.url),
		id = url.parse( req.url, true ).query.id

	console.log(`path:${pathURL} id:${id}`)

	urls.forEach(function (pos){
		if(pos.route == pathURL || pos.id == id )
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