const service = require('./service')


//Uma função que mapeia e ajuda a manipular as coisas
//Ele está criando um array que mapeia jsons
Array.prototype.meuMap = function(callback){
    
    const novoArrayMapeado = []
    
    for(let i=0; i< this.length; i++){
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main(){

    try {
        
        const results = await service.obterPersonagens(`a`)


        const names  = results.results.meuMap(function (pessoas, indice){return `[${indice}], ${pessoas.name}`})



        console.log(names)

    } catch (error) {
        console.error('Deu ruim mermão', error)
    }
}
main()




















// Array.prototype.meuMap = function (callback){
//     const novoArrayMapeado = []
//     for(let i = 0; i <= this.length - 1; i++){
//         const resultado = callback(this[i], i)
//         novoArrayMapeado.push(resultado)
//     }

//     return novoArrayMapeado
// }

// async function main(){

//     try {
//         const results = await service.obterPersonagens(`a`)
//         //Diferença do foreach para o array
//         // results.results.forEach(function (item){
//         //     names.push(item.name)
//         // })

//         //Com o map, eu consigo resgatar os dados sem uma funcção auxiliar, map é um for reduzido

//         // => - arrow Function

//         const name = results.results.meuMap(function (pessoa,indice){
//             return `[${indice}]${pessoa.name}`
//         }) 

//         console.log("name", name)

//     } catch (error) {
//         console.error('Deu Ruim', error)
//     }

// }

// main()