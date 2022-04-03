function buscarFilme(lista, codigo){
    let filmeProcurado = lista.find(function(filme){
        return filme.codigo == codigo
    })
    return filmeProcurado;
}
module.exports = buscarFilme;
