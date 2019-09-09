const contadorA = require('./intanciaUnica')
const contadorB = require('./intanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
contadorA.inc()
contadorA.inc()

// Quando é retornado através de um require, o node  ele faz cache dos objetos, logo o node memoriza as manipulações de um obj
console.log(contadorB.valor)

// Conseguimos contornar este problema através da função factory, tal que o objeto é criado apenas dentro da pagina
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC, contadorD)