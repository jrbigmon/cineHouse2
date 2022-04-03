const catalogo = require("./catalogo/catalogo.json");
const alterarStatus = require("./metodos/alterarStatus");
const listarFilmesCartaz = require("./metodos/listarFilmesCartaz");
const listarFilmesLongaDuracao = require("./metodos/listarFilmesLongaDuracao");
const listarTodosOsFilmes = require("./metodos/listarTodosOsFilmes");

// console.table(alterarStatus(catalogo, 1))
// console.table(listarFilmesCartaz(catalogo, true))
// console.table(listarTodosOsFilmes(catalogo))
console.table(listarFilmesLongaDuracao(catalogo))