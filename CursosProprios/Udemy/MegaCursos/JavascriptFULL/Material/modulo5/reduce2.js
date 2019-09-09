const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio: retornar verdadeiro ou falso, todos os alunos são bolsistas?
// Recaptulando que o reduce pega dois elementos e faz uma operação com eles, sendo o primeiro o acumulador e o segundo,
// o valor a ser incrementado
const resultado1 = alunos.map((a) => a.bolsista).reduce((acumulador, valor) => acumulador && valor)
console.log(resultado1)

// Desafio 2: Algum aluno é bolsista?
const resultado2 = alunos.map((a) => a.bolsista).reduce((acumulador, valor) => acumulador || valor)
console.log(resultado2)