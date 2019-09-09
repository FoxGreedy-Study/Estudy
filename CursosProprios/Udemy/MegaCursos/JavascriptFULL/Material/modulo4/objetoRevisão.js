// Objeto é uma coleção dinamica de pares - chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
// deletar valores de um objeto
delete produto.nome
delete produto.preco
console.log(produto)

const carro = {
    modelo: '444',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: () => {

    }
}

carro.proprietario.endereco.numero = 1000
// É possivel acessar os valores pelos colchetes, é bastante util para formar processos de algoritmos
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// Consigo deletar um valor de todos os valores
delete carro.condutores
delete carro['proprietario'].endereco
delete carro.calcularValorSeguro

console.log(carro)
// Dentro de um objeto eu consigo acessar até coisas que não existem
console.log(carro.condutores)
console.log(carro.condutores)