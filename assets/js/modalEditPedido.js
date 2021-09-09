
let jsonResp;
/* GESTION SELECT ESTABLECIMIENTOS */
var ajaxR = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    ajaxR.onreadystatechange = function () {
    // readyState es 4
    if (ajaxR.readyState == 4) {
        // Analizaos el responseText que contendrá el JSON enviado desde el servidor
        jsonResp = JSON.parse(ajaxR.responseText);
        
        // La variable jsonObj ahora contiene un objeto con los datos recibidos
    }
    };

    // Definimos como queremos realizar la comunicación
    ajaxR.open("GET", "index.php?c=pedidos&a=getEstablecimientos", true);

    //Enviamos la solicitud
    ajaxR.send();

function  buildSelectDirection(jsonEstablecimientos, divDirection, direccion_entrega){
  const select=document.createElement("select");
  select.setAttribute("class","form-select choseDirection");
  select.setAttribute("aria-label","Default select example");
  select.required=true;
  const option=document.createElement("option");
  option.setAttribute("class","choseDirection");
  option.innerHTML="Elija la sucursal";
  option.disabled=true;
  select.appendChild(option);
  jsonEstablecimientos.forEach(establecimiento=>{
      buildOptionsDirection(select, establecimiento.direccion, establecimiento.idestablecimiento, direccion_entrega);
  })
  divDirection.appendChild(select);
}

function buildOptionsDirection(select, name_Establecimiento, id_establecimiento, direccion_entrega){
  const option=document.createElement("option");
  option.setAttribute("class","choseDirection optDir");
  option.setAttribute("id", id_establecimiento);
  console.log(name_Establecimiento)
  console.log(direccion_entrega)
  if(name_Establecimiento===direccion_entrega){
      option.selected=true;
      console.log(direccion_entrega)
  }
  option.innerHTML=name_Establecimiento;
  select.appendChild(option);
}



function buildModal(idCabecera){
  listaPedidos.forEach(e=>{
    if(+e.idpedido_cabecera===+idCabecera){

        const divConetnedor=document.getElementById("prueba");
        divConetnedor.setAttribute("class", "container")

        const divDatos=document.createElement("div");
        divDatos.setAttribute("class","container");
        const divDireccion=createDivRowContainer("Eleija su direccion: ");

        const divSelect=document.createElement("div")
        divSelect.setAttribute("class","col-md-6");
        buildSelectDirection(jsonResp, divSelect, e.direccion_entrega);

        const divFecha=createDivRowContainer("Fecha: ");
        divFecha.appendChild(buildInputFechaentrega("date",e.fecha_entrega));

        const divHora=createDivRowContainer("Hora;");
        divHora.appendChild(buildInputFechaentrega("time", e.hora_entrega))

        divDireccion.appendChild(divSelect);
        divDatos.appendChild(divDireccion);
        divDatos.appendChild(divFecha);
        divDatos.appendChild(divHora)

        divConetnedor.appendChild(divDatos);


    }
  })
}

function createDivRowContainer(containt){
    const div=document.createElement("div");
    div.setAttribute("class","row");
    const p=document.createElement("p");
    p.setAttribute("class","col-md-6");
    p.innerHTML=containt;
    div.appendChild(p);
    return div;

}

function buildInputFechaentrega(type, value){
    const input= document.createElement("input");
    input.setAttribute("type",type);
    input.setAttribute("class","col-md-6")
    input.value = value;
    return input;
}
