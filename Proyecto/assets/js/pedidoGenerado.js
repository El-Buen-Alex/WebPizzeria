const inputsRadio=document.getElementsByName("flexRadioDefault");
const divDireccion=document.getElementById("direction");
const inputDirection= document.getElementById("user_input_direction");
const divDirection=document.getElementById("directionSelect");
var jsonRespEstablecimientos ;
//solcitar lista de productos
var response;
var ajax_url_ = "index.php?c=pedidos&a=getListOfProducts";
var ajax_request_ = new XMLHttpRequest();
// Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
ajax_request_.onreadystatechange = function () {
  // readyState es 4
  if (ajax_request_.readyState == 4) {
    // Analizaos el responseText que contendrá el JSON enviado desde el servidor
    response = ajax_request_.responseText;
    var jsonProducts=JSON.parse(response);
    paintProducts(jsonProducts,"bodyTable");
    // La variable jsonObj ahora contiene un objeto con los datos recibidos
  }
};

// Definimos como queremos realizar la comunicación
ajax_request_.open("GET", ajax_url_, true);

//Enviamos la solicitud
ajax_request_.send();

//evento que controla la eleccion de direccion
inputsRadio.forEach(input=>{
   
    input.addEventListener("change", function (e){
        const selects=document.querySelectorAll(".choseDirection");
        if(e.target.id==="flexRadioDefault1"){
            eliminarSelectDirection(selects);
            divDireccion.innerHTML=dirUser;
            inputDirection.value=dirUser;
        }else if(e.target.id==="flexRadioDefault2"){
            if(selects.length===0){
                getEstablecimientos();
            }
        }
    })
    console.log(inputDirection)
})

function getEstablecimientos(){
    var ajaxR = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    ajaxR.onreadystatechange = function () {
    // readyState es 4
    if (ajaxR.readyState == 4) {
        // Analizaos el responseText que contendrá el JSON enviado desde el servidor
         jsonRespEstablecimientos = JSON.parse(ajaxR.responseText);
        buildSelectDirection(jsonRespEstablecimientos, divDirection);
        // La variable jsonObj ahora contiene un objeto con los datos recibidos
    }
    };

    // Definimos como queremos realizar la comunicación
    ajaxR.open("GET", "index.php?c=pedidos&a=getEstablecimientos", true);

    //Enviamos la solicitud
    ajaxR.send();
    
}
var dateControl = document.querySelector('input[type="date"]');
if(dateControl){
    const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
var mes = hoy.getMonth()+1; //obteniendo mes
var dia = hoy.getDate(); //obteniendo dia
var ano = hoy.getFullYear(); //obteniendo año
if(dia<10)
  dia='0'+dia; //agrega cero si el menor de 10
if(mes<10)
  mes='0'+mes //agrega cero si el menor de 10
const fechaFormat=ano+"-"+mes+"-"+dia;
dateControl.value = fechaFormat ;
dateControl.min=fechaFormat;
}


function  buildSelectDirection(jsonEstablecimientos, divDirection){
    const select=document.createElement("select");
    select.setAttribute("class","form-select choseDirection");
    select.setAttribute("aria-label","Default select example");
    select.setAttribute("onChange","changeDirection()");
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
    option.setAttribute("class","choseDirection");
    option.setAttribute("id", id_establecimiento);
    option.innerHTML=name_Establecimiento;
    select.appendChild(option);
}
function eliminarSelectDirection(selects){
    selects.forEach(elements=>{
        elements.remove();
    })
}

function changeDirection(){
    divDireccion.innerHTML=event.target.value;
    inputDirection.value=event.target.value;
}

function validarHoraMayor(){
    const horaPadreElement=document.getElementById("divError");
    removeErrorMensajes("errorhora");
    const fechaCnt=document.getElementById("meeting-time");
    fecha=fechaCnt.value;
    const hora= recuperarHora("timet", fecha)
    if(hora==="error"){
        horaPadreElement.appendChild(createMensajeError("Please, La hora minima de envio es media hora mayor a la actual","hora"))
        return false;
    }
    return true;
}

function createMensajeError(mensajeError, typo){
    const span=document.createElement("span")
    span.setAttribute("class", "error error"+typo);
    span.innerHTML=mensajeError;
    return span;
}

function recuperarHora(idComponente, fecha){
    const hora=document.getElementById(idComponente)

    const fechaInput=new Date(fecha);

    const arraryHour=(hora.value).split(":");

    const fechaIngresada=new Date(fechaInput.getFullYear(), fechaInput.getMonth(), fechaInput.getDate() +1, arraryHour[0], arraryHour[1])

    const tiempoTranscurrido = (Date.now() + (+1800*1000));
    
    const horaInput=Date.parse(fechaIngresada);
    if(horaInput > tiempoTranscurrido){
        return hora.value;
    }else{
        return "error";
    }  
}
function removeErrorMensajes(classes){
    const lista=document.querySelectorAll("."+classes);
    lista.forEach(e=>{
        e.remove();
    })
}