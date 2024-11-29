var database = require("../database/config")

function cadastrarPontos(idUsuario, acertos, erros)
{
    var instrucaoSqlCadastrarPontos = `
    INSERT INT quiz(acertos, erros, fkUsuario) VALUES
    (${acertos}, ${erros}, ${idUsuario})`

    console.log("Executando a instrução SQL: \n" + instrucaoSqlCadastrarPontos);

    database.executar(instrucaoSqlCadastrarPontos)
}

function pontuacaoUsuario(idUsuario) {
    var instrucaoSqlPontuacao = `SELECT idQuiz, acertos, erros, fkUsuario FROM quiz WHERE fkUsuario = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSqlPontuacao);

    database.executar(instrucaoSqlPontuacao);
}

module.exports = {
    cadastrarPontos,
    pontuacaoUsuario
}