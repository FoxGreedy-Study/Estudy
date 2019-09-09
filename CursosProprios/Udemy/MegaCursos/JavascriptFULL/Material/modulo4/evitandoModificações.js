// Object.privateExtensions

// // Com a função preventExtensions, conseguimos deletar atributos, mas não criar
// const Produto = Object.preventExtensions({
//     nome:'Qualquer', preco : 1.99, tag: 'promoção'
// })

// console.log('Extensível', Object.isExtensible(Produto))

// Produto.nome = 'Borracha'
// Produto.descricao = 'Borracha escola branca'
// delete Produto.tag
// console.log(Produto)

// pessoa = {nome: 'Juliana', idade: 35}
// Object.seal(pessoa)
// console.log('Selado: ', Object.isSealed(pessoa))

// // A função isSealedte permite alterar os atributos de um projeto, mas não deletar ou criar novovs atributos
// pessoa.sobrenome = 'Silva'
// delete pessoa.nome
// pessoa.idade = 29
// console.log(pessoa)

// // Object.free = selado + valores sempre constantes

// // Variaveis constante, uma vez que eu insiro um valo eu não consigo alterar mais
// const batata = 1
// batata = 2
// console.log(batata)