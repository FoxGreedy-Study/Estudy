const {
    ok,
    deepEqual
} = require('assert')

const database = require('./database')

const NOME_ARQUIVO_DEFAULT = {
    nome: "Deadpool",
    poder: "Zueiro",
    id: 1
}

describe('Analisando se esse anti-herói é bom mesmo meu irmao', ()=>{
    it('Não deve ser bom e nem mal, tem que ser zueiro', async()=>{
        const expected = NOME_ARQUIVO_DEFAULT
        const [resultado] = database.listar(expected.id)

        ok(expected, resultado)
    })
}) 
