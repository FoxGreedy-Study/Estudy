Array.prototype.filter2 = function (callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const array = [
    { nome: 'Notebook', preco: 9249.99, fragil: true },
    { nome: 'iPad Pro', preco: 4956.99, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 9.59, fragil: false }
]

const resultado = array.filter2((p) =>{
    return p.preco < 2000
})

console.log(resultado)