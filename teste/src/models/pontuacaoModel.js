var database = require("../database/config")

function InserirPontuacao(pontuacao, fkUsuario) 
{
    var instrucaoSql = `
        insert into quiz (pontuacao, fkUsuario) values ('${pontuacao}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL cadUser: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function QtdTentativasUsuario(fkUsuario) {
    var instrucaoSql = `
        select count(idQuiz) as QtdTentativas from quiz where fkUsuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL tentUser: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function TotalUsuarios(idUsuario) 
{
    var instrucaoSql = `
        select count(id) as TotalUsuarios from usuario;
    `;
    console.log("Executando a instrução SQL totUser: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Top3Usuarios() {
    
    var instrucaoSql = `
        SELECT usuario.nome as Nome,
        quiz.pontuacao as Pontuação
        FROM usuario
        JOIN quiz ON usuario.id = quiz.FkUsuario
        ORDER BY quiz.pontuacao DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL top3: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function MediaPontuacao()
{
    var instrucaoSql = `SELECT ROUND(AVG(pontuacao), 2) AS MediaPontuacao
    FROM quiz;`

    console.log("Executando a instrução SQL da média: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    InserirPontuacao,
    QtdTentativasUsuario,
    TotalUsuarios,
    Top3Usuarios,
    MediaPontuacao
};