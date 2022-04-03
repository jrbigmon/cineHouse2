function listarFilmesLongaDuracao(lista){
    let novaLista = lista.filter(filme => {
        return filme.duracaoMin > 150;
    })
    return novaLista;
}
module.exports = listarFilmesLongaDuracao;