const  EventMitter = require('events')
//Depois de ter criado a função eu faço com que ela se torne uma classe no codigo
class MeuEmissor extends EventMitter{

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click){
    console.log('você clicou no ', click)
})
//Ficar esperando em um momento específico, quando o usuario ou algo interagir diretamento com ele
//Usamos o ponto emit para acionar o evento
meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no botão ok');
//Conseguimos usar o count ++ dentro de um comentário ou de um valor, o Yoshi não ensinou isso
let count = 0
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'no ok' + count++ + 'Vezes')
}, 4000);