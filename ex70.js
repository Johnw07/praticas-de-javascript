const fs = require('fs');
const dadosDoArquivo = fs.readFileSync('./animais.json', 'utf8');
const dadosParseados = JSON.parse(dadosDoArquivo);
const animais = dadosParseados.animais;
animais.push({
    id: 4,
    nome: 'Tigre',
    tipo: 'Mamifero',
    habitat: 'Selva'
});
console.log('Antigo habitat do pinguim', animais[1].habitat);
animais[1].habitat = 'Zoologico';
console.log('Novo habitat do pinguim', animais[1].habitat);
animais.splice(2, 1);
const jsonStringModificada = JSON.stringify(animais, null, 2);
console.log(animais);

