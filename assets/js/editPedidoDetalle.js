function sendPedidoDetalleToEdit(){
    const ajx_url = "index.php?c=pedidos&a=editarPedidoDetalle";
    const ajx = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    console.log(jsonPedidoDetalles)
    const newPedido={}
    newPedido.myjson=jsonPedidoDetalles;
    newPedido.id=event.target.id;
    const myjson = JSON.stringify(newPedido);
    console.log(myjson)
    ajx.onreadystatechange = function () {
      // readyState es 4
      if (ajx.readyState == 4) {
          console.log(ajx.responseText)
          location.href ="index.php?c=pedidos"
        // Analizaos el responseText que contendrá el JSON enviado desde el servidor
        // La variable jsonObj ahora contiene un objeto con los datos recibidos
      }
    };
    ajx.open("POST", ajx_url, true);
    // Establecer la cabecera Content-Type apropiada
    ajx.setRequestHeader(
      "Content-Type",
      "application/json; charset=UTF-8"
    );
    // Enviar la solicitud
    ajx.send(myjson);
}