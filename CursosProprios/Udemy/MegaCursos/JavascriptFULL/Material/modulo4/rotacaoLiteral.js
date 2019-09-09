// Notação Literal

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c } // Sintaxe reduzida da linha 5

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
// Eu posso nomear um objeto a partir de umatrib uto que não existe, faço-o existir dando valor a ele

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){

    },
    funcao2(){

    }
    // Na nova notação literal do javascript, eu consigo criar uma função diretamente, sem precisar do nome do atributo
    // Nesse caso o nome do atributo virar o nome da função em si
}