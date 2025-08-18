<input type="text" id="idade">
<button onclick="mostrarIdade()">Enviar</button>
<p id="resultado"></p>

function mostrarIdade() {
  let valor = document.getElementById("idade").value;
  document.getElementById("resultado").innerText = valor;
}