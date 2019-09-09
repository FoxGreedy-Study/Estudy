// const notas = [6.7, 7.4, 9.8, 8.1]

// for (i in notas) {
//     console.log(`${Number(i)+1} - ${notas[i]}`)
// }

// const pessoa = {
//     nome: 'Ana',
//     sobrenome: 'Silva',
//     idade: 29,
//     peso: 64
// }

// for(atributo in pessoa){
//     console.log(`${atributo} - ${pessoa[atributo]}`)
// }

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`y = ${nums[y]}`)
}