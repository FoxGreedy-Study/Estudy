const express = require('express')
const router = express.Router()
const book = require('../bookModel')

router.get('/', (req, res) => {
    console.log('getting all books')
    book.find({})
        .exec((err, books) => {
            if (err) {
                res.send('Se deu mal mermão')
            } else {
                console.log(books)
                res.json(books)
            }
        })
})


//Procurando dados pelo parametro id
router.get('/:id', (req, res) => {
    console.log('getting one book')
    book.findOne({
        _id: req.params.id
    })
        //Usamos, no mongoDB, exec para executar uma query
        .exec((err, book) => {
            if (err) {
                res.send('Id inválido')
            } else {
                console.log(book)
                res.json(book)
            }

        })
})


router.post('/', (req, res) => {
    console.log('Partiu biridins')

    //Instanciamos um novo book
    //Assim criamos um novo dado dentro do Schema
    let newBook = new book()

    newBook.title = req.body.title
    newBook.author = req.body.author
    newBook.category = req.body.category

    newBook.save((err, book) => {
        if (err) {
            res.send(book)
        } else {
            console.log(book)
            res.send(book)
        }
    })

})

//Outra maneira de construirmos um metodo post com o método .create
router.post('/book2', (req, res) => {
    book.create(req.body, (err, book) => {
        if (err) {
            res.send('error saving book')
        } else {
            console.log(book)
            res.send(book)
        }
    })
})

//Como fazemos um update no mongoose através de um put
//params - Passados pela url
//body - Passados pelo postman ou estrutura body

router.put('/:id', (req, res) => {
    //findOneAndUpdate
    book.findByIdAndUpdate({
        _id: req.params.id
    },
        { $set: { title: req.body.title } },
        { upsert: true },
        (err, newBook) => {
            if(err){
                console.log('Ocorreu um erro ao update')
            } else{
                res.status(204)
            }
        }
    )

})


module.exports = router