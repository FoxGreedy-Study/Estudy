//Vamos Praticar agora o async - await
//Além disso vamos nos familiarizar com o módulo nativo util
const util = require('util')
const resolverTelefoneAsync = util.promisify(guardarTelefone)
const resolverEnderecoAsync = util.promisify(guardarEndereco)
function guardarDadosUsuario(){
    return new Promise((resolve, reject)=>{
        const usuario = {
            id: 1,
            nome: 'Batatudo'
        }
        return resolve(usuario)
    })
}

function guardarTelefone(usuario, callback){
    return callback(null,{
            numero:'9999-1111',
            ddd:11
    })
}

function guardarEndereco(usuario, callback){
    return callback(null,{
            rua: 'Dos Bobos',
            numero: 230
    })
}

async function main(){
    try{

        const usuario = await guardarDadosUsuario()

        const resultados = await Promise.all([
            resolverEnderecoAsync(usuario.id),
            resolverTelefoneAsync(usuario.id)
        ]
        )   
        const endereco = resultados[0]
        const telefone = resultados[1]
        // const endereco = await resolverEnderecoAsync(usuario.id)
        // const telefone = await resolverTelefoneAsync(usuario.id)

        console.log(`
        Nome: ${usuario.nome}
        Endereço: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.numero}
        `)
    }catch(error){
        console.error('Deu ruim mermão, abortar a missão bro', error)
    }
}
main()