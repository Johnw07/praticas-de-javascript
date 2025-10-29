const numeros = [10, 20, 30, 40, 50];
function somaNumero(numero){
    let somaDosNumeros = 0
    for (let i = 0; i < numero.length; i++){
        somaDosNumeros += numero[i]
    }
    return somaDosNumeros;
}
const resultadoFinal = somaNumero(numeros);
console.log('A soma dos números é: ', resultadoFinal);