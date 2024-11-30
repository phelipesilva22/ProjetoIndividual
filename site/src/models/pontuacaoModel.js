var database = require("../database/config")

function cadastrarPontuacao(pontuacao, fkUsuario)
{
    var instrucaoSqlCadastrarPontuacao = `
    INSERT INTO quiz (pontuacao, fkUsuario) VALUES
    (${pontuacao}, ${fkUsuario})`

    console.log("Executando a instrução SQL: \n" + instrucaoSqlCadastrarPontuacao);

    database.executar(instrucaoSqlCadastrarPontuacao)
}


module.exports = {
    cadastrarPontuacao
}