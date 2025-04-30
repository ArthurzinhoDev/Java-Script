var prompt = require('prompt-sync')();

n1 = (parseFloat(prompt("Digite nota1: ")));
n2 = (parseFloat(prompt("Digite nota2: ")));
n3 = (parseFloat(prompt("Digite nota3: "))); 
med  = (n1+n2+n3)/3

if ((med) >=7){
    console.log(`Aluno Aprovado! A media foi ${med.toFixed(1)}`)
} 
else if (med >=5 && med < 7){
    console.log(`Aluno em recuperação. Media foi ${med.toFixed(1)} \n-------------------`)

    rec = (parseFloat(prompt("Digite nota de recuperação: ")))
    novaMed = (rec + med)/2;
    console.log(`Nova Media: ${novaMed.toFixed(1)}`)

    if (novaMed >= 5){
        console.log("Aluno Aprovado na recuperação!")
        }
    else{
        console.log(`Aluno Reprovado na RECUPERAÇÃO! \nSua media foi foi ${med.toFixed(1)}`)
    }
}   
 else {
    console.log(`Aluno Reprovado! Sua media foi foi ${med.toFixed(1)}`)
}
