'use strict'
/*
Realizaremos un sencillo ejercicio con codigo en la versión de ES5, luego realizaremos una versión de ES6

const EventEmitter = require('events').EventEmitter

class Clock extends EventEmitter
{
	theTime()
	{
		let date = new Date(),
			hrs = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds(),
			msg = hrs + ':' + min + ':' + sec

		console.log(msg)

	}
}
let cucu = new Clock
cucu.on('tictac',function(){
	cucu.theTime()
})

setInterval(function(){
	cucu.emit('tictac')
},1000)
*/

var EventEmitter = require('events').EventEmitter,
	inherits = require('util').inherits

var Clock = function ()
{
	var self = this

	setInterval(function(){
		self.emit('tictac')
	},1000)
}
//Herencia a través de NodeJS, Es mas recomendable utilizar extends de ES6
inherits(Clock,EventEmitter)

Clock.prototype.theTime = function ()
{
	var date = new Date(),
		hrs = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds(),
		msg = hrs + ':' + min + ':' + sec

		console.log(msg)
}

var cucu = new Clock
cucu.on('tictac',function(){
	cucu.theTime()
})
