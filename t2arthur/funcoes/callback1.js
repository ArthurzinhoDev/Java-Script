

function saudacao(nome, callback) {

    console.log(`Olá, ${nome}!`);
    
    callback();
}

function mensagem() {
    console.log("Seja bem-vindo ao mundo dos callbacks!");
}

// Chamando a função saudacao e passando mensagem como callback]
saudacao("Alice", mensagem);