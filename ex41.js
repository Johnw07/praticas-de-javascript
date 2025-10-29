function dobrar(numero){
   return numero * 2;
}
function somarDez(numero){
    return numero + 10;
}
const numeros = [1, 2, 3, 4, 5];
function executaOperacaoEmArray(array, funcaoCallback){
    console.log(`\n--- Executando operação: ${funcaoCallback.name} ---`);
    for(const elemento of array){
        const resultado = funcaoCallback(elemento);
        console.log(`Entrada: ${elemento}, Resultado: ${resultado}`);
    }
    
}
executaOperacaoEmArray(numeros, dobrar);
executaOperacaoEmArray(numeros, somarDez);
