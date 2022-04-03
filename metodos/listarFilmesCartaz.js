function listarFilmesCartaz(lista, situacao = true || false){
    let filmesProcurados = lista.filter(function(filme){
        return filme.emCartaz == situacao
    })
    return filmesProcurados;
}
module.exports = listarFilmesCartaz;
