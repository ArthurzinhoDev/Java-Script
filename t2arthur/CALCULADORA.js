var prompt = require('prompt-sync')();

a = parseFloat(prompt("Dig o num A: "))
b = parseFloat(prompt("Dig o num B: "))
op = prompt("Digite a operação que deseja fazer: ")

switch (op){

    case "+":
        console.log(`${a} + ${b} = ${a+b}`)
        break
    case "-":
        console.log(`${a} - ${b} = ${a-b}`)
        break
    case "*": 
        console.log(`${a} x ${b} = ${a*b}`)
        break
    case "/": 
        console.log(` ${a} / ${b} = ${a/b}  `)
        break
    default:
        console.log("voce nao digitou nenhuma operação.")
}