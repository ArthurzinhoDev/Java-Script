var prompt = require('prompt-sync')();

let cadastros = [
    { nome: "Ana", cpf: "123.456.789-00" },
    { nome: "Bruno", cpf: "987.654.321-00" },
    { nome: "Carla", cpf: "111.222.333-44" }
];

function listarCadastros(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}. Nome: ${array[i].nome}, CPF: ${array[i].cpf}`);
    }
}

listarCadastros(cadastros.splice(0,1));