
// Simulando array
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

// A partir d eum objetivo, vc consegue ter uma estrutura de um array
// Quando eu tneho um identificador que não respeita a regra padrão do Javascript, usamos colchetes

