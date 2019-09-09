//FileSystem 
const {
    readFile,
    writeFile
} = require('fs')
//Java util, promisify serve para transformar callbacks ou funções com parâmetro em promises
const {
    promisify
} = require('util')




const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

//Outra forma de obter dados do json
// const dadosJson = require('.herois.json')

class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivos(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    escreverArquivo(){
        
    }
    async listar(id){
        const dados = await this.obterDadosArquivos()
        const dadosFiltrados = dados.filter(item => (id ?( item.id === id) : true))
        console.log('Batata', dadosFiltrados)
        return dadosFiltrados
    }
}

module.exports = new Database()