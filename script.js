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
    let texto = prompt("Digite uma string para contar os caracteres:"


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


/*
function verificarSinal() {
    let numero = parseFloat(prompt("digite o seu numero:"))

if (isNaN(numero)) {
alert("digite um numero normal arrombado")
}

else if (numero > 0 ) {
 alert("o numero é positivo")
 
}  else if (numero < 0 ) {
    alert("O numero é negativo")
 
} else {
    ("O numero é 0");
  }


}

verificarSinal()
*/

/*
function converterTemperatura() {
let celcius = prompt("digite sua temperatura em celcius") 

console.log((celcius *1.8)+32.)

}

converterTemperatura()
*/

/*
let numero = 100;
let soma = 0;
while ( numero >= 0) {

soma += numero;
numero--;
}

console.log("a soma de todo os numeros é", soma)
*/


/*
function substituirPalavra(palavraO, palavraN) {
    palavra1 =palavra2;
    alert("a palavra" + palavraO + "foi substituida por" + palavraN, ".");

}
let palavra1 = prompt("digite uma palavra");
let palavra2 = prompt("digite a palavra para substituir a outra");
substituirPalavra(palavra1, palavra2);
*/

/*
function contarCaracteres() {
    let texto = prompt("Digite uma string para contar os caracteres:")
    let quantidade = texto.length;
    console.log(`A string digitada tem ${quantidade} caracteres.`);
   
    if ( quantidade>10) {
        console.log(" a string tem mais de 10 caracrtes")
    }
}
contarCaracteres()
*/

let frutas = [];

for (let i = 0; i < 5; i++) {
    let fruta = prompt(`Digite o nome da fruta ${i + 1}:`);
    frutas.push(fruta);
}

alert("A terceira fruta digitada foi: " + frutas[2])




