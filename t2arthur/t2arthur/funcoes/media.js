var prompt = require('prompt-sync')();

function media(n1, n2, n3) {
    n1=prompt("dig nota 1: ")
    n2=prompt("dig nota 2: ")
    n3=prompt("dig nota 3: ")
    
    return (n1+n2+n3)/3;
}
function verificaAprovacao(){
    (media() >=6) ? console.log("Aprovado") : console.log("Reprovado")
}

verificaAprovacao()