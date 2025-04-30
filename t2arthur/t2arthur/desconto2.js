gasto = 5577
vip = false
desc=`Um desconto de 20% sobre sua compra R$${gasto*0.2} `
desc1=`Um desconto de 10% sobre sua compra R$${gasto*0.1} `
desc2= "Voce nao recebeu nenhum desconto."

console.log((gasto<100) && desc2 || (gasto>200 || vip) && desc|| (gasto>=100 && gasto<200) && desc1)