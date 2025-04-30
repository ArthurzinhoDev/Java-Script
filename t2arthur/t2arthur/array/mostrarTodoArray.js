const array = [0,1,2,3,4,5,"arthuyr"]

for(let i =0; i<array.length;i++){
    const item = array [i]
    console.log(item)
}
// OU
console.log("\n", array.toString()) //mostra todo certinho
console.log("\n", array.join(" / ")) //separa os nomes com oq vc botar

// OU
function listarCadastros(array) {
    console.log("\nLista de cadastros:");
    for (let i = 0; i < array.length; i++) {
        console.log("\n",array[i]);
    }
}