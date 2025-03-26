var prompt = require('prompt-sync')();

j = parseInt(prompt("quantida de peças a checar: "))

for (let i = 1; i <=j; i++) {
    cod= parseInt(prompt(`dig o cod da peça ${i}: `));
    quantidade= parseInt(prompt(`dig a quantidade de peças ${i}: `));
    valor = parseFloat(prompt(`dig o valor unitario da peça ${i}: `));
    console.log(`O valor da peça código ${cod} em estoque --- R$${(valor*quantidade).toFixed(2)}  `)
    console.log("----------------------------------------")
}
    