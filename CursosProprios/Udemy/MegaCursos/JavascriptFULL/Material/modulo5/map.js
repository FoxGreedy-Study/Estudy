// Map serve para percorrer cada elemento e transformá-lo em outro
// Mapeando um array para outro
const nums = [1, 2, 3, 4, 5]

// Map é um for com propósito
// Ou seja, ele transforma cada elemento do array
let resultado = nums.map(e => e * 2)
console.log(resultado)

// O map não causa modificação no array atual, ele gera OUTRO array
const soma10 = e => e + 10
const triplo = e => e * 3
// Lembrando, o replace substitui um elemento por outros
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Com o map eu consigo intercalar calculos sucessivamente em um array:
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
