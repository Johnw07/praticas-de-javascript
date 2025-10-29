function encontrarIndice(arrayNumeros, numeroParaachar){
    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] === numeroParaachar){
            return i;
        }
    }
    return -1
}
const numeros = [1, 2, 3, 4, 5];
let posicaodoCinco = encontrarIndice(numeros, 5);
console.log(`O número 5 está na posição: ${posicaodoCinco}`);
let posicaoDoSetentaESete = encontrarIndice(numeros, 77);
console.log(`O número 77 está na posição: ${posicaoDoSetentaESete}`);

