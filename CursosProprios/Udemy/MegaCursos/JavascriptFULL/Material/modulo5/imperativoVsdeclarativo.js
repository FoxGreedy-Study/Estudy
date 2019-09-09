const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

let total1 = 0
// Abordagem imperatica
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Abordagem declarativa
const getNota = aluno => aluno.nota
const soma =(total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

// Imperativo é quando vc vai ensinar alguem, fazendo passo a passo um algoritmo, se importando com o compreendimento
// Na maneira declarativa, vc diz internamente o que deve ser feita e as coisas são feitas, se importando com o resultado
// Como no reduce e no map, eles tem as suas estruturas internas
