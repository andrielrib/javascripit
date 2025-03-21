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

/*
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
    if(num1,num2 / 0)
    console.log("não é possivel dividir por 0")

calcular(num1, num2)
*/


/*
let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}
*/

/*
function inverterTexto() {
    let texto = prompt("Digite uma palavra para inverter:");
   
    if (!texto || typeof texto !== "string") {
        console.error("Erro: Entrada inválida! Insira uma palavra válida.");
        return;
    }


    let letrasSeparadas = texto.split("");
    let textoInvertido = letrasSeparadas.reverse().join("");


    console.log("Palavra original:", texto);
    console.log("Letras separadas:", letrasSeparadas);
    console.log("Palavra invertida:", textoInvertido);
}
inverterTexto();
*/






/*
function contarCaracteres() {
    let texto = prompt("Digite uma string para contar os caracteres:");


    if (!texto) {
        console.error("Erro: Nenhuma entrada detectada!");
        return;
    }


    let quantidade = texto.length;


    console.log(`A string digitada tem ${quantidade} caracteres.`);
}


contarCaracteres();
*/




/*
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
*/


/*
function mensagemPersonalizada(nome, mensagem = "Olá") {
    if (!nome) {
        alert("Por favor, insira seu nome!");
        return;
    }


    let saudacao = `${mensagem}, ${nome}! Tenha um excelente dia!`;
    document.getElementById("mensagem").innerText = saudacao;
}


function obterNome() {
    let nomeUsuario = document.getElementById("nome").value;
    mensagemPersonalizada(nomeUsuario);
}
*/


/*
function calcularMedia() {
 
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);


   
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, insira três números válidos.");
        return;
    }


   
    let media = (num1 + num2 + num3) / 3;


    document.getElementById("resultado").innerText = `A média é: ${media.toFixed(2)}`;
}
*/


/*
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i + " - Múltiplo de 3");
    } else {
        console.log(i + " - Não múltiplo de 3");
    }
}
*/

