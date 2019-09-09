// // Herança é um principio da OO para aproveitar metodos e componentes
// // Prototype, conceito de prototipo, não é a mesma coisa da propriedade prototype que fica dentro das funções javascript

// const ferrari = {
//     modelo: 'F40',
//     velMax: 324
// }

// const volvo = {
//     modelo: 'V40',
//     velMax: 200
// }

// console.log(ferrari.__proto__)
// // Esse atributo __proto__ representa o Object.prototype
// console.log(ferrari.__proto__ === Object.prototype)
// console.log(volvo.__proto__ === Object.prototype)
// console.log(volvo.__proto__ === ferrari.__proto__)

// // O prototipo do object.prototype é a maior herança que se pode ter
// console.log(Object.prototype.__proto__ === null)

// function meuObjeto() {
//     // Um objeto em javascript tem uma referencia em seu prototipo, que seria a herança
//     console.log(typeof Object, typeof meuObjeto)
//     console.log(Object.prototype, meuObjeto.prototype)
// }


// Object.prototype.attr0 = 'Z'
// const avo = { attr1: 'A' }
// const pai = { __proto__: avo, attr2: 'B' }
// const filho = { __proto__: pai, attr3: 'C' }

// console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// const carro = {
//     velAtual: 0,
//     velMax: 200,
//     acelerarMais(delta) {
//         if (this.velAtual + delta <= this.velMax) {
//             this.velAtual += delta
//         } else {
//             this.velAtual = this.velMax
//         }
//     },
//     status(){
//         return `${this.velAtual} Km/h de ${this.velMax} Km/h`
//     }
// }

// const ferrari = {
//     modelo: 'F40',
//     velMax: 324, // shadowing
// }   
// // Quando eu chamo um atributo de um objeto que ja foi criado pela classe ancestral, estou sobrescrevendo-a
// const volvo = {
//     modelo: 'V40',
//     status(){
//         // Super server pra chamar algum fator do meuprototipo
//         return `${this.modelo} : ${super.status()}`
//     }
// }

// // Estabelece uma relação de prototipo entre dois objetos 
// Object.setPrototypeOf(ferrari, carro)
// Object.setPrototypeOf(volvo, carro)

// // EM relação ao objeto filho, quando o chamo eu apenas consigo ver coisas relacionado a ele, mas posso utilizar coisas do seu pai
// console.log(ferrari)
// console.log(volvo)

// volvo.acelerarMais(100)
// console.log(volvo.status())

// const pai = {nome: 'Pedro', corCabelo: 'preto'}

// const filha1 = Object.create(pai)
// filha1.nome = 'Ana'


// // Object.create, consigo criar um objeto com um prototipo, ou seja uma herança maior
// const filha2 = Object.create(pai, {
//     nome: {value: 'Bia', writable: false, enumerable: true}
// })

// filha2.nome = 'Carla'

// for(let key in filha2){
//     filha2.hasOwnProperty(key) ? console.log(key) : console.log('Por herança: ', key)
// }


// function meuObjeto() { }
// console.log(meuObjeto.prototype)

// const obj1 = new meuObjeto
// const obj2 = new meuObjeto
// // Todos os objetos criados a partir de uma mesma função construtora apontam para um mesmo prototipo a partir do atributo __proto__
// console.log(obj1.__proto__ === obj2.__proto__)
// console.log(meuObjeto.prototype === obj1.__proto__)

// // Prototipos é uma cadeia de heranças....
// meuObjeto.prototype.nome = 'Anônimo'
// meuObjeto.prototype.falar = function () { console.log(`Bom dia, meu nome é ${this.nome}!`) }

// obj1.falar()

// obj2.nome = 'Rafael'
// obj2.falar()

// const obj3 = {}
// obj3.__proto__ = meuObjeto.prototype
// obj3.nome = 'Luizo'
// obj3.falar()

// // Resumindo
// console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
// console.log(meuObjeto.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null) //Não tem nenhum objeto depois de Object.prototype


// // String, Array e Object tem uma função .prototype
// console.log(typeof String)
// console.log(typeof Array)
// console.log(typeof Object)

// // join é uma função do array que junta todos os elementos de um array em uma frase
// String.prototype.reverse = function () {
//     return this.split('').reverse().join('')
// }

// console.log('Escola Cod3r'.reverse())

// Array.prototype.first = function () {
//     return this[0]
// }

// console.log([1, 2, 3, 4, 5].first())
// console.log(['a', 'b', 'c'].first())

// String.prototype.toString = () =>{
//     return 'Lascou tudo'
// }

// // console.log('Escola cod3r'.reverse())

// function Aula(nome, videoID){
//     this.nome = nome
//     this.videoID = videoID
// }

// const aula1 = new Aula('Bem Vindo', 123)
// const aula2 = new Aula('Bem Vindo', 456)
// console.log(aula1, aula2)

// // Simulando o operador New
// // Operador spread rest = ...
// function novo(f, ...params){
//     const obj = {}
//     obj.__proto__ = f.prototype
//     f.apply(obj, params)
//     return obj
// }   

// const aula3 = novo(Aula, 'Bem vindo', 123)
// const aula4 = novo(Aula,  'Até Breve', 456)
// console.log(aula3, aula4)
