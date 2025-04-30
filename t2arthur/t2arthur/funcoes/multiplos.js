let prompt = require('prompt-sync')();

function verificarMultiplo(numero, divisor) {
    return numero % divisor === 0; 
}

function pedirNumerosEImprimir() {

    let numero = parseInt(prompt("Digite o num 1 para saber se sao multiplos: ")) 
    let divisor = parseInt(prompt("Digite o num 2: ")) 

     if (verificarMultiplo(numero, divisor)) {
        console.log(`O número ${numero} é múltiplo de ${divisor}.`)
    } 

    else {
        console.log(`O número ${numero} não é múltiplo de ${divisor}.`)
        
        if((divisor%numero)===0){
            console.log(`MAS---- O número ${divisor} é múltiplo de ${numero}.`)
        } 
    }
}

pedirNumerosEImprimir()