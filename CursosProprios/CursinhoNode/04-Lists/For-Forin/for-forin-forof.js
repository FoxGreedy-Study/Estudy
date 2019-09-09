const service = require('./service')

async function main(){

try{
    //Usando a função importada de serviços, conseguimos listar os nomes
    const result = await service.obterPersonagens('a')
    const names = [];
    console.time('Tempão')
    for(let i=0; i<=result.results.length - 1; i++){
        const pessoa = result.results[i]
        names.push(pessoa.name)
    }
    console.log("Names", names )
    console.timeEnd('Tempão')
    
    
    
    console.time('forin')
    for(let i in result.results){
        const pessoa = result.results[i]
        names.push(pessoa.name)
    }
    

    
    console.timeEnd("forin")
    console.time('forof')
    for(pessoa of result.results){
        names.push(pessoa.name)
    }
    console.log('Names', names)
    console.timeEnd('forof')

}catch(error){
    console.error('Erro Interno', error)
}

}
main()