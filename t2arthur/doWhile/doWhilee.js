var prompt = require('prompt-sync')();

let soma = 0;
let x;

do {
    x = parseInt(prompt("Digite o valor de X (0 p/sair): "));

    if (isNaN(x)) {
        console.log("Digite um número válido.");
        continue;
    }

    soma += x;

} while (x !== 0);

console.log("O valor total é:", soma);