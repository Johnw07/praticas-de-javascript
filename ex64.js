const carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2016,
    cor: 'Cinza',
    ligado: false,
    ligar:function(){
        if(this.ligado === true){
            console.log('O carro JÁ ESTAVA ligado.');
        }
        else {
            this.ligado = true;
            console.log('O carro foi ligado agora.');
        }
    },
    desligar: function(){
        if(this.ligado === false){
            console.log('O carro JÁ ESTAVA desligado.');
        }
        else {
            this.ligado = false;
            console.log('O carro foi desligado agora.');
        }
    },
    ObterDetalhes: function(){
        const estado = this.ligado ? 'Ligado' : 'Desligado';
        const DetalhesString = `
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Ano: ${this.ano}
        Cor: ${this.cor}
        Estado: ${estado}`
        return DetalhesString
    }
}
console.log('--- Testando Métodos ---');
carro.ligar();
carro.ligar();
carro.desligar();
carro.desligar();
console.log(' --- Resultado Final ---');
const detalhes = carro.ObterDetalhes();
console.log(detalhes);
