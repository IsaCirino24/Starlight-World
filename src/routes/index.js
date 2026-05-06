const express = require("express");
const router = express.Router();

const usuarioRouter = require("./usuarios");
router.use("/usuario", usuarioRouter);

module.exports = router;