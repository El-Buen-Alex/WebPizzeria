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
    if(response==="1"){
        addProductOfList();
    }
}