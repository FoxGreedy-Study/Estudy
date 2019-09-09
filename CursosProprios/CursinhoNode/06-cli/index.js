const Commander = require('commander')
const database = require('./dabase')
const Heroi = require('./heroi')

async function main() {
    //O help define todas as exibições do nosso objeto
    Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do herói")
    .option('-p, --poder [value]', "Poder do herói")
    .option('-i, --id [value]', "id do herói")

    .option('-c, --cadastrar', "cadastrar um heroi")
    .option('-l, --listar', "listar os herois")
    .option('-r, --remover [value]', "remove um heroi pelo id")
    .option('-a, --atualizar [value]', "Atualizar um heroi pelo id")
    .parse(process.argv)
    
    const heroi = new Heroi(Commander)
 
    try {
        if(Commander.cadastrar){
            delete heroi.id

            const resultado = await database.escrever(heroi)
            if(!resultado){
                console.error('Heroi não foi cadastrado', error)
                return
            }
            console.log('Heroi cadastrado com sucesso!')
        }
        if(Commander.listar){
            const resultado = await database.listar()
            console.log(resultado)
            return
        }
        if(Commander.remover){
            const resultado = await database.deletar(heroi.id)
            if(!resultado){
                console.log('não foi possível remover o heroi')
                return
            }
            console.log('heroi removido com sucesso')
        }
        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar)
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado){
                console.error('Não foi possivel atualizar o heroi', error)
                return
            }
            console.log('Heroi atualizado com sucesso!')
        }
    } catch (error) {
        console.error('Deu ruim bonito mermão', error)
    }
}
main()