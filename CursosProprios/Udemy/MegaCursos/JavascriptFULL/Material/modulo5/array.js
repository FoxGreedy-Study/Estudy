console.log(typeof Array, typeof new Array, typeof [])
// O array no javascript é uma estrutura dinamica, podendo acrescentar muitos tipos de dados uma vez em um array
// Entretando, a boa prática induz a usarmos apenas um tipo de dado por array

// Criando um array com uma instanciação
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Criando um array pela notação literal
let aprovados2 = ['Bia', 'Carlos', 'Ana']
console.log(aprovados2)

// O javascript, como muitas outras linguagens, indexa o primeiro elemento de um array no indice 0
console.log(aprovados2[0])
// Quando não existe um parâmetro ou elemento, o javascript o determina como undefined, evitando erro com o codigo
// Undefined é um possivel erro que esteja ocorrendo num codigo?
console.log(aprovados2[3])

aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// Ordena em ordem alfabetica
aprovados.sort()
console.log(aprovados)

// Quando um elemento é deletado, o array não é reordenado
delete aprovados[1]
console.log(aprovados)

console.log(aprovados[2])

// Remove elementos, adiciona elemento, reordena elementos
aprovados2.splice(1, 1, 'Elemento 1', 'Elemento 2')
console.log(aprovados2)
// Os primeiro árametro serve para diver por onde ele vai começar a exclusão e a inserção, o segundo fala quantos elementos,
// Serão excluidos a partir daquele ponto e os proximos parametros servem para inserir algo