// É possivel criar um array referenciando ele em array.prototype e o chamando logo após isso
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
    return callback
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice, array) => {
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})
