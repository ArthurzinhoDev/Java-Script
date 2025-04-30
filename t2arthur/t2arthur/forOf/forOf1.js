var prompt = require('prompt-sync')();

// for of serve para iterar sobre os valores de elementos interáveis.
// .toLowerCase, transforma toda letra maiuscula em minuscula
// frutas.push(fruta); adciona fruta ao final
// mesma coisa: frutas[contador] = fruta; contador++;

let frutas = []; 

while (true) {
    let fruta = prompt("Digite o nome de uma fruta (ou 'sair' para finalizar):");

    if (fruta.toLowerCase() === "sair") {
        break;
    }
    frutas.push(fruta); // Adiciona a fruta ao array
}

console.log("Aqui estão as frutas que você digitou:");
for (let fruta of frutas) {
    console.log(fruta); // Exibindo cada fruta
}