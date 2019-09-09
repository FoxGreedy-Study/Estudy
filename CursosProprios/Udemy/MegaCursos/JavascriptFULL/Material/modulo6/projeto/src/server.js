const express = require('express')
const bodyParser = require('body-parser')

const bancoDeDados = require('./bancoDeDados')
const porta = process.env.PORTA || 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.put('/produtos/:id', (req, res, next) => {
    let { name, preco } = req.body
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        name,
        preco
    })
    res.send(produto)
})

app.post('/produtos', (req, res, next) => {
    let { name, preco } = req.body
    const produto = bancoDeDados.salvarProduto({
        name,
        preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`)
})