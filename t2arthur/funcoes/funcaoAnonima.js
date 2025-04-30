var  prompt = require('prompt-sync')();

//aéro function funcao(() => { oque voce quer fazer aqui })



function somar(a,b){
    return a+b
}



function codigoPrinc(){
    let n1= Number(prompt("Digite num 1: "))
    let n2= Number(prompt("Digite num 2: "))
    
    console.log(somar(n1,n2))
}

codigoPrinc()