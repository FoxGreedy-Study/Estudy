
function obterMedico(callback){
    setTimeout(() => {
        return callback(null, {
            id:11,
            nome: "Matheus",
            sobrenome: "Gomes"
        })
    }, 1000);
}

function obterTelefone(medico, callback){
    setTimeout(() => {
        return callback(null,{
            numeroTel:"9999-8888",
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(medico, callback){
    setTimeout(() => {
        return callback(null,{
            rua: "Das Batatas",
            numero: 20
        })
    }, 2000);
}

obterMedico(function resolverMedico(error, medico){
    if(error){
        console.log("Mermão deu erro mas ta suave", error)
    }
    obterTelefone(medico.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.log('Corre que o bagulho ja ta osso', error1)
        }
        obterEndereco(medico.id, function reolverEndereco(error2, endereco){
            if(error2){
                console.log("Mano vamos embora que vai explodir", error2)
            }
            console.time('Batata')
            console.log(`
            Nome: ${medico.nome} ${medico.sobrenome}
            Telefone: (${telefone.ddd}) ${telefone.numeroTel} 
            Endereco: ${endereco.rua}, ${endereco.numero}
            `)
            console.timeEnd('Batata')
        })
    })
})