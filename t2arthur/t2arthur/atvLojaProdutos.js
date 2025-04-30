var prompt = require('prompt-sync')();

cod= parseInt(prompt("\n1. Celular \n2. Notebook \n3. Fone de ouvido\nDigite o código para saber  o preço: "))

switch(cod){
    case 1:
        console.log("celular - R$2000.")
        break
    case 2:
        console.log("Notebook - R$3500.")
        break
    case 3:
        console.log("Fone de ouvida - R$150.")
        break
    default:
        console.log("voce nao digitou nenhum cód")
}