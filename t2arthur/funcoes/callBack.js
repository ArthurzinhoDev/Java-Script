// um parametro passada como argumento para outra funcao

function executarCallback(callback) {
    console.log("antes");

   // if (typeof callback === 'function') {
        callback();
   // } else {
    //    console.log("O argumento passado não é uma função.");
    //}

    console.log("depois");
}
executarCallback(()=> {
    console.log("aaaaa")
})