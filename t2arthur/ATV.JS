<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Questão 4 - Exercícios DOM</title>
</head>
<body>
  <h2>Questão 4a</h2>
  <input type="text" id="idade" placeholder="Digite sua idade">
  <button id="btnIdade">Enviar</button>
  <p id="resultado"></p>

  <h2>Questão 4b</h2>
  <div class="caixa">1</div>
  <div class="caixa">2</div>
  <div class="caixa">3</div>

  <h2>Questão 4c</h2>
  <ul id="listaQ4">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>

  <!-- link para o JS -->
  <script src="script.js"></script>
</body>
</html>

// ===== Questão 4a =====
document.getElementById("btnIdade").addEventListener("click", function() {
  let valor = document.getElementById("idade").value;
  document.getElementById("resultado").innerText = valor;
});

// ===== Questão 4b =====
let caixas = document.querySelectorAll(".caixa");
caixas.forEach(caixa => caixa.style.backgroundColor = "#f0f0f0");

// ===== Questão 4c =====
let itensQ4 = document.querySelectorAll("#listaQ4 li");
itensQ4.forEach(item => item.innerText = "Novo " + item.innerText);

