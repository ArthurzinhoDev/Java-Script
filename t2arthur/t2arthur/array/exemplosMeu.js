var prompt = require('prompt-sync')();

let frutas = ["banana", "goiaba", "maçã", 8];
let numeros = [1, 2, 3, 4, 5];
let misto = ["texto", 42, true, null];
let objetos = [{ nome: "Ana" }, { idade: 30 }, { ativo: false }];


let arrays = [frutas, numeros, misto, objetos];
let posi = parseInt(prompt("Qual posição quer checar?"));

if (posi >= 0 && posi < arrays.length) {
    console.log(arrays[posi]);
} else {
    console.log("Posição inválida, tente novamente!");
}