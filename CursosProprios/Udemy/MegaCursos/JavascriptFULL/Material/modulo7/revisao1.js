{
    let a = 7
    var b = 4
}
// let tem um escopo de bloco
console.log(b)


const produto = 'iPad'
// Template String
console.log(`${produto} é maneiro`)

// Operador destructuring - tirar elementos dentro de um array, objeto ou string
// Desestruturando String
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

// Desestruturando array
const [x, ,y] = [1, 2, 3]
console.log(x, y)

// Desestruturando objeto
const {idade:i, nome:n} = {nome: 'Ana', idade: 9}
console.log(i, n)