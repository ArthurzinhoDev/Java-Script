var prompt = require('prompt-sync')();

cod = parseInt(prompt("Digite o id do funcionario (25, 1, 6): "))
horas = parseInt(prompt("Quantidade de horas trabalhadas: "))

switch(cod){
    case 25:
        console.log(`Id: ${cod}\nSalário = R$ ${horas*5.5.toFixed(2)}`)
    break
    case 1:
        console.log(`Id: ${cod}\nSalário = R$ ${horas*20.5.toFixed(2)}`)
    break
    case 6:
        console.log(`Id: ${cod}\nSalário = R$ ${horas*15.55.toFixed(2)}`)
    break
    default:
        console.log("Digite um numero valido.")
}
