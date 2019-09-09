// Object.values / Object.entries

const obj = { a: 1, b: 2, c: 3 }

// Um array com os valores
console.log(Object.values(obj))
// Matriz com cada chave e valor
console.log(Object.entries(obj))

// Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa, pessoa.ola())

// Class, uma classe no javascript instancia uma função e nao um objeto
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar())