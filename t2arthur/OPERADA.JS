var prompt = require('prompt-sync')();

a = parseInt(prompt("Quantos minutos de franquia na operadora: "))

if(a<=100){
    console.log(`${a}Minutos.\n.Vai pagar R$ 50.00`)
}
else if(a>100){
    console.log(`${a} Minutos.\nVai pagar R$ ${((a-100)*2)+50}`)
}else{
    console.log("Número negativo, refaça.")
}
