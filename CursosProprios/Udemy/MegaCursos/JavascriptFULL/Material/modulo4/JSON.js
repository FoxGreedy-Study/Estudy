// //  JSON - JavasScript Object Notation -> Formato de dados usado para interoperabilidade entre sistemas
// // Ele é muito usado entre comunicações de sistemas
// const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
// console.log(JSON.stringify(obj)) // Percebe-se que a função saiu do array

// // O JSON não usa aspas simples
// console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
// // As strings tbm tem que ser delimitadas por aspas duplas
// console.log(JSON.parse('{ "a": 1, "b": "String", "c": true, "d": {}, "e": [] }'))
