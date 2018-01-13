'use strict'

const stdin = process.stdin,
	stdout = process.stdout

let person = {
	name: null,
	job: null,
	age: 0,
	dni: 0,
}

function saveDni(dni)
{
	person.dni = dni
	stdout.write('Tu número de DNI es: ' + person.dni + '.\n')
	process.exit()
}

function saveAge(age)
{
	let question
	person.age = age
	if(person.age >= 18)
	{
		question = 'Eres mayor de edad, tienes ' + person.age + ' años. ¿De qué trabajas?'
		quiz(question,saveJob)

	} else
	{
		question = 'Eres menor de edad, tienes ' + person.age + ' años. ¿Cual es tu DNI?'
		quiz(question,saveDni)
	}
}

function saveJob(job)
{
	person.job = job
	let question = 'Tu trabajo es: ' + person.job + '. ¿Cual es tu DNI?'
	quiz(question,saveDni)
}

function saveName(name)
{
	person.name = name
	let question = 'Hola ' + person.name + ' ¿Cuantos años tienes?'
	quiz(question,saveAge)
}

function quiz (question,callback)
{
	stdin.resume()
	stdout.write(question + ': ')
	stdin.once('data',function(res){
		callback( res.toString().trim())
	})
}

stdin.setEncoding('utf-8')
quiz('¿Cual es tu nombre?',saveName)