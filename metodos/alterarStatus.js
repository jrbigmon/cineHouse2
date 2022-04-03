const buscarFilme = require("./buscarFilme");

function alterarStatus(lista, codigo){
    let sit = buscarFilme(lista, codigo)
    console.table(sit)
    console.log('-'.repeat(30))
    sit.emCartaz ? sit.emCartaz = false : sit.emCartaz = true
    console.table(sit)
}
module.exports = alterarStatus;