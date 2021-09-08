
const bodyTablaPedidos=document.getElementById("bodyTablaPedidos");
let userSession;
//obtener el usuario en sesion
const request = new XMLHttpRequest();
request.onreadystatechange = function () {
  // readyState es 4
  if (request.readyState == 4) {
    userSession= JSON.parse(request.responseText);
    
  }
};
request.open("GET", "index.php?c=usuarios&a=getSessionUser", true);
// Enviar la solicitud
request.send();


function realizarConsultaAjaxPost(url, json){
    const request = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    //var jsonId ={"id": id};

    request.onreadystatechange = function () {
      // readyState es 4
      if (request.readyState == 4) {
        return  JSON.parse(request.responseText);
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
let listaPedidos;
function realizarConsultaAjaxGet(url){
    const request = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    //var jsonId ={"id": id};
    request.onreadystatechange = function () {
      // readyState es 4
      if (request.readyState == 4) {
        listaPedidos= JSON.parse(request.responseText);
        buildTablePedidos(listaPedidos);
      }
    };
    request.open("GET", url, true);
    // Enviar la solicitud
    request.send();
}
realizarConsultaAjaxGet("index.php?c=pedidos&a=getPedidosPorId");

function buildTablePedidos(listaPedidos){
    console.log(listaPedidos);
    let posicion=+0;
    listaPedidos.forEach(e=>{
        console.log(e)
        buildItemPedido(posicion, e.direccion_entrega, e.fecha_entrega, e.fecha_entrega, e.total)
        posicion++;
    })

}
function buildItemPedido(posicion, direccion, fecha_entr, hora_entr, precio_total){
    const tr=document.createElement("tr");
    const td=document.createElement("td");
    td.innerHTML=posicion;

    const tdDir= document.createElement("td");
    tdDir.innerHTML=direccion;

    const tdFecha= document.createElement("td");
    tdFecha.innerHTML=fecha_entr;

    const tdHora=document.createElement("td");
    tdHora.innerHTML=hora_entr;

    const tdTotal=document.createElement("td");
    tdTotal.innerHTML=precio_total;

    tr.appendChild(td);
    tr.appendChild(tdDir);
    tr.appendChild(tdFecha);
    tr.appendChild(tdHora);
    tr.appendChild(tdTotal);
    buildActions(tr);
    bodyTablaPedidos.appendChild(tr);
    
}
function buildActions(tr){
    const td=document.createElement("td");

    const ashow=document.createElement("a");
    ashow.setAttribute("class","btn btn-success mx-1")
    ashow.setAttribute("href","index.php?id="+userSession.id);
    const ishow=document.createElement("i");
    ishow.setAttribute("class","fas fa-eye");
    ashow.appendChild(ishow);

    const aEdit=document.createElement("a");
    aEdit.setAttribute("class","btn btn-primary mx-1")
    aEdit.setAttribute("href","index.php?id="+userSession.id);
    const iEdit=document.createElement("i");
    iEdit.setAttribute("class","fas fa-marker");
    aEdit.appendChild(iEdit);

    const aDelete=document.createElement("a");
    aDelete.setAttribute("class","btn btn-danger mx-1")
    aDelete.setAttribute("href","index.php?id="+userSession.id);
    const iDelete=document.createElement("i");
    iDelete.setAttribute("class","fas fa-trash-alt");
    aDelete.appendChild(iDelete);

    td.appendChild(ashow);
    td.appendChild(aEdit);
    td.appendChild(aDelete);

    tr.appendChild(td);

}
