var prompt = require ('prompt-sync')()

a = parseFloat(prompt("Dig A: "))
b = parseFloat(prompt("Dig B: "))
c = parseFloat(prompt("Dig C: "))

console.log(`a) Area triangulo retangulo ${((a*c)/2).toFixed(3)}m²`)
console.log(`b) Area do circulo ${(3.14159*c**2).toFixed(3)}m²`)
console.log(`c) Area do trapézio ${((a+b)*c/2).toFixed(3)}m²`)
console.log(`d) Area do quadrado ${(b**2).toFixed(3)}m²`)
console.log(`e) Area do retangulo ${(a*b).toFixed(3)}m²`)
