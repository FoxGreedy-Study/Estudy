const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    title:String,
    author: String,
    category: String
})

module.exports = mongoose.model('Book', UserSchema)