const {obterPersonagens} = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial){
    let valorFinal = typeof valorInicial !==undefined ?valorInicial : this[0]
    for(let i = 0; i <= this.length; i ++){
        valorFinal = callback(valorFinal, this[i])
    }
    return valorFinal
}

async function main(){
    try {
     
        const {results} = await obterPersonagens(`a`)
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos ', pesos)
        //[20.2, 30.6, 40.5] = 0
        //Somar o anterior com o proximo
        // const total = pesos.reduce((anterior, proximo)=>{
        //     return anterior + proximo
        // }, 0)
        //usamos o reduce para conseguir reduzir a um valor final
        const minhaLista = [['Erick', 'Wendel'], ['node.br'], ['nerdzola']]
        const total = minhaLista.meuReduce((anterior, proximo) =>{
            return anterior.concat(proximo)
        }, [])
        .join(',')
        //O reduce consegue reduzir todo o array em um objeto, que no caso, é o total
        console.log('total ', total)

    } catch (error) {
        console.error('Deu ruim', error)
    }
}
main()