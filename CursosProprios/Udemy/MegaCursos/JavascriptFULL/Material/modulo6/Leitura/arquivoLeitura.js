const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrona 
fs.readFile(caminho, 'utf-8', (err, send) => {
    const config = JSON.parse(send)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)


// Usamos o fs para ler diretorios

fs.readdir(__dirname, (err, arquivos )=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})