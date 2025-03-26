var prompt = require('prompt-sync')();

idade = prompt("qual sua idade?")

if(idade >= 60){
    console.log("voce é velho")
}
else if(idade >=18){
    console.log("voce é de maior")
}
else if(idade < 18){
    console.log("voce é de menor")
}