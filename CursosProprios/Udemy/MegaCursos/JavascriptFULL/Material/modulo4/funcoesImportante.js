// Funções importantes

const pessoa = {
    nome: 'Rebecca',
    idade: 2,
    peso: 13
}

// Pegar as chavez do objeto
console.log(Object.keys(pessoa))
// Pegar os valores do objeto
console.log(Object.values(pessoa))
// Arrays que tem dois elementos - CHAVE, VALOR
console.log(Object.entries(pessoa))

// Operador destructuring - to tirando o valor de um array com dois elementos, chave, valor
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}, ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)