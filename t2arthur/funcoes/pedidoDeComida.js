function fazerPedido(pedido, callback) {

    console.log(`Pedido recebido: ${pedido}`);
    console.log('Preparando seu pedido...');

    setTimeout(() => {
        console.log(`Pedido pronto: ${pedido}`);
        callback();
    }, 3000); 
}

function avisarCliente() {
    
    setTimeout(() => 
        {console.log('Aviso: Seu pedido está chegou! Pode buscar.');
    },3000);
}

fazerPedido('Pizza de Calabresa', avisarCliente);
