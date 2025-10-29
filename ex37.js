const numeros = [10, 20, 30, 40, 50];
function numMinMax(numeros){
    const menor = Math.min(10, 20, 30, 40, 50);
    const maior = Math.max(10, 20, 30, 40, 50);
    return `o Maior número é ${maior} e o menor é ${menor}`;
}
const resultado = numMinMax(numeros);
console.log(resultado);
