function numeroMaior (num1, num2, num3){
    if(num1 > num2 && num3 < num1){
        return `${num1} é maior que ${num2} e ${num3}`
    }
    else if(num2 > num1 && num3 < num2){
        return `${num2} é maior que ${num1} e ${num3}`
    }
    else{
        return `${num3} é maior que ${num1} e ${num2}`
    }
}

console.log(numeroMaior(10, 12, 9));
console.log(numeroMaior(20, 12, 9));
console.log(numeroMaior(5, 6, 18));