Array.prototype.reduce2 = function(callback){
    let novoArray = []
    for(let i; i < this.length; i++){
        novoArray.push(callback(this[i], this[i+1]))
    }
    return novoArray
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado1 = alunos.map((a) => a.bolsista).reduce((acumulador, valor) => acumulador && valor)
console.log(resultado1)