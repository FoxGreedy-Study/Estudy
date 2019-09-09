const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./Config/config')

const port = process.env.PORT || 3000

//String conexão -> mongodb+srv://usuario_admin:<password>@clusterapi-r8gp3.mongodb.net/test?retryWrites=true
const url = config.bd_string
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

//Mongoose.connect(endereçoApi, opçõesConexão)
mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados', err)
})

mongoose.connection.on('disconnected', () => {
    console.log("Aplicação desconectada do banco de dados")
})

//BODY-PARSER, trazer tudo em json através da estrutura body 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const indexRoute = require('./Routes/index')
const usersRoute = require('./Routes/users')


app.use('/', indexRoute)
app.use('/usuarios', usersRoute)
//O primeiro parametro do get serve para apontar o endereço(Endpoint) onde a response será enviada

app.listen(port, () => {
    console.log(`Lendo na porta ${port}`)
})

module.exports = app
