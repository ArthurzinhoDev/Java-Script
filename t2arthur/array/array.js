var prompt = require('prompt-sync')();

let array = ["banana","goiaba", "maça",8]
//array dentro do array
let arrays =[[array]]

let n = [ "banana","goiaba"]
posi = prompt("Qual posiccao quer checar?")
n.splice(0,1)
 console.log("array de n ",n)

 for(let i = 0; i< array.length; i++){
    console.log(array[i])
 }
console.log(arrays[posi])

/*codigos: 

push() add no final do arrar; 
pop() remove no final array
unshift() add no inicio; 
shift() remove no começo  
splice( posicao, quantidade, adcionar)
*/