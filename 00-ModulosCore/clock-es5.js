'use strict'

var Clock = (function (){

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
			hrsAmPm = ( date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
			hrs = addZero( hrsAmPm ),
			min = addZero( date.getMinutes() ),
			sec = addZero( date.getSeconds() ),
			ampm = (date.getHours() < 12) ? 'am' : 'pm', 
			msg = hrs + ':' + min + ':' + sec + ampm

		function addZero(num)
		{
			return (num < 10) ? ('0' + num) : num
		}

		console.log(msg)
	}
	return Clock

})()

module.exports = Clock