//Extrair apenas a função obter personagens da pagina service
// //Exemplo desse tipo de extração:
// const item = {
//     // nome:erick
//     // idade:12
// }
// const {nome, idade} = item
// console.log(nome, idade)
//Técnica chamada destructwing

//prototype = Extensão das funções do array
//Pode-ser perceber que o filter consegue diminuir o array através de um característica emm comum
Array.prototype.meuFilter = function (callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const resultado = callback(item, index, this)

        if(!resultado) continue;
        lista.push(item)
    }
    return lista
}

const {obterPersonagens} = require('./service')

async function main(){
try {
    
    const {results} = await obterPersonagens(`a`)

    // const familiaLars = results.filter(function(item){
    //     //Precisa retornar um booleano para dizer se precisa
    //     //Tirar ou manter da lista
    //     //False -> remove / True -> mantém
    //     //Não encontrou = -1
    //     //Encontrou = posiçãoNoArray
    //     const result = item.name.toLowerCase().indexOf(' lars') !== -1
    //     return result
    // })

    const familiaLars = results.meuFilter((item, index, lista) =>{
        console.log(`index: ${index}`, lista.length)
        return item.name.toLowerCase().indexOf('lars') !== -1
    })


    const names = familiaLars.map((pessoa)=> pessoa.name)
    console.log(names)

} catch (error) {
    console.error("Deu ruim", error)
}
}
main()