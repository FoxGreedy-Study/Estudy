// // 
// // ALGUNS CUIDADOS COM NÚMEROS
// // Infinity - resultado da operação 7/0
// console.log(7 / 0)
// // O javascript converte valores numericos string para fazer contas
// console.log('10' / 2)
// // NaN
// console.log('Show!' * 2)

// // Math
// const raio = 5.6
// const area = Math.PI * Math.pow(raio, 2)
// console.log(area)
// console.log(typeof Math)

// // Quase tudo é função no Javascript
// class Produto {

// }

// console.log(typeof Produto)

// // Usando var em loop

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// // Usando let em loop
// for(let c = 0; c < 10; c++){
//     // O i só estará disponível dentro do laço de repetição
//     console.log(c)
// }

// console.log('c = ', c)

// // Usando var em loop - parte 2
// const funcs = []
// const func = []

// for (var i = 0; i < 10; i++) {
//     // Var não tem escopo de função, por esse motivo ele não respeita o que é guardado na memoria
//     funcs.push(() => {
//         console.log(i)
//     })
// }

// funcs[2]()
// funcs[8]()

// for(let c = 0; c <10; c++){
//     func.push(()=>{
//         console.log(c)
//     })
// }

// func[6]()
// func[5]()

// Operador destructuring
// 
// const pessoa = {
//     nome: 'Ana',
//     idade: 5,
//     endereco: {
//         logradouro: 'Rua ABC',
//         numero: 1000
//     }
// }

// const { nome, idade } = pessoa
// console.log(nome, idade)

// // Estou extraindo de um objeto um valor e uso ':' para nomear o nome dela
// const { nome: n, idade: i } = pessoa
// console.log(n, i)

// // Se não vier nada do valor bem humorada, Coloque o valor padrão true
// const { sobrenome, bemHumorada = true } = pessoa
// console.log(sobrenome, bemHumorada)

// // Para eu acessar subdiretórios eu apenas coloco o caminho do valor
// const { endereco, endereco: { logradouro, numero, cep } } = pessoa
// console.log(logradouro, numero, cep, endereco)

// // Não tem como acessar algo que não existe, logo da merda
// // const { conta: { agencia, numero } } = pessoa
// // console.log(agencia, numero)

// // Consigo atribuir um valor
// const [a] = [10]
// console.log(a)

// // Consigo pular valores que não me interessam dentro de um array
// const [n1, , n3, , n5, n6 = 0/*Valor Padrão */] = [8, 6, 7, 9]
// console.log(n1, n3, n5, n6)

// // Consigo ignorar valores filhos, mas nesse rapido é mais rapido acessar pelo indice
// const [/*Ignorei */, [/*Ignorei */, nota]] = [[, 8, 8], [9, 6, 8]]
// console.log(nota)

// // Consigo desestruturar parametros de uma função
// function rand({ min = 0, max = 1000 } = {}) {
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// const obj = { max: 40, min: 20 }
// console.log(rand(obj))
// console.log(rand({ max: 50 }))
// console.log(rand({}))
// // Não tem como desestruturar algo que esta nulo
// console.log(rand())

// // Destructuring no nivel de array
// function rand([min = 0, max = 1000]) {
//     // Consigo inverter as duas variaveis
//     if (min > max) [min, max] = [max, min]
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// console.log(rand([50, 40]))
// console.log(rand([992]))
// console.log(rand([, 10]))
// console.log(rand([]))
// // console.log(rand())


// try catch e throw, tratamento de erros

// function tratarErroELancar(erro) {
//     throw new Error('...')
//     // throw 10
//     // throw 'Mensagem'
// }

// function imprimirNomeGritado(obj) {

//     try {
//         console.log(obj.name.toUpperCase() + '!!!')
//     } catch (e) {
//         tratarErroELancar(e)
//     } finally {
//         // Mesmo que ocorra erro ou não, ele vai chamar esse bloco
//         console.log('Final')
//     }

// }

// const obj = { nome: 'Roberto' }

// imprimirNomeGritado(obj)

// Closure, é o escopo criado quando vc define a sua função  é declarada
// Esse escopo permite a função acessar e manipular variaveis externas à função

// const x = 'Global'

// function fora() {
//     const x = 'Local'
//     function dentro() {
//         return x
//     }
//     return dentro()
// }

// const minhaFuncao = fora()
// console.log(minhaFuncao())

// FUNCAO FACTORY - função fabrica
// const prod1 = {
//     nome: '...',
//     preco: 45
// }
// const prod2 = {
//     nome: '...',
//     preco: 12345
// }
