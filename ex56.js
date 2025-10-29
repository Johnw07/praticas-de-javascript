const livro = {  
    titulo : 'Senhor dos Aneis',
    autor : 'J.R.R.Tolkien',
    anopublicacao : 1954,
    idadepublicacao : 71,
    genero : 'Fantasia',
    avaliacao : 4.9
}
console.log(livro);
delete livro.avaliacao;
console.log(livro);