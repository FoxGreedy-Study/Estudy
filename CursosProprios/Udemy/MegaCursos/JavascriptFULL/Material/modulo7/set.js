// Não aceita repetição, nao indexada
const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Conrinthians')
times.add('Vasco')
times.add('Julio')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Palmeiras')
console.log(times)

const nomes = ['Raquel', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo', 'Raquel']
const nomesSet = new Set(nomes)
console.log(nomesSet)