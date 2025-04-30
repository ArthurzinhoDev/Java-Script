var prompt = require('prompt-sync')();

/*function calculadora(num1, num2, operacao) {
    return operacao === "soma" ? num1 + num2 :
           operacao === "subtracao" ? num1 - num2 :
           operacao === "multiplicacao" ? num1 * num2 :
           operacao === "divisao" ? num1 / num2 :
           "Operação inválida!";
}


let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha uma operação (soma, subtracao, multiplicacao, divisao):");

console.log("Soma:", calculadora(num1, num2, "soma"));
console.log("Subtração:", calculadora(num1, num2, "subtracao"));
console.log("Multiplicação:", calculadora(num1, num2, "multiplicacao"));
console.log("Divisão:", calculadora(num1, num2, "divisao"));*/

function calculadora(num1, num2, operacao) {
    const operacoes = {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        divisao: num1 / num2
    };

    return operacoes[operacao] != undefined ? operacoes[operacao] : "Operação inválida!";
}


let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha uma operação (soma, subtracao, multiplicacao, divisao):");


if (operacao === "+") {
    console.log("Soma:", calculadora(num1, num2, "soma"));
} else if (operacao === "-") {
    console.log("Subtração:", calculadora(num1, num2, "subtracao"));
} else if (operacao === "*") {
    console.log("Multiplicação:", calculadora(num1, num2, "multiplicacao"));
} else if (operacao === "/") {
    console.log("Divisão:", calculadora(num1, num2, "divisao"));
} else {
    console.log("Operação inválida!");
}