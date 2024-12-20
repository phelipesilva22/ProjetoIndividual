var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/InserirPontuacao", function (req, res) {
    pontuacaoController.InserirPontuacao(req, res);
})

router.post("/QtdTentativasUsuario", function (req, res) {
    pontuacaoController.QtdTentativasUsuario(req, res);
})

router.post("/TotalUsuarios", function (req, res) {
    pontuacaoController.TotalUsuarios(req, res);
})

router.post("/Top3Usuarios", function (req, res) {
    pontuacaoController.Top3Usuarios(req, res);
})

router.post("/MediaPontuacao", function (req, res){
    pontuacaoController.MediaPontuacao(req, res)
})


module.exports = router;