const pilotos = ['Vetel', 'Alonso', 'Raikkone', 'Massa']

pilotos.pop() // Remove o ultimo elemento do array
pilotos.push('Vestotan') // Adiciona o array no próximo indice

pilotos.shift() // Remove o primeito elemento da lista
pilotos.unshift('Hamilton') // Adiciona na primeira casa de um array

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona e remove elementos a partir de um indice

pilotos.splice(3, 1)
console.log(pilotos)

// Pega todos os elementos posteriores a partir de um indice até outro indice
// Vale ressaltar que slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos1)
console.log(algunsPilotos2)

// shift e unshit, respectivamente tira e coloca da primeira posição
// pop, remove da ultima posição
// splice, tira elementos e acrescenta elementos
// slice, recorta o array de um indice até outro