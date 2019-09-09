const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function obterPersonagens(nomes){
    const url = `${URL}/?search=${nomes}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPersonagens
}



















// const axios = require('axios')
// const URL = `https://swapi.co/api/people`

// //Usamos async porque queremos manipular promises internamente 
// async function obterPessoas(nome){
//     const url = `${URL}/?search=${nome}&format=json`
//     //Nota-se que o axios é pareciso como uma promises
//     const response = await axios.get(url)
//     return response.data
// }

// //Para exportar um modulo, usamos module.exports, assim todos os nossos arquivos conseguem enxergar a 
// //função que vc determinar em outro arquivo
// module.exports = {
//     obterPessoas
// }

