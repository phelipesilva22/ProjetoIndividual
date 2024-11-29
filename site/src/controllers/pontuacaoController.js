var pontuacaoModel = require("../models/pontuacaoModel")

function cadastrarPontos(req, res)
{
    var idUsuario = req.body.idUsuario
    var acertos = req.body.acertos
    var erros = req.body.erros

    if (idUsuario == undefined)
    {
        res.status(400).send("ID DO USUÁRIO está undefined")
    } else if (acertos == undefined)
    {
        res.status(400).send("OS ACERTOS estão undefined")
    } else if (erros == undefined)
    {
        res.status(400).send("Os ERROS estão undefined!")
    } else {
        pontuacaoModel.cadastrarPontos(idUsuario, acertos, erros)
        .then(
            function (resultado) {
                res.status(200).json({mensagem:
                    "Pontos cadastrados com sucesso!",
                    resultado })
            }
        )

        .catch(
            function (erro) {
                console.log("\nHouve um erro ao cadastrar os pontos: ", erro.sqlMessage)
            }
        )
    }
}

function pontuacaoUsuario(res, req){
    var idUsuario = req.param.idUsuario

    pontuacaoModel.pontuacaoUsuario(idUsuario)
    
    .then(
        function (resultado) {
            res.status(200).json(resultado)
        }
    )
    .catch(
        function (erro) {
            res.status(500).json(erro.sqlMessage)
        }
    )
}

module.exports = {
    cadastrarPontos,
    pontuacaoUsuario
}