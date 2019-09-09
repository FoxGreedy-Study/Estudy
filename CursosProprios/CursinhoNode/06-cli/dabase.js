const{
    readFile, 
    writeFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database{

    constructor(){
        this.DADOS_DEFAULT_HEROIS = 'herois.json'
    }

    async obterDadosGravados(){
        const arquivo = await readFileAsync(this.DADOS_DEFAULT_HEROIS, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async listar(id){
        const dados = await this.obterDadosGravados()
        const dadosFiltrados = dados.filter(item => (id? (item.id === id): true))
        return dadosFiltrados
    }

    async escreverArquivo(dados){
        await writeFileAsync(this.DADOS_DEFAULT_HEROIS, JSON.stringify(dados))
        return true
    }

    async escrever(heroi){
        const dados = await this.obterDadosGravados()
        const id  = heroi <= 2 ? heroi.id : Date.now()


        //Eu consigo fazer concatenamento de arrays pelo '...', Consigo unir tanto indices '{}', quanto elementos '[]'
        const heroiComId ={
            id,
            ...heroi
            //Colocar o id do heroi que voce quer
        }

        const dadosFinal =[
            ...dados, 
            heroiComId
]        

        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }

    async deletar(id){

        const dados = await this.obterDadosGravados()
        if(id){
         await this.escreverArquivo([])
        }

        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('Usuario informado não existe')
        }
        
        //o método splice tira aquele objeto da lista, o outro parametro conta quantos dados serão tirados
        dados.splice(indice, 1)
        console.log('dados', dados)
        return await this.escreverArquivo(dados)
    }

    //O id e oq ele quer atualizar de fato
    async atualizar(id, modificacoes){
        const dados = await this.obterDadosGravados()
        const indice = dados.findIndex(item => item.id ===parseInt(id))
        if(indice === -1){
            throw Error('Heroi informado não existe')
        }

        const atual = dados[indice]
        
    // modificou os dados do objeto
        const objetoAtualizar = {
            ...atual,
            ...modificacoes
        }
    // excluiu da lista o objeto antigo
        dados.splice(indice, 1)
    // criou-se um novo objeto
        return await this.escreverArquivo([
            ...dados, 
            objetoAtualizar
        ])
    }
}

module.exports = new Database()