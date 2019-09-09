// Passar parametros é bem simples, é só eu passar o parametro dentro do nome
module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}