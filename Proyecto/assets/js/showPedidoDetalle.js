let  jsonPedidoDetalles;
function realizarConsultaAjaxPostPedidoDetalle(url, json){
    const request = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    //var jsonId ={"id": id};

    request.onreadystatechange = function () {
      // readyState es 4
      if (request.readyState == 4) {
          jsonPedidoDetalles=JSON.parse(request.responseText)
          console.log(jsonPedidoDetalles)
          paintProductsPedidoDetalle(jsonPedidoDetalles,"bodyTable");
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
function buildTable(){
    const table=document.createElement("table");
    table.setAttribute("class","table");
    
    const thead=document.createElement("thead");
    const tr=document.createElement("tr");
    tr.setAttribute("class","row");
    const thCant=document.createElement("th");
    thCant.setAttribute("col-md-2");
    thCant.setAttribute("scope","col");
    thCant.innerHTML="Cantidad";

}
function paintProductsPedidoDetalle(jsonPedidoDetalles,idTableContainer){
    let total=+0;
    cleanModalShow()
    jsonPedidoDetalles.forEach(product=>{
        buildBodyTableItem(product.cantidad, product.producto, product.precio_unitario, idTableContainer);
        total+=(+product.cantidad * +product.precio_unitario);
    })
    total=total.toFixed(2);
    createTableTotal(total,idTableContainer);
}
function cleanModalShow(){
    const removeDatos=document.querySelectorAll(".datosTabla");
    if(removeDatos){
        removeDatos.forEach(e=>{
            e.remove();
        })
    }
}
function buildModalShowPedidoDetalle(idCabecera){
    const jsonid={}
    jsonid.id=idCabecera;
    const button=document.querySelector(".editPedidosDetalles");
    console.log(button)
    button.setAttribute("id", +idCabecera);
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

