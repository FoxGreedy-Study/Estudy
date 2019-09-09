// Usando notação literal != JSON
const obj1 = {}
console.log(obj1)

// Object e js
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    // ai ficar visivel para a instancia por causa do this
    this.getPrecoComDesconto = () => preco * (1 - desconto)
}

const p1 = new Produto('caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 1499.99, 0.2)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory, é um padrão de projeto que fabrica uma coisa
function criarLoja(nome, endereco, despesas) {
    return {
        nome,
        endereco,
        despesas,
        calcularDespesas() {
            soma = 0
            for (despesa in despesas) {
                soma += despesas[despesa]
            }
            return soma
        }
    }
}

const l1 = criarLoja('Magazineluisa', { Rua: 'Rua dos bobos', numero: 909 }, { aluguel: 3500, agua: 300, luz: 23.40 })
console.log(l1)
console.log(l1.calcularDespesas())

// função create do object
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funçã famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
// JSON é uma extrutura de dados textual que pode ser convertido por objeto