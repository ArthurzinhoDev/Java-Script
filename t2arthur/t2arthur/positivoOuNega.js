let prompt = require('prompt-sync')();

a = parseFloat(prompt("Dig um numero qualquer: "))

if( a<0){
    console.log("O número é negativo.")
}

else {
    console.log("O número nao é negativo.")
}