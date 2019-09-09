/*
0-Obter um usuario
1-Preciso obter o numero de um usuario a partir de seu ID
2-Obter o endereço do usuario pelo ID
*/

//A forma com que seu código é escrito, é diferente da ordem em que é executado, por isso usamos o callback
//O Callback ajuda saber onde está dando o problema e sincronizando todas as partes do programa
// Importamo um modulo  interno do Node.js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    // A função setTimeout, basicamente
    // executa uma função, e quando ela chegar nesse ponto, ela espera um tempo para sair da função
    // Callback sincroniza tudo o que é assíncrono

    return new Promise(function resolverPromise(resolve, reject){
        //Quando der algum problema -> reject(ERRO)
        //Quando success -> Resolve
        setTimeout(function() {
            // return reject(new Error('Deu Ruim De Verdade Bro'))

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)        
    })

}

function obterTelefone(idUsuario){
    
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
    
            // No callback, por convenção, faz-se o primeiro padrão como erro, e segundo como o sucesso
            return resolve({
                telefone: "1190-0002",
                ddd: 11
            })
            }, 2000);
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos Bobos',
            numero: 0
        })
    }, 2000);

}

//Adicionar a palavra async na função - automaticamente ela retornará uma Promise

async function main(){
    try{
        //console.time serve para conseguir medir o tempo de término de uma função
        console.time('medida-promise')
        const usuario = await obterUsuario();
        // const endereco = await obterEnderecoAsync(usuario.id);
        // const telefone = await obterTelefone(usuario.id)
        const resultado = await Promise.all([
            // O promise.all ajuda a otimizar o código, mas só pode ser usado quando as função dentro dele não são relacionadas
            obterEnderecoAsync(usuario.id),
            obterTelefone(usuario.id)
        ])
        const telefone = resultado[1]
        const endereco = resultado[0]

        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereço: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    }catch(error){
        console.error('DEU RUIM', error)
    }
}
// Nunca se esqueça de chamar o método main
main()

// const usuarioPromise = obterUsuario()
// Para manipular o sucesso, usamos a função .then
// Para manipular erros, usamos o .catch
//Usuario -> telefone ->
// usuarioPromise
//     .then(function (usuario){
        
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result){
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//                 }
//             })
//     })
//     .then(function (resultado){
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function (error){
//         console.log("DEU RUIM", error)
//     })



// obterUsuario(function resolverUsuario(error1, usuario){
//     //Para resolver os problemas de sincronia na programação, usa-se o callback que trata os dados, organizando-os 
//     //null || "" || 0 == false
//     if(error1){
//         console.error('DEU RUIM em USUARIO', erro)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('DEU RUIM em TELEFONE', error1)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error('DEU RUIM em ENDEREÇO', error1)
//                 return;    
//             }

//             console.log(`
//             Nome: ${usuario.nome}
//             Endereço: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `)    
//         })
//     })
// });

// const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);

// console.log("telefone", telefone)