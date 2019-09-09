// Com map eu transformo, com foreach eu percorro todos os elementos, com filter eu filtro

const produtos = [
    { nome: 'Notebook', preco: 9249.99, fragil: true },
    { nome: 'iPad Pro', preco: 4956.99, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 9.59, fragil: false }
]

// O array.filter funciona através de uma loogica booleana, onde os elementos que dão falsos são eliminados da lista
console.log(produtos.filter((p) => {
    return p.fragil
}))

// Consigo usar varios filters sucessivamente
console.log(produtos.filter((p) => p.fragil).filter((p) => p.preco > 3000))
