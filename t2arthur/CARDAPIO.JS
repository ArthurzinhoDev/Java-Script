var prompt = require('prompt-sync')();

valor = parseInt(prompt("Dig o código do lanche.\n"))


switch (valor){

    case 1:
        console.log("--------------------------------------------------\nCódigo      Produto        Preço\n1           Hambúrguer     R$ 6")
        break
    case 2:
        console.log("--------------------------------------------------\nCódigo      Produto      Preço\n2           Pizza        R$ 6")
        break
    case 3: 
        console.log("--------------------------------------------------\nCódigo      Produto      Preço\n3           Suco         R$ 6")
        break
    case 4: 
        console.log("--------------------------------------------------\nCódigo      Produto          Preço\n4           Refrigerante    R$ 6")
        break
    default:
        console.log("voce nao digitou nenhum código.")
}