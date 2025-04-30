var prompt = require('prompt-sync')();

let cadastros = [];

// funcao para mostrar os cadastros
function listarCadastros(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}. Nome: ${array[i].nome}, CPF: ${array[i].cpf}`);
    }
}
function remover(){

    if(cadastros.length === 0){
        console.log("--- Nao há registros para remover ---");
        return;
    }
    console.log("\nAba de remover campo:");
    listarCadastros(cadastros);

    let indice = parseInt(prompt("Qual deseja apagar? "));


    if(indice>= 0 && indice < cadastros.length){
    cadastros.splice(indice-1,1);
    console.log("--- REMOVIDO COM SUCESSO ---")

    }
    else{
        console.log("Digite um numero valido.")
    }

}
function edit(){
    if(cadastros.length === 0){
        console.log("--- Nao há registros para editar ---");
        return;
    }

    console.log("\nAba de editar campo:");
    listarCadastros(cadastros);
    let indice = parseInt(prompt("Qual deseja editar? "));

    if(indice>= 0 && indice < cadastros.length){
        let novoNome = prompt ("Digite o novo nome:");
        let novoCpf = prompt ("Digite o novo cpf: ")

        cadastros[indice-1] = {nome: novoNome, cpf: novoCpf }

        console.log("--- EDITADO COM SUCESSO ---")
    }
    else{
    console.log("Digite um numero valido.")
    }

}
while (true) {
    console.log("\nMenu:");
    console.log("1 - Cadastrar pessoa");
    console.log("2 - Listar cadastros");
    console.log("3 - Sair");
    console.log("4 - Remover")
    console.log("5 - Editar")
    let opcao = parseInt(prompt("Escolha uma opção: "));

    if (opcao === 1) {
        let nome = prompt("Digite o nome: ");
        let cpf = prompt("Digite o CPF: ");

        if(!nome || !cpf || cpf.trim() ==="" || nome.trim() === ""){
            console.log("--- Nao aceitamos nome vazio ---")
        }else{
        cadastros.push( { nome: nome, cpf: cpf });
        console.log("Cadastro realizado com sucesso!\n");
        }
    } 
    else if (opcao === 2) {
        console.log("\nLista de cadastros:");
        listarCadastros(cadastros); //chamando a função para listar cadastros
    } 
    else if (opcao === 3) {
        console.log("Saindo...");
        break;
    } 
    else if (opcao === 4) {
        remover(); //apagando
    } 
    else if (opcao === 5) {
        edit(); //editando
    }
     else {
        console.log("Opção inválida, tente novamente!");
    }
}