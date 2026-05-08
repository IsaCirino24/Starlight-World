function ultimo(req, res) {

    res.json({
        acertos: 8,
        categoria: "Músicas",
        membros: 3,
        historia: 2,
        musicas: 3
    });

}

module.exports = {
    ultimo
}