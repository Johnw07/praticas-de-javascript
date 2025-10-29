const pessoa = {
    nome: 'Thiago',
    idade: 20,
    solteiro: true,
    hobbies: ['Estudar', 'Jogar', 'Treinar'],
}
function mostrarInfoPessoa(pessoaBase){
    const infopessoa = `
    informações do Thiago:
    -------------------
    nome: ${pessoaBase.nome} (tipo: ${typeof pessoaBase.nome})
    idade: ${pessoaBase.idade} (tipo: ${typeof pessoaBase.idade})
    solteiro: ${pessoaBase.solteiro} (tipo: ${typeof pessoaBase.solteiro})
    hobbies: ${pessoaBase.hobbies} (tipo: ${typeof pessoaBase.hobbies})`
    return infopessoa
}
const exibiInfo = mostrarInfoPessoa(pessoa);
console.log(exibiInfo);