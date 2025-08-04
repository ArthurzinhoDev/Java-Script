function calcularIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear();

  if (anoNascimento < 1900) {
    console.log("Ano inválido! O ano não pode ser menor que 1900.");
    return;
  }

  if (anoNascimento > anoAtual) {
    console.log("Ano inválido! O ano não pode ser maior que o ano atual.");
    return;
  }

  const idade = anoAtual - anoNascimento;
  console.log(`Você tem ${idade} anos.`);
}

const entrada = prompt("Digite seu ano de nascimento:");
const ano = parseInt(entrada);

calcularIdade(ano);