/*
console.log("hello word");

let numero = prompt("digite seu numero")

function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}
verificarPar(numero)

*/

let num1 = prompt("digite o numero:");
let num2 = prompt("digite o numero:");

function calcular(num1, num2) {

    const soma = num1 + num2
    const subtracao = num1 - num2
    const multiplicacao = num1 * num2
    const divisao = num1 / num2

    
    console.log("Resultado da soma: " + soma )
    console.log("resultado divisão + "+ subtracao)
    console.log("resultado multiplicação" + multiplicacao)
    console.log("resultado da divisão"+ divisao)

} 
    if(num1 / 0)
    console.log("não é possivel dividir por 0")

calcular(num1, num2)