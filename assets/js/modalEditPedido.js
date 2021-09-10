
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

function  buildSelectDirection(jsonEstablecimientos, divDirection){
  const select=document.createElement("select");
  select.setAttribute("class","form-select choseDirection");
  select.setAttribute("aria-label","Default select example");
  select.setAttribute("id","dirSelect")
  select.setAttribute("onChange","validarDireccion()");

  select.required=true;
  const option=document.createElement("option");
  option.setAttribute("class","choseDirection");
  option.innerHTML="Elija la sucursal";
  option.disabled=true;
  option.selected=true;
  select.appendChild(option);
  jsonEstablecimientos.forEach(establecimiento=>{
      buildOptionsDirection(select, establecimiento.direccion, establecimiento.idestablecimiento);
  })
  divDirection.appendChild(select);
  
}

function buildOptionsDirection(select, name_Establecimiento, id_establecimiento){
  const option=document.createElement("option");
  option.setAttribute("class","choseDirection optDir");
  option.setAttribute("name","opt");
  option.setAttribute("id", id_establecimiento);
  option.innerHTML=name_Establecimiento;
  select.appendChild(option);
}



function buildModal(idCabecera){
  listaPedidos.forEach(e=>{
    if(+e.idpedido_cabecera===+idCabecera){

        const removeDatos=document.getElementById("datos");
        if(removeDatos){
          removeDatos.remove();
        }
       
        
        buttonSave.setAttribute("id",idCabecera)
        buttonSave.disabled=true;


        const divConetnedor=document.getElementById("modalBody");
        divConetnedor.setAttribute("class", "container")

        const divDatos=document.createElement("div");
        divDatos.setAttribute("class","container");
        divDatos.setAttribute("id","datos");
       

        const divFecha=createDivRowContainer("Fecha: ");
        divFecha.appendChild(buildInputFechaentrega("date",e.fecha_entrega, "fecha_ent"));

        const divHora=createDivRowContainer("Hora;");
        divHora.appendChild(buildInputFechaentrega("time", e.hora_entrega, "hora_ent"))
      
        const optDirecction=document.createElement("div");
        optDirecction.setAttribute("class","col-md-5");
        const divContainerDirection=document.createElement("div");
        divContainerDirection.setAttribute("class","row");
        divContainerDirection.setAttribute("id","containerDirection");

        divContainerDirection.appendChild(optDirecction);
        optDirecction.appendChild(builddivDirectionOption("miDirection","Mi direccion:",+e.idpedido_cabecera, true,divContainerDirection))
        optDirecction.appendChild(builddivDirectionOption("sucursalDirection","En sucursal",+e.idpedido_cabecera, false, divContainerDirection));
        divDatos.appendChild(divContainerDirection)
        divDatos.appendChild(divFecha);
        divDatos.appendChild(divHora)
        divConetnedor.appendChild(divDatos);

    }
  })
}

function createDivRowContainer(containt){
    const div=document.createElement("div");
    div.setAttribute("class","row d-flex justify-content-center my-1");
    const p=document.createElement("p");
    p.setAttribute("class","col-md-3 d-flex justify-content-center");
    p.innerHTML=containt;
    div.appendChild(p);
    return div;

}

function buildInputFechaentrega(type, value, id){
    const input= document.createElement("input");
    input.setAttribute("type",type);
    let evento="";
    if(type==="date"){
      evento="validarFecha()";
    }else{
      evento="validarHora()";
    }
    input.setAttribute("onChange", evento)
    input.setAttribute("id",id);
    input.required=true;
    input.setAttribute("class","col-md-9 d-flex justify-content-start w-50")
    input.value = value;
    return input;
}

function  builddivDirectionOption(id, direccion, idCabcera, estado, divContainerDirection){
  const div=document.createElement("div");
  div.setAttribute("class","form-check")

  const input=document.createElement("input");
  input.setAttribute("class","form-check-input")
  input.setAttribute("type","radio");
  input.setAttribute("name","direccion")
  input.setAttribute("onChange", "inputDirectionHandler("+idCabcera+")")
  input.setAttribute("id",id);
  if(estado){
    divContainerDirection.appendChild(buildInputDirection(direccion))
    input.checked=estado;
  }
  
    
  
  const label=document.createElement("label");
  label.setAttribute("class","form-check-label");
  label.setAttribute("for",id);
  label.innerHTML=direccion;

  div.appendChild(input);
  div.appendChild(label);
  return div;

}
              
function inputDirectionHandler(idCabecera){
  const container=event.target.parentNode.parentNode.parentNode;
  const elementRemove=document.querySelectorAll(".dirInpt");
  elementRemove.forEach(e=>{
    e.remove();
  })

  if(event.target.id==="miDirection"){
     let direction;
      listaPedidos.forEach(e=>{
       if(+e.idpedido_cabecera== +idCabecera){
         direction= e.direccion_entrega;
       }
     })
     container.appendChild(buildInputDirection(direction))
  }else{
    const divSelect=document.createElement("div")
    divSelect.setAttribute("class","col-md-7 w-50 dirInpt");
    divSelect.setAttribute("id","dirInput2")
    buildSelectDirection(jsonResp, divSelect);
    container.appendChild(divSelect);
  }
}

function buildInputDirection(direction){
  const input=document.createElement("input")
  input.setAttribute("class","col-md-7 w-50 dirInpt")
  input.setAttribute("trype","text");
  input.setAttribute("onChange","validarDireccion()")
  input.required=true;
  input.setAttribute("id","dirInput1");
  input.value=direction;
  return input;
}