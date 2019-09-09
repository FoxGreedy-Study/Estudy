// Uso promise quando eu quero um processamento assincrono
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resolve sempre aceita um unico parametro
            resolve(frase)
        }, segundos * 1000)
    })
}

// As funções then é chamada quando voce resolve a promise
// Os parametros são encadeados entre os then
falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

