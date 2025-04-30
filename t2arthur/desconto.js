clienteFrequente = true
gasto = 1000

desconto = gasto * 0.1
total = gasto - desconto

confere = (clienteFrequente || gasto > 1000) && total || gasto
console.log(`O total de desconto é de R$ ${confere}.`)