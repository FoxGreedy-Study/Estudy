const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
//Schema é um construtor que facilita as características do atributo cada atributo 
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true }, //Valores maiores e menores são iguaiss
    password: { type: String, required: true, select: false}, //select:false, não retorna na busca o password
    created: {type: Date,  default: Date.now}
})

//Não da para usar arrow functions por causa do this, que tem efeito diferente de uma função normal para uma arrow
UserSchema.pre('save', async function (next){
    let user = this
    if(!user.isModified('password')) return next()

    user.password = await bcrypt.hash(user.password, 10)
    return next()

})

module.exports = mongoose.model('User', UserSchema)
