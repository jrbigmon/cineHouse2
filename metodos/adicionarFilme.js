function adicionarFilme(lista, titulo, atores, anoDeLancamento, duracaoMin, emCartaz){
    lista.push({
        codigo: lista.length + 1,
        titulo,
        atores,
        anoDeLancamento,
        duracaoMin,
        emCartaz
    })
    return lista
}
module.exports = adicionarFilme;