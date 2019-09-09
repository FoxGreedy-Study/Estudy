function retornarDadosUsuario(){
    return new Promise((resolve, reject)=>{
        const usuario = {
            nome : "Erick",
            userId: 2
        }
        return resolve(usuario)
    })
}

function retornarTelefone(usuario){
    return new Promise((resolve, reject)=>{
            usuario.telefone = [{userId:usuario.userId, numero:'(11) 9999-8888'}]
            return resolve(usuario)
    })
}

function retornarEndereco(usuario){
    return new Promise((resolve,reject)=>{
        usuario.endereco = [{userId:usuario.userId, descricao:'Rua dos bobos, 250'}]
        return resolve(usuario)
    })
}

function retornarVeiculo(usuario){
    return new Promise((resolve, reject)=>{
        usuario.veiculo = [{userId:usuario.userId, descricao:'Ford Fusion'}]
        return resolve(usuario)
    })
}

retornarDadosUsuario()
.then(retornarEndereco)
.then(retornarTelefone)
.then(retornarVeiculo)
.then((resultados)=>{
    console.time('Tempo percorrido')
    let mensagem = `
    
    Nome: ${resultados.nome}
    Endereço: ${resultados.endereco[0].descricao}
    Telefone: ${resultados.telefone[0].numero}
    Veículo: ${resultados.veiculo[0].descricao}
    
    `
    console.log(mensagem)
    console.timeEnd('Tempo percorrido')
})
.catch(function (error){
    console.log('Deu erro mermão, corre', error)
})

















// function retornarDadosUsuario(){
//     return new Promise((resolve, reject) => {
//         const usuario = {
//             "nome":'erick',
//             "id":10
//         }
//         return resolve(usuario)
//     })
// }

// function retornarEndereco(usuario){
//     return new Promise((resolve, reject) => {
//         usuario.endereco = [{'userId':usuario.id, 'descricao':'Rua dos bobos, 9'}]
//         return resolve(usuario)
//     })
// }

// function retornarTelefone(usuario){
//     return new Promise((resolve, reject) => {
//         usuario.telefone = [{'userId':usuario.id, 'numero':'(11) 9999-9999'}]
//         return resolve(usuario)
//     })
// }

// function retornarVeiculo(usuario){
//     return new Promise((resolve, reject)=>{
//         usuario.veiculo = [{'userId':usuario.id, 'descricao': 'Fuscão Turbo'}]
//         return resolve(usuario)
//     })
// }

// retornarDadosUsuario()

// .then(retornarEndereco)
// .then(retornarTelefone)
// .then(retornarVeiculo)
// .then(
//     (resultados) => {
//         let mensagem = `
//                     Usuario: ${resultados.nome}
//                     Endereco: ${resultados.endereco[0].descricao}
//                     Telefone: ${resultados.telefone[0].numero}
//                     Veiculo: ${resultados.veiculo[0].descricao}
//           `;
//           console.log(mensagem);
//         },

//     (erro) => {
//      console.log("A coisa tá feia pro teu lado mermao, ta dificil hein", erro)
//     })
// .catch(function (error){
//     console.log('As promessa não foram cumpridas', error)
// })