const buscarFilme = require("./buscarFilme");

function alterarStatus(lista, codigo){
    let sit = buscarFilme(lista, codigo)
    sit.emCartaz ? sit.emCartaz = false : sit.emCartaz = true
    return sit
}
module.exports = alterarStatus;