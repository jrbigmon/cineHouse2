const catalogo = require("./catalogo/catalogo.json");
const alterarStatus = require("./metodos/alterarStatus");
const listarFilmesCartaz = require("./metodos/listarFilmesCartaz");
const listarFilmesLongaDuracao = require("./metodos/listarFilmesLongaDuracao");
const listarTodosOsFilmes = require("./metodos/listarTodosOsFilmes");
const adicionarFilme = require("./metodos/adicionarFilme")
// console.table(alterarStatus(catalogo, 1))
// console.table(listarFilmesCartaz(catalogo, true))
// console.table(listarTodosOsFilmes(catalogo))
// console.table(listarFilmesLongaDuracao(catalogo))
console.table(adicionarFilme(catalogo, "Rambo", "Sivestre Estalando", 2004, 200, true))