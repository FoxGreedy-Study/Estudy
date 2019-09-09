

class Mugiwara {
    //Nesse caso, no contrutor usamos chaves, para conseguirmos pegar os valores dentro de um array no commander
    constructor({id, nome, poder}){
        this.id = id
        this.nome = nome
        this.poder = poder
    }
}

// quando vamos exportar, so exportamos o objeto, vale ressaltar que ele não é uma função então não tem ()
module.exports = Mugiwara