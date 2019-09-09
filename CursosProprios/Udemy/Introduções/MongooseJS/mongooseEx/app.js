//Modulos
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000
const routerCRUD = require('./routes/crud')

const url = "mongodb+srv://usuario_admin:exXIpRKj2MZCWuRF@cluster0-8asr5.mongodb.net/test?retryWrites=true"
const options = {  reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

//Connection with mongoose      
mongoose.connect(url, options)
mongoose.connection.on('desconected', () => {
    console.log('Voce foi desconectado')
})
mongoose.connection.on('connected', () => {
    console.log('Voce está conectado')
})
mongoose.connection.on('error', (err) => {
    console.log('Algo de errado não está certo: ', err)
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use('/', routerCRUD)

app.listen(port, () => {
    console.log(`Escutando na porta: ${port}`)
})

