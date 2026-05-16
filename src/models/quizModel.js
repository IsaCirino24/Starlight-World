var database = require("../database/config");

function ultimo(idUsuario){

    var instrucaoSql = ` SELECT * FROM resultado_quiz WHERE fkUsuario = ${idUsuario} ORDER BY idquiz_resultados DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}

function salvar(
    acertos,
    membros,
    historia,
    musicas,
    categoria,
    fkUsuario,
    fkQuiz

){

    var instrucaoSql = ` INSERT INTO resultado_quiz (acertos, membros, historia, musicas, categoria, fkUsuario, fkQuiz) VALUES
        (
            ${acertos},
            ${membros},
            ${historia},
            ${musicas},
            '${categoria}',
            ${fkUsuario},
            ${fkQuiz}
        );
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    ultimo,
    salvar
}