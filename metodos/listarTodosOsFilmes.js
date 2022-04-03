function listarTodosOsFilmes(lista){
    let filmes = lista.forEach(filme => {
        console.table(filme)
    });
    return filmes
}
module.exports = listarTodosOsFilmes;