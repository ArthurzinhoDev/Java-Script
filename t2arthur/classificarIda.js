let prompt= require('prompt-sync')();

a = parseInt(prompt("Sua idade:  "))

if(a<0){
    console.log("Voce digitou um numero invalido.")
}
else if(a>=0 || a<12){
    console.log("Criança.")
}else if(a>11 || a<17){
    console.log("Adolescente.")
}else if(a>=18 || a<60){
    console.log("Adulto.")
}else if(a>=60){
    console.log("Idoso.")
}