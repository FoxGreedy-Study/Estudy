////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////////// CRUD BOLADÃO EM NODE //////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const {
    ok,
    deepEqual
} = require('assert')

const database = require('./database')

const MUGIWARA_PADRAO = {
    Nome: "Mugiwara no luffy",
    Poder: "Gomu-Gomu no Mi",
    id: 2
}

const MUGIWARA_ATUALIZADO = {
    Nome: 'Nami',
    Poder: 'Navegar',
    id: 3
}

describe('Teste se você é um mugiwara!', () => {

    before(async () => {
        await database.escrever(MUGIWARA_PADRAO)
        await database.escrever(MUGIWARA_ATUALIZADO)
    })
    it('Ele está na tripulação', async () => {
        const expected = MUGIWARA_PADRAO
        const [dados] = await database.listar(expected.id)
        deepEqual(expected, dados)
    })
    it('Ele foi acrescentado à tripulação mais poderosa de todos os tempos', async () => {

        const expected = MUGIWARA_PADRAO

        const criarBodybuilder = await database.escrever(MUGIWARA_PADRAO)
        const [actual] = await database.listar(MUGIWARA_PADRAO.id)

        deepEqual(actual, expected)
    })
    //testar apenas aquele módulo com "only"
    it('Vamos exluir uns meliantes do convés', async () => {

        const expected = true
        const resultado = await database.remover(MUGIWARA_PADRAO.id)
        deepEqual(expected, resultado)

    })

    it.only('Bora treinar por dois anos e ser mais melhor hehehehe', async () => {

        const expected = {
            ...MUGIWARA_ATUALIZADO,
            poder: 'Clima e navegar',
            Nome: 'Nami swaaaan'
        }
        const novoDado = {
            poder: 'Clima e navegar',
            Nome: 'Nami swaaaan'
        }
        await database.atualizar(MUGIWARA_ATUALIZADO.id, novoDado)
        const [resultado] = await database.listar(MUGIWARA_ATUALIZADO.id)

        deepEqual(expected, resultado)
    })



})