// 1
function cumprimentar(text) {
  return "Olá, " + text + "!";
}

// 2
function idadeEmDias(anos) {
  return anos * 365;
}

// 3
function maiorIgual(a, b) {
  return a >= b;
}

// 4
function multiplicar(a, b) {
  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}

// 5
function repetir(elem, vezes) {
  let resultado = [];
  for (let i = 0; i < vezes; i++) {
    resultado.push(elem);
  }
  return resultado;
}

// 6
function firstLast(array) {
  return [array[0], array[array.length - 1]];
}

// 7
function removerPropriedade(obj, prop) {
  let copia = { ...obj };
  delete copia[prop];
  return copia;
}

// 8
function tudoPar(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && i % 2 === 0) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

// 9
function totalDespesas(produtos) {
  let total = 0;
  for (let produto of produtos) {
    total += produto.preco;
  }
  return total;
}

// 10
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// 11
function vemMedia(alunos) {
  let melhorAluno = { nome: "", media: 0 };
  for (let aluno of alunos) {
    let soma = 0;
    for (let nota of aluno.notas) {
      soma += nota;
    }
    let media = soma / aluno.notas.length;
    if (media > melhorAluno.media) {
      melhorAluno = { nome: aluno.nome, media: media };
    }
  }
  return melhorAluno;
}