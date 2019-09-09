const {
    ok,
    deepEqual
} = require('assert')

const database = require('./dabase')

const HEROIS_PADRAO = {
    nome: 'Matheus',
    poder: 'peidar',
    id: 1
}

const HEROIS_ATUALIZAR = {
    nome: "Igor",
    poder: 'surdez',
    id: 2
}

//Criando um CRUD(Create, Read, Update e Delete) em node.js
describe('Será que esse herói é verídico????', () => {
    // before executa algo antes de tudo
    before(async () => {
        await database.escrever(HEROIS_PADRAO)
        await database.escrever(HEROIS_ATUALIZAR)
    })
    //READ
    it('Descobrindo a verdade por trás da vida dos heróis, pesquisando...', async () => {
        const expected = HEROIS_PADRAO
        const [resultado] = await database.listar(expected.id)

        deepEqual(expected, resultado)
    })
    //CREATE
    it('Projeto fabrica de heroi, criando herois desde 1999', async () => {

        const expected = HEROIS_PADRAO
        const resultado = await database.escrever(HEROIS_PADRAO)
        const [actual] = await database.listar(HEROIS_PADRAO.id)

        deepEqual(actual, expected)
    })
    //DELETE
    //it.only faz com que apenas esse teste seja executado
    it.only('Excluindo os heróis fracos e magrelos', async () => {
        const expected = true
        const resultado = await database.deletar(HEROIS_PADRAO.id)
        deepEqual(expected, resultado)


    })
    //uma função anonima é uma função que não precisa ser startada e nem declarada
    it('Tornando um heroi em um monstro', async () => {

        const expected = {
            ...HEROIS_ATUALIZAR,
            nome: 'Batman',
            poder: 'dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            pode: 'dinheiro'
        }
        await database.atualizar(HEROIS_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(HEROIS_ATUALIZAR.id)
        deepEqual(resultado, expected)

    })


})