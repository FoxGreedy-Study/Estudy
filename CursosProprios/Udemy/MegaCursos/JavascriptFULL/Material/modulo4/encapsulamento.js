const sequencia = {
    // Convenção de uma variavel privada no js
    _valor: 1,
    // O javascript não permite sobrecarga de metodos, exceto para get and set
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        }
     }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

// Resumindo eu criei uma pseudo variavel com get e set, eu chamo automaticamente set quando vou atribuir um valor
// E eu chamo automaticando get quando vou invocar o valor da variavel