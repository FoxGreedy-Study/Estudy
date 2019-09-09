const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'

// Eu consigo alterar os valores dentro de um objeto constante, mas não consigo alterar ele
console.log(pessoa)

// pessoa -> 456{...} -> {...}
// Objeto constante sempre apontará para um mesmo endereçi
// pessoa = {nome:'Ana'}

// Objeto foi congelado, ou seja, você não conseguirá alterar mais os valores
Object.freeze(pessoa)

delete nome
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'

// É possivel congelar um objeto desde a sua criação 
const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)