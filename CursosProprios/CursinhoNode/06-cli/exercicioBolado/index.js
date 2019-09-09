const Commander = require('commander')
const database = require('./database')
const Mugiwara = require('./mugiwara')

async function main() {

    Commander
        .version('v1')
        .option('-i, --id [value]', 'Definir o id do personagem')
        .option('-n, --nome [value]', 'Definir o nome do personagem')
        .option('-p, --poder [value]', 'Definir o poder do personagem')

        .option('-c, --criar', 'Cria um personagem')
        .option('-l, --ler', 'Lista os personagens')
        .option('-a, --atualizar [value]', 'Atualiza um personagem')
        .option('-r, --remover [value]', 'remove um personagem')
        .parse(process.argv)

    const mugiwara = new Mugiwara(Commander)


    try {
        if (Commander.criar) {
            delete mugiwara.id

            const resultado = await database.escrever(mugiwara)
            if (!resultado) {
                console.error('Algo de errado não está certo')
                return
            }
            console.log('Cadastro realizado com sucesso, salveeee')
            return
        }
        if (Commander.ler) {
            const resultado = await database.listar()
            console.log(resultado)
            return
        }
        if (Commander.atualizar) {
            const idAtualizar = parseInt(Commander.atualizar)
            const dados = JSON.stringify(mugiwara)
            const heroiAtualizar = JSON.parse(dados)
            const resultado = await database.atualizar(idAtualizar, heroiAtualizar)

            if(!resultado){
                console.error('Algo deu errado', error)
                return
            }
            console.log('Tudo nos conformes bitch')

        }
        if(Commander.remover){
            const idRemover = parseInt(Commander.remover)
            const resultado = await database.remover(idRemover)
            if(!resultado){
                console.error('id não existe', error)
                return
            }
            console.log('Tudo nos conformes')
        }

    } catch (error) {
        console.error('Algo de errado não está certo', error)
    }
}

main()