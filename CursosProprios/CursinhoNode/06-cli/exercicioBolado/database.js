const {
    readFile,
    writeFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.arquivo = "mugiwaras.json"
    }
    async pegarTexto() {
        const gravarTexto = await readFileAsync(this.arquivo, 'utf8')
        return JSON.parse(gravarTexto.toString())
    }
    async listar(id) {
        const textoGravado = await this.pegarTexto()
        const dadosFiltrados = textoGravado.filter(item => id ? item.id === id : true)
        return dadosFiltrados
    }

    async gravarDados(dados) {
        await writeFileAsync(this.arquivo, JSON.stringify(dados))
        return true
    }

    async escrever(heroi) {
        //o this antes da função significa que vc esta pegando a função dentro da pagina
        const dados = await this.pegarTexto()
        const id = heroi <= 2 ? heroi.id : Date.now()

        const construirHeroi = {
            id,
            ...heroi
        }
        const dadoPronto = [
            ...dados,
            construirHeroi
        ]
        const resultado = await this.gravarDados(dadoPronto)
        return resultado
    }

    async remover(id) {

        const dados = await this.pegarTexto()

        if (id) {
            await this.gravarDados([])
        }

        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            //Retornar um erro
            throw Error('Usuario não foi encontrado')
        }

        //O splice server para voce conseguir tirar um elemento a partir de um indice
        dados.splice(indice, 1)
        return await this.gravarDados(dados)

    }

    async atualizar(id, modificacao) {

        const dados = await this.pegarTexto()
        const indice = dados.findIndex(item => item.id === id)

        if (indice === -1) {
            throw Error('Esse cara não existe man')
        }

        //Sempre é muito mais interessante não usar muitas consultas, por isso pegaremos do próprio array entre pelo
        //método pegarTexto()
        
        //pega os dados
        const dadoSelecionado = dados[indice]
        //tira os que você não quer
        dados.splice(indice, 1)

        const objetoAtualizado = {
            ...dadoSelecionado,
            ...modificacao
        }
        return await this.gravarDados([
            ...dados,
            objetoAtualizado
        ])
    }
}

module.exports = new Database()