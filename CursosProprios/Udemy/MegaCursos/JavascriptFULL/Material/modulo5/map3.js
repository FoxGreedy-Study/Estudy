Array.prototype.Map2 = function (callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

let array = ['Batata', 'Carro', 'Joaninha']
let resultado = array.Map2((e) => `ele${e}`)

console.log(array,resultado)