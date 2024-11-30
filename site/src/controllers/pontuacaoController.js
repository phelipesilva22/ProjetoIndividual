var pontuacaoModel = require("../models/pontuacaoModel")

function cadastrarPontuacao(req, res)
{
    var pontuacao = req.body.pontuacaoServer 
    var idUsuario = req.body.usuarioServer

    if (idUsuario == undefined)
    {
        res.status(400).send("ID DO USUÁRIO está undefined")
    } else if (pontuacao == undefined)
    {
        res.status(400).send("PONTUAÇÃO está undefined")
    } else {
        pontuacaoModel.cadastrarPontuacao(pontuacao, idUsuario)
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



module.exports = {
    cadastrarPontuacao
}