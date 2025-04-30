var prompt = require('prompt-sync')();

valor = parseFloat(prompt("Dig o valor em real e depois escolha a moeda.\n"))
moeda = prompt("USD (dólar)  EUR (euro)   GBP (libra)\n------Use as abreviações------\n")

switch (moeda){
    case "USD":
        console.log(`O valor convertido para DÓLAR é R$ ${(valor/5.74).toFixed(2)}`)
        break
    case "EUR":
        console.log(`O valor convertido para EURO é de R$ ${(valor/5.5).toFixed(2)}`)
        break
    case "GBP": 
        console.log(`O valor convertido é de R$${(valor/6.3).toFixed(2)}`)
        break
    default:
        console.log("voce nao digitou nenhum moeda para converter")
}