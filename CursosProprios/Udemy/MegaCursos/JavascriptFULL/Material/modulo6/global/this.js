console.log(this === global)
console.log(this === module)

// Dentro de um node, this é extritamente igual a module.exports
console.log(this === module.exports)
console.log(this === exports)

// Dentro de uma função ele deica de ser igual ao module.exports e passa ser igual a uma variavel global
function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === global)
    console.log(this === module)
}

logThis()


