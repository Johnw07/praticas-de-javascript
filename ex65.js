const carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2016,
    cor: 'Cinza',
}
 
Object.defineProperty(carro, 'placa', {
    value: 'A22B32',
    enumerable: false,
    writable: true,       
    configurable: true
});

const chavesObjetos = Object.keys(carro);
console.log(chavesObjetos)

for (chaves in carro){
    const texto = `chave: ${chaves} / informação: ${carro[chaves]}`
    console.log(texto);
}

console.log(carro.placa);