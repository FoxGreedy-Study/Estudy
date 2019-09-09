'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Parametros conhecidos do schema: 
const BookSchema = new Schema ({
    title: String,
    published: {
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    detail: {
        modelNumber: Number,
        harcover: Boolean,
        reviews: Number,
        rank: Number
    }
})

module.exports = mongoose.model('Book', BookSchema)
