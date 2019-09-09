const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// foreach tem como parametro um callback, que passa o proprio elemento e o indice correspondente 
aprovados.forEach((nome, indice) => console.log(`${indice + 1} - ${nome}`))

// Eu não sou obrigado a passar nenhum parametro
aprovados.forEach((nome) => console.log(`${nome}`))

// Consigo armazenar um função numa variavel e passar pelo foreach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// Consigo usar como terceiro parametro dentro do callback do foreach, um array
aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})

