
function realizarConsultaAjaxPostPedidoDetalle(url, json){
    const request = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    //var jsonId ={"id": id};

    request.onreadystatechange = function () {
      // readyState es 4
      if (request.readyState == 4) {
          const jsonPedidoDetalles=JSON.parse(request.responseText)
          console.log(jsonPedidoDetalles)
          paintProducts(jsonPedidoDetalles,"modalBody");
      }
    };
    request.open("POST", url, true);
    // Establecer la cabecera Content-Type apropiada
    request.setRequestHeader(
      "Content-Type",
      "application/json; charset=UTF-8");
    // Enviar la solicitud
    request.send(json);
}
function cleanModalShow(){
    const removeDatos=document.getElementById("datos");
    if(removeDatos){
        removeDatos.remove();
    }
}
function buildModalShowPedidoDetalle(idCabecera){
    const jsonid={}
    jsonid.id=idCabecera;
    cleanModalShow();
    realizarConsultaAjaxPostPedidoDetalle("index.php?c=pedidos&a=getPedidosDetalle", JSON.stringify(jsonid))
}

function tableShowPedidosDetalles(){
    buttonSave.setAttribute("id",idCabecera)
    buttonSave.disabled=true;
    buttonSave.innerHTML="Editar";
    const divConetnedor=document.getElementById("modalBody");
    divConetnedor.setAttribute("class", "container")
    const divDatos=document.createElement("div");
    divDatos.setAttribute("class","container");
    divDatos.setAttribute("id","datos");
    divDatos.innerHTML="hola";
    divConetnedor.appendChild(divDatos);
}