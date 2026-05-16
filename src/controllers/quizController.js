var quizModel = require("../models/quizModel");

function salvar(req, res) {

    var acertos = req.body.acertos;
    var membros = req.body.membros;
    var historia = req.body.historia;
    var musicas = req.body.musicas;
    var categoria = req.body.categoria;
    var fkUsuario = req.body.idUsuario;
    var fkQuiz = 1;

    quizModel.salvar(
        acertos,
        membros,
        historia,
        musicas,
        categoria,
        fkUsuario,
        fkQuiz
    )
    .then(function(resultado){

        res.json(resultado);

    })
    .catch(function(erro){

        console.log(erro);
        res.status(500).json(erro.sqlMessage);

    });

}

function ultimo(req, res) {

    var idUsuario = req.params.idUsuario;

    quizModel.ultimo(idUsuario)
    .then(function(resultado){

        res.json(resultado);

    })
    .catch(function(erro){

        console.log(erro);
        res.status(500).json(erro.sqlMessage);

    });

}

module.exports = {
    salvar,
    ultimo
}