// Função em JS é First-Class Object [ Citizens]
// High Order function

// Função literal
// function fun1() {/* Retorna o valor Undefined */ }

// // Armazenar uma variável
// const fun2 = () => {
// }

// Armazenar uma função em um array
// Uma função no Javascript é um dado como quaquer outro

// const array = [function (a, b) { return a + b }, fun1, fun2]
// console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
// const obj = {}
// obj.falar = function () { return 'Opa' }
// console.log(obj.falar())

// // Passar uma função param
// function run(fun) {
//     fun()
// }

// run(() => {
//     console.log('Executando....')
// })

// function soma(a, b) {
//     return function (c) {
//         console.log(a + b + c)
//     }
// }

// // Pelo resultado da soma ser uma função conseguimos chamar essa função pela pela própria soma
// // Chamando a função direto
// soma(2, 3)(3)
// const cincoMais = soma(2, 3)
// // Chamando uma função secundaria e atribuindo o parametro da função dentro de soma
// cincoMais(4)


// function soma(){
//     // Let eu uso dentro de um escopo, var eu uso fora de um escopo
//     let soma = 0
//     console.log(arguments)
//     for(i in arguments){
//         // Arguments é um array interno dos elementos passados como parametros
//         soma += arguments[i]
//     }
//     return soma

// }

// // Consigo passar parametros pela função mesmo que eu não tenha criado argumentos
// console.log(soma())
// console.log(soma(1))
// console.log(soma(1.1, 2.2, 3.3))

// Parametro padrão

// function soma1(a, b, c) {
//     a = a || 1
//     b = b || 1
//     c = c || 1

//     return a + b + c
// }
// // O zero retorna falso, consequentemente não consigo padronizar o numero 0 com esse metodo
// console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// // Estrategia 2, 3 e 4 para gerar valor padrão
// function soma2(a, b, c) {
//     a = a !== undefined ? a : 1
//     b = 1 in arguments ? b : 1
//     // A forma mais segura é usar o método iNaN, onde ele me fala que o método não é um numero
//     c = isNaN(c) ? 1 : c
//     return a + b + c
// }

// console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// // Valor padrão do es2015

// // Melhor forma de utilizar o valor padrão do parâmetro
// function soma3(a = 1, b = 1, c = 3) {
//     return a + b + c
// }

// console.log(soma3(), soma3(), soma3(1, 2, 3), soma3(0, 0, 0))

// Função bind
// Consigo criar uma função dentro de um json
// const pessoa ={
//     saudacao: 'Bom dia!',
//     falar(){
//         // Eu preciso usar a palacvrinha this pq estou me referindo a uma pessoa
//         console.log(this.saudacao)
//     }
// }

// pessoa.falar()
// // O fato de eu guardar uma função em uma variavel faz com que eu não restrite o us de outros valores na variavel
// const falar = pessoa.falar
// falar()

// const falarDePessoa = pessoa.falar.bind(pessoa) //É um metodo responsavel para amarrar um valor deum variavel referenciado como função this
// falarDePessoa()
// function Pessoa() {
//     this.idade = 0

//     // Alem do bind outra estrategia é fazer uma constante para acessar os atributos do this que varia
//     const self = this
//     //  Dispara uma outra função a partir de um intervalo que vc passou
//     setInterval(function () {
//         self.idade++
//         console.log(self.idade)
//     }/*.bind(this)*/, 1000)
// }

// new Pessoa

// // arrow functions
// let dobro = function (a) {
//     return 2 * a
// }

// dobro = (a) => {
//     return 2 * a
// }

// // função de uma linha, não preciso colocar a estrutura de blocos nessa função
// dobro = a => 2 * a // return está implicito
// console.log(dobro(Math.PI))

// ola = () => 'Olá' //Assim eu não preciso colocar o return
// ola = _ => 'Olá' //O underline coloca um parametro
// console.log(ola())

// // this dentro de uma função arrow é um this fixo
// function Pessoa(){
//     this.idade = 0

//     // O arrow torna a função constante, pois ela aponta para o this dentro da função
//     setInterval(() =>{
//         this.idade ++
//         console.log(this.idade)
//     }, 1000)
// }

// new Pessoa

// let ComparaComThis = function (params) {
//     console.log(this == params)
// }

// // global == windo
// // O this não é o this
// ComparaComThis(global)

// const obj = {}
// // O bind faz a variavel this apontar para outro lugar 
// ComparaComThis = ComparaComThis.bind(obj)
// ComparaComThis(global)
// ComparaComThis(obj)


// let ComparaComThisArrow = params => console.log(this === params)
// ComparaComThisArrow(global)
// ComparaComThisArrow(module.exports)

// ComparaComThisArrow = ComparaComThisArrow.bind(obj)
// // O this de uma função arrow é o this variado de uma função escrita
// // Mesmo com bind o this é tranformado
// ComparaComThisArrow(obj)
// ComparaComThisArrow(module.exports)

// // O this em funções 
// // Ser um bom programador exige muito treino


// Funções anonimas.js

// const soma = function (a, b) {
//     return a + b
// }

// const imprimirResultado = function (x, y, operacao = soma) {
//     console.log(operacao(x, y))
// }

// imprimirResultado(5, 5)

// // Uma função anonima é simplesmente uma função que não tem nome e pode ser armazenada em uma variavel

// imprimirResultado(5, 5, function (a, b) {
//     return a * b
// })

// // Uma arrow function é basicamente uma função anonima, com apenas algumas diferenças

// imprimirResultado(6, 5, (x, y) => x - y)

// //  Uma função anonima dentro de um objeto

// // const pessoa = {
// //     falar: function () {
// //         console.log('iae')
// //     }
// // }

// // pessoa.falar()

// // Na nova versão EcmaScript eu tbm posso fazer assim
// const pessoa = {
//     falar() {
//         console.log('iae')
//     }
// }

// pessoa.falar()

// Função callback
// const fabricantes = ["Mercedes", "Audi", 10]

// function imprimir(nome, indice) {
//     console.log(`${indice + 1}. ${nome} `)
// }

// fabricantes.forEach(imprimir)

// fabricantes.forEach((fabricante) => console.log(fabricante))
// // A marioria das funções nativas  do javascript usam callback, logo facilita o seu tempo usar callback

// const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// // Pegar todas as notas menores que sete
// // Sem o callback
// const notasBaixas1 = []
// for (let i in notas) {
//     if (notas[i] < 7) {
//         notasBaixas1.push(notas[i])
//     }
// }
// console.log(notasBaixas1)

// // Com callback
// // filter é um callback que retorna true ou false
// const notasBaixas2 = notas.filter(function (nota) {
//     return nota < 7
// })

// console.log(notasBaixas2)

// // Fica muito mais facil com o arrow...
// const notasBaixas3 = notas.filter((nota) => nota < 7)
// console.log(notasBaixas3)

// // Salvando função para reutilizar depois
// const notasMenorQue7 = nota => nota < 7
// const notasBaixas4 = notas.filter(notasMenorQue7)
// console.log(notasBaixas4)

// Exemplo de callback no browser
// getElements by tag name captura a tag especificada
// document.getElementsByTagName('body')[0].onclick = function (e){
//     console.log('O evento ocorreu!')
// }


// Função construtora, 
// function Carro(velocidadeMaxima = 200, delta = 5) {
//     // Atributo privado
//     let velocidadeAtual = 0

//     this.acelerar = function () {
//         if (velocidadeAtual + delta <= velocidadeMaxima) {
//             velocidadeAtual += delta
//         } else {
//             velocidadeAtual = velocidadeMaxima
//         }
//     }

//     this.getVelocidadeAtual = function () {
//         return velocidadeAtual
//     }
// }

// const carrinho = new Carro

// carrinho.acelerar()
// console.log(carrinho.getVelocidadeAtual())

// const ferrari = new Carro(305, 20)
// ferrari.acelerar()
// ferrari.acelerar()
// ferrari.acelerar()
// console.log(ferrari.getVelocidadeAtual())


// console.log(typeof Carro)
// console.log(typeof ferrari)

// A função construtora serve como uma classe, um molde para criar outros objetos
// A orientação a objetos é bem engraçada....


// console.log(soma(3, 4))


// // Function declaration

// function soma(x, y) {
//     return x + y
// }

// // Function Expression, só consigo usar uma função depois que ela foi declarada
// const sub = function (x, y) {
//     return x - y
// }
// console.log(sub(3,4))
// // Eu consigo nomear uma função anonima, se ela estiver armazenada dentro de uma variavel
// // named function expression, não é muito usado
// const mult = function mult(x, y) {
//     return x * y
// }
// console.log(mult(3,4))

// // Contexto lexico
// const valor = 'Global'

// function minhaFuncao(){
//     console.log(valor)
// }

// function exec(){
//     const valor = 'Local'
//     minhaFuncao()
// }

// exec()

// Função factory, para criar objetos

// function criarPessoa(){
//     return{
//         nome: 'Ana', 
//         sobrenome: 'Silva'
//     }
// }

// console.log(criarPessoa())

// function criarProduto(nomeProduto, precoProduto){
//     // Eu não preciso colocar o indice quando estou me referindo a parametros dentro de uma factory
//     return {
//         nomeProduto,
//         precoProduto,
//         desconto: 0.1
//     }
// }

// console.log(criarProduto('Lasanha', 500))

// Dessa maneira é basicamente a mesma coisa que o java
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('nome')
// p1.falar()


// // No Factory o contexto e os parametros sempre irão funcionar, pq ele tem certeza qual é o contexto lexico em que ele se encaixa
// const criarPessoa = nome => {
//  return{
//      falar: () => console.log('Meu nome é', nome)
//  }
// }

// const p2 = criarPessoa('João')
// p2.falar()


// function Pessoa(nome) {

//     this.nome = nome

//     this.falar = () => console.log('Meu nome é', this.nome)

// }

// const p1 = new Pessoa('João')
// p1.falar()


// criarPessoa = nome => {
//     return{
//         falar: () => console.log('Meu nome é',nome)
//     }
// }

// const p2 = criarPessoa('João')
// p2.falar()

// Função auto invocada, serve pra fugir do escopo global
// IIFE -> Imediately Invoked Function Expression

// (() => {
//     console.log('será executada na hora!')
//     console.log('Foge do escopo mais abrangente')
// })()

// Call - apply
// function getPreco(imposto = 0, moeda = 'R$') {
//     return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
// }

// const produto = {
//     nome: 'notebook',
//     preco: 4589,
//     desc: 0.15,
//     getPreco
// }

// global.preco = 20
// global.desc = 0.1
// console.log(getPreco())
// console.log(produto.getPreco())

// const carro = {preco: 49990, desc: 0.20}
// // Tanto no get quanto no apply eu basicamente acrescento uma nova função a um objeto
// console.log(getPreco.call(carro))
// console.log(getPreco.apply(carro))
// // A unica diferença entre os dois é a maneira que vc passa os parametros
// console.log(getPreco.call(carro, 0.17, 'U$'))
// console.log(getPreco.apply(carro, [0.17, '$']))