'use strict'

const EventEmitter = require('events').EventEmitter
let pub = new EventEmitter()

pub
	.on('myevent',function(message){
		console.log(message)
	})
	.once('myevent',function(message){
		console.log('Se emite la primera vez: ' + message)
	})

pub.emit('myevent','Soy un emisor de eventos')
pub.emit('myevent','Volviendo a emitir')
pub.removeAllListeners('myevent')
pub.emit('myevent','Emitiendo por tercera vez')