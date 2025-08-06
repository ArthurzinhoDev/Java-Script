// 1
function cumprimentar(text) {
  return "Olá, " + text + "!";
}
console.log(cumprimentar("Will")); // "Olá, Will!"

// 2
function idadeEmDias(anos) {
  return anos * 365;
}
console.log(idadeEmDias(25)); // 9125

// 3
function maiorIgual(a, b) {
  return a >= b;
}
console.log(maiorIgual(0, 0)); // true

// 4
function multiplicar(a, b) {
  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}
console.log(multiplicar(3, 5)); // 15

// 5
function repetir(elem, vezes) {
  let resultado = [];
  for (let i = 0; i < vezes; i++) {
    resultado.push(elem);
  }
  return resultado;
}
console.log(repetir("code", 3)); // ["code", "code", "code"]

// 6
function firstLast(array) {
  return [array[0], array[array.length - 1]];
}
console.log(firstLast([1, 2, 3])); // [1, 3]

// 7
function removerPropriedade(obj, prop) {
  let copia = { ...obj };
  delete copia[prop];
  return copia;
}
console.log(removerPropriedade({ a: 1, b: 2 }, "a")); // { b: 2 }
console.log(removerPropriedade({ id: 20, nome: "caneta", descricao: "Não preenchido" }, "descricao")); 
// { id: 20, nome: "caneta" }

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
console.log(tudoPar([10, 70, 22, 45])); // [10, 22]

// 9
function totalDespesas(produtos) {
  let total = 0;
  for (let produto of produtos) {
    total += produto.preco;
  }
  return total;
}
console.log(totalDespesas([
  { nome: "celular", categoria: "eletrônico", preco: 1000 },
  { nome: "fone", categoria: "acessório", preco: 200 }
])); // 1200

// 10
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(fatorial(5)); // 120

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
console.log(vemMedia([
  { nome: "Will", sobrenome: "Santos", idade: 28, notas: [10, 10, 10, 10] },
  { nome: "Digo", sobrenome: "Santos", idade: 26, notas: [0, 5, 9, 7] }
])); 
// { nome: "Will", media: 10 }