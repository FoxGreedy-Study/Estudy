//Importando a classe events para a variável EventEmitter
const EventEmitter = require('events')
//Criando a classe de eventos
class MeuEmissor extends EventEmitter{

}
//intanciando MeuEmissor
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

//Criando uma função click para o objeto
meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click)
}   )

// //Acionando o objeto, simulando um 'click'
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// //Consigo fazer um evento que acionará de tempo em tempo com 'setInterval'
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no ok ' + count ++ + ' vezes')
// }, 1000);

// O objetivo deste eento é ficar esperando uma situação em um evento específico e depois trabalhar com isso
const stdin = process.openStdin();
function main(){
    return new Promise((resolve, reject) => {
        stdin.addListener('data', function(value){
            //console.log(`Você digitou ${value.toString().trim()}`)
            return resolve(value)
        })
    })        
}
//Pode-se perceber que a maior diferença da promise para a o evento é que a promise apenas executa uma unica vez
main().then(function(resultado){
    console.log('resultado: ', resultado.toString())
})