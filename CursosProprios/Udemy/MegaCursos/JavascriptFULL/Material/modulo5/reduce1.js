const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// reduce recebe os dois primeiros elementos do array, e acumula os valores no primeiro elemento através de um função 
const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) =>{
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

// Eu consigo acumular todos os resultados de um array com o reduce
console.log('Resultado', resultado)