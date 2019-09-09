
const express = require('express')
const router = express.Router()
const auth = require('../Middleware/auth')

router.get('/', auth, (req, res) =>{
    
    console.log(res.locals.auth_data)
    return res.status(200).send({message:"Essa informação é muito importante, usuários não deveriam recebê-la"})
})

router.post('/', (req, res) =>{
    return res.status(200).send({message:"Tudo ok com o método POST na rota raiz"})
}) 

module.exports = router

/*

STATUS DE ENVIO

200 - OK
201 - Created
202 - Accepted

400 - Bad Request
401 - Não Autorizado - Autenticação (Caráter temporário)
403 - Forbidden - Permanente - Autorização
404 - Not found

500 - Internal server error
501 - Not implemented - a API não suporta essa funcionalidade


*/