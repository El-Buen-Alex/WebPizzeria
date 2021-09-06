    var response;
    var ajax_url_="assets/loginAssets/validateSession.php";
    var ajax_request_ = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    ajax_request_.onreadystatechange = function() {

        // readyState es 4
        if (ajax_request_.readyState == 4 ) {
            // Analizaos el responseText que contendrá el JSON enviado desde el servidor
            response= ajax_request_.responseText;
            // La variable jsonObj ahora contiene un objeto con los datos recibidos
        }
    }

    // Definimos como queremos realizar la comunicación
    ajax_request_.open( "GET", ajax_url_, true );

    //Enviamos la solicitud
    ajax_request_.send();

function agregarPedido(){
    if(response==="cliente"){
        console.log(response);
        addProductOfList();

    }else{
        buildAlert("alert-danger", "debe iniciar sesion")
    }
}
function generarPedido(){
    let resp=false;
    if(response==="cliente"){
        if(listOfProducts.length>0){
            console.log(listOfProducts.length);
            sendDataToServer();
            resp=true;
        }else{
            buildAlert("alert-warning", "Debe seleccionar productos")
            console.log("no hay productos en el carrito");
        }
    }else{
        buildAlert("alert-danger", "debe iniciar sesion")
        console.log("debe iniciar sesion");
        
    }
    return resp;
}

function cleanAlertsError(){
    const listDivError=document.querySelectorAll(".error");
    listDivError.forEach(element=>{
        element.remove();
    })
}

function buildAlert(type, message){
    const errorContainer=document.getElementById("errorContainer");
    const listDivError=document.querySelectorAll(".error , ."+type);
    if(listDivError.length===0){
        const divError= document.createElement("div");
        divError.setAttribute("class","error alert "+type);
        divError.setAttribute("role","alert");
        divError.innerHTML=message;
        errorContainer.appendChild(divError);
    }
    
}
function sendDataToServer(){
    var ajx_url_="index.php?c=pedidos&a=generarPedido";
    var ajx_request_ = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    var myjson = JSON.stringify(listOfProducts);
    var ajx_request_ = new XMLHttpRequest();
    ajx_request_.onreadystatechange = function() {

        // readyState es 4
        if (ajax_request.readyState == 4 ) {
            // Analizaos el responseText que contendrá el JSON enviado desde el servidor
           console.log( ajx_request_.responseText );
           
            // La variable jsonObj ahora contiene un objeto con los datos recibidos
        }
    }
    ajx_request_.open( "POST", ajx_url_, true );
    // Establecer la cabecera Content-Type apropiada
    ajx_request_.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    // Enviar la solicitud
    console.log(myjson)
    ajx_request_.send( myjson );

}