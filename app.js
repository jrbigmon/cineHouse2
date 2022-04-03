const catalogo = require("./catalogo/catalogo.json");
const alterarStatus = require("./metodos/alterarStatus");
const listarFilmesCartaz = require("./metodos/listarFilmesCartaz");
const listarTodosOsFilmes = require("./metodos/listarTodosOsFilmes");

console.table(alterarStatus(catalogo, 1))
console.table(listarFilmesCartaz(catalogo, true))
console.table(listarTodosOsFilmes(catalogo))