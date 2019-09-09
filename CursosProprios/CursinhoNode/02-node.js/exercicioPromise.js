

function retornarDadosUsuario() {
    //passamos por parametro uma "Arrow Function"
    // basicamente é uma função anonima que possui dois parametros
    // é a mesma coisa que definir 
    //function (resolve, reject) {};
     
    //o nome dos parametros são ficticios, poderíamos 
    //definir como batata e pastel que nao daria problema, o importante é 
    //entender o que são estes parametros e qual é a função deles.
    return new Promise((resolve, reject) => {
        //para melhor entendimento dos valores retornados,
        //vamos definir valores pre definidos daqui para frente
        const usuario = { 'nome': 'Erick Wendel', 'id': 10 };
         
        //supondo que nossa base de dados esteja vazia, podemos rejeitar a solicitacao
        //e explicar o motivo do erro, descomente a linha abaixo para ver o resultado
        // return reject("Não existem usuarios cadastrados em sua base de dados.");
         
        return resolve(usuario);

    });

};

function retornarEndereco(usuario) {
    return new Promise((resolve, reject) => {
        usuario.endereco = [{ 'userId': usuario.id, 'descricao': 'Rua dos bobos, 0' }];
        return resolve(usuario);
    });
};
function retornarTelefone(usuario) {
    return new Promise((resolve, reject) => {
        usuario.telefone = [{ 'userId': usuario.id, 'numero': '(11) 9999-9999' }];
        return resolve(usuario);
    });
};

function retornarVeiculo(usuario) {
    return new Promise((resolve, reject) => {
        usuario.veiculo = [{ 'userId': usuario.id, 'descricao': 'Fuscão Turbo' }];
        return resolve(usuario);
    });
};


/* chamadas das funcoes */
//Basicamente, as instancias de promises retornarão
//os resultados ou erro (caso em algum lugar for rejeitado)
retornarDadosUsuario()
    // a função THEN exige como argumento uma função que
    // receba um callback como argumento que será o resultado da função anterior,
    // como a assinatura de nossos métodos foram definidas para receber os resultados
    // de nosso usuario, como parametro, delegamos à função then nossa função.
    // neste ponto não estamos fazendo uma chamada, e sim enviando a função para que seja 
    // executada após o retorno deste valor.
    //A funcao só será executada no estado fulfilled (resolvido) da Promise
    .then(retornarEndereco)
    .then(retornarTelefone)
    .then(retornarVeiculo)
    
    //ao executar todas as funções desejadas para construir nosso usuario
    //temos uma ultima chamada para tratar os valores finais retornados.
    //neste ponto teremos como segundo parametro da funcao THEN uma função 
    //que tratará os valores que foram rejeitados pelas promises em nossas chamadas

    .then(
        (resultados) => {
            let mensagem = `
                                Usuario: ${resultados.nome},
                                Endereco: ${resultados.endereco[0].descricao}
                                Telefone: ${resultados.telefone[0].numero}
                                Veiculo: ${resultados.veiculo[0].descricao}
                            `;

            console.log(mensagem);
        },
        
        //caso alguma de nossas promises rejeite algum valor
        //todas as funções sucessoras serão canceladas e não-executadas
        //assim, o primeiro que rejeitar o valor, será a resposta para nosso erro
        //a função somente será executada no estado rejected (Rejeitado) da Promise
        (error) => {
            console.log(`deu zica !!!! [ ${error} ]`);
        });
/*
// Saída:
//         Usuario: Erick Wendel,
//         Endereco: Rua dos bobos, 0
//         Telefone: (11) 9999-9999
//         Veiculo: Fuscão Turbo
//  */



