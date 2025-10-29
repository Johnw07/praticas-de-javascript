const livro = {
    
    titulo : 'Senhor dos Aneis',
    autor : 'J.R.R.Tolkien',
    anopublicacao : 1954,
    idadepublicacao : 71,
    genero : 'Fantasia'

}
livro.avaliacao = null;
function avaliacaoLivro (livroparaavaliar, nota){
if (livro.avaliacao === null){
    livroparaavaliar.avaliacao = nota;
    console.log(`A avaliação foi ${nota}!`)
}
else {
    console.log('O livro já possui uma Avaliação!');
}
}
avaliacaoLivro(livro, 4.9);
avaliacaoLivro(livro, 5.0);

