var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/ultimo", function (req, res) {
    quizController.ultimo(req, res);
});

module.exports = router;