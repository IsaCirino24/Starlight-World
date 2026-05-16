var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/ultimo/:idUsuario", function (req, res) {
    quizController.ultimo(req, res);
});

router.post("/salvar", function(req, res){
    quizController.salvar(req, res);
});

module.exports = router;