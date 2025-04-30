const prompt = require('prompt-sync')();
// Conversão de Celsius para Fahrenheit

do {
    const celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));

    if (isNaN(celsius)) {
        console.log("Por favor, insira um número válido.");
        continue;
    }
    const fahrenheit = (9 * celsius) / 5 + 32;
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(1)}°F`);


    var continuar = prompt("Deseja continuar? (s/n): ").toLowerCase();
} while (continuar === 's');
 