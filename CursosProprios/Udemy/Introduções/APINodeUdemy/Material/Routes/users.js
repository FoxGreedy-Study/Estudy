const express = require('express')
const router = express.Router()
const Users = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const createUserToken = (UserId) => {
    return jwt.sign({ id: UserId }, 'batatafrita2019', { expiresIn: '7d' })
}

router.get('/', async (req, res) => {

    try{
        const user = await Users.find({})
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send({error : "Erro na consulta de usuarios!"})
    }

})

router.post('/create', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(400).send({ error: "Não esqueça de enviar a senha e o Email" })

    try {
        if (await Users.findOne({ email })) return res.status(401).send({ error: 'Usuario ja registrado' })

        const user = await Users.create(req.body)
        user.password = undefined

        return res.status(201).send({ user, token: createUserToken(user.id) })

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar usuario!' })
    }
})

router.post('/auth', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(400).send({ error: 'Dados insuficientes!' })

    try {
        const user = await Users.findOne({ email }).select('+password')
        if (!user) return res.status(400).send({ error: 'Usuario não registrado' })

        const pass_ok = await bcrypt.compare(password, user.password)

        if (!pass_ok){
            return res.status(401).send({ error: 'Login ou senha não encontrados' })
        } 
        
        user.password = undefined
        return res.status(200).send({ user, token: createUserToken(user.id) })
        
    } catch (err) {
        return res.status(500).send({ error: 'Erro ao autentificar usuário' })
    }

})

module.exports = router