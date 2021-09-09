
function recuperarDireccionSelected(){
    validarDireccion();
}
function createMensajeError(mensajeError, typo){
    const span=document.createElement("span")
    span.setAttribute("class", "error error"+typo);
    span.innerHTML=mensajeError;
    return span;
}

function removeErrorMensajes(classes){
    const lista=document.querySelectorAll("."+classes);
    lista.forEach(e=>{
        e.remove();
    })
}

function validarDireccion(){
    removeErrorMensajes("errordireccion");
    const direccion=recuperarDireccion();
    if(direccion==="error" || direccion.trim()===""){
        const divDirection=document.getElementById("containerDirection");
        divDirection.appendChild(createMensajeError("Please, Ingrese una direccion correcta","direccion"))
        return false;
   }
   return true;
}

function validarFecha(){
    removeErrorMensajes("errorfecha");
    const fechaPadreElement=document.getElementById("fecha_ent").parentNode;
    const fecha=(recuperarFecha())
    if(fecha==="error"){
        fechaPadreElement.appendChild(createMensajeError("Please, Ingrese una fecha mayor o igual a la actual","fecha"))
        return false;
    }
    return true;
}
function validarHora(){
    removeErrorMensajes("errorhora");
    const fecha=(recuperarFecha())
    const hora= recuperarHora("hora_ent", fecha)
    const horaPadreElement=document.getElementById("hora_ent").parentNode;
    if(hora==="error"){
        horaPadreElement.appendChild(createMensajeError("Please, La hora minima de envio es media hora mayor a la actual","hora"))
        return false;
    }
    return true;
}

function sendToEdit(){
    removeErrorMensajes("error")
    if(validarDireccion() && validarFecha() && validarHora()){
        const direccion=recuperarDireccion();
        const fecha =recuperarFecha();
        const hora=recuperarHora("hora_ent",fecha);
        const id=document.getElementById("hora_ent");

        const buttonSave=document.querySelector(".editPedidos");
        const idCabcera=buttonSave.id;

         const jsonPedido={}
         jsonPedido.idCabcera=idCabcera;
         jsonPedido.direccion=direccion;
         jsonPedido.fecha=fecha;
         jsonPedido.hora=hora;
        realizarConsultaAjaxPost("index.php?c=pedidos&a=editarPedidoCabecera", JSON.stringify(jsonPedido)) 
    }else{
           
    }
    
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

function recuperarFecha(){
    const fecha=document.getElementById("fecha_ent");
    const dateInput=Date.parse(fecha.value)

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

    const fehcaActual=Date.parse(fechaFormat)

    if(+dateInput< +fehcaActual){
        return "error";
    }
    return fecha.value;
}
function recuperarDireccion(){
    let newDirection="error";
    const inputDirection=document.getElementById("dirInput1");
    const select=document.getElementById("dirInput2")
    if(inputDirection){
        newDirection=inputDirection.value;
    }else{
        const opts=document.querySelectorAll(".optDir");
        opts.forEach(opt=>{
            if(opt.selected===true){
                newDirection=opt.value;
            }
        })
    }
    return newDirection;
}