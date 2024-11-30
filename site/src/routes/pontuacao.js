var express = require("express")
var router = express.Router()

var pontuacaoController = require("../controllers/pontuacaoController")

router.post("/cadastrarPontuacao", function (req, res) {
    pontuacaoController.cadastrarPontuacao(req, res)
})

/* router.get("/pontuacaoUsuario/:idUsuario", function(req,res){
    pontuacaoController.pontuacaoUsuario(req,res)
}) */

module.exports = router