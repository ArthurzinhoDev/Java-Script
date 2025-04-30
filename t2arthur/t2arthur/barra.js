var prompt = require('prompt-sync')();

idade = prompt("qual sua idade?")
carteira = true
mens1= "voce pode dirigir" 
mens2= "voce nao pode dirigir" 



let pode = idade >=18 && carteira == true && mens1 || mens2 

console.log(pode)
