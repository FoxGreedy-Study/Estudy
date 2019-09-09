// console.log(global)

// Pelo motivo de um objeto estar em todos os lugares e poder ser alterado, usamo o object.freeze
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    }, 
    nome: 'Sistema Legal'
})

console.log(global.MinhaApp)



