function validaSenha(senha) {
    if (senha === "DaxCode10") {
        return "Acesso autorizado";
    } else {
        return "Acesso negado";
    }
}

// Exemplos de uso:
console.log(validaSenha("DaxCode10"));  // Acesso autorizado
console.log(validaSenha("senhaErrada")); // Acesso negado