// Operador Spread e Rest 
// Usar Spread com objeto
const funcionario = { nome: 'Maria', salario: 2499.99 }
// Quando uso o spread em um objeto, eu estou espalhando todos os atributos deste objeto
// Nesse contexto estou espalhando = Spread
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usando spread em um array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = [ 'Maria', 'Rafaela', ...grupoA, 'Julio']
console.log(grupoFinal)

// Logo rest eu paço parametros para uma função e os juntos em uma estrutura array
// E no spread eu espalho atributos ou elementos em uma estrutura