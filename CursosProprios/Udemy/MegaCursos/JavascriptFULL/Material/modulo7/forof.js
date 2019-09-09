// For of
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ["Map", "Set", "Promise"]

// For in percorre em cima de indice
for (let i in assuntosEcma) {
    console.log(i)
}

// For of percorre em cima de elementos
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordados: true }],
    ['Set', { abordados: true }],
    ['Primise', { abordados: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for ([ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

//  Conseguimos usar o for of dentro de um set tbm e dentro de dentro de qualquer estrutura de dados