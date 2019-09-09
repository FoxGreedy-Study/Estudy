// Tagged template serve para eu conseguir fragmentar uma String template

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[0], valor)
    })
    return resultado.join('')
}

const preco = 28.99
const precoParcela = 11
console.log(`Uma vez de ${preco} ou 3x de ${precoParcela}.`)