'use strict'

const http = require('http').createServer(serverUpload),
	util = require('util'),
	formidable = require('formidable'),
	fse = require('fs-extra')

function serverUpload (req, res)
{
	if(req.method.toLowerCase() == 'get' && req.url == '/')
	{
		let form = `
			<h1>Uploader de archivos en Node.js</h1>
			<form action="/upload" enctype="multipart/form-data" method="post">
				<div><input type="file" name="upload" required></div>
				<div><input type="submit" value="Subir Archivo"></div>
			</form>
		`
		res.writeHead(200, {'Content-Type':'text/html'})
		res.end(form)
	}

	if(req.method.toLowerCase() == 'post' && req.url == '/upload')
	{
		let form = new formidable.IncomingForm()

		form
			.parse(req, function(err, fields, files){
				res.writeHead(200, {'Content-Type':'text/html'})
				res.write(`
					<h1>Archivos recibidos</h1>
					<a href="/">Regresar</a>
					<br></br>
					<code>${util.inspect( {files : files} )}</code>
					`)
				res.end()
			})
			.on('progress', function(bytesReceived, bytesExpected){
				let percentCompleted = ( bytesReceived / bytesExpected ) * 100
				console.log( percentCompleted.toFixed(2) )
			})
			.on('error', function(err){
				console.log(err)
			})
			.on('end', function(fields, files){
				let temPath = this.openedFiles[0].path,
					fileName = this.openedFiles[0].name,
					newLocation = './upload/' + fileName

				fse.copy(temPath, newLocation, function(err){
					return (err) ? console.log(err) : console.log('El archivo se ha subido con éxito :)')
				})
			})

		return
	}
}

http.listen(3000)
console.log('Servidor corriendo en http://localhost:3000')