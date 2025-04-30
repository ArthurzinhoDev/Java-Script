var prompt = require('prompt-sync')();

voto = parseInt(prompt("qual seu voto? de  1 a 3\n"))

switch(voto){
    case 1: 
        console.log("Voce votou em Cleiton 1")
        break
    case 2:
        console.log("voce votou em Lula 2")
        break
    case 3:
        console.log("voce voltou em Elinaldo 3")
        break

    default:
        console.log("voce nao votou em ninguem")
}
