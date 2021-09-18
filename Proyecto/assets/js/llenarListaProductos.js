var listOfProducts = [];
var ajaxRequest = new XMLHttpRequest();
// Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
ajaxRequest.onreadystatechange = function () {
  // readyState es 4
  if (ajaxRequest.readyState == 4) {
    // Analizaos el responseText que contendrá el JSON enviado desde el servidor
    if(ajaxRequest.responseText && (ajaxRequest.responseText!=="")){
      var jsonListPro = JSON.parse(ajaxRequest.responseText);
      listOfProducts=jsonListPro;
      repaintElements();
    }
    // La variable jsonObj ahora contiene un objeto con los datos recibidos
  }
};

// Definimos como queremos realizar la comunicación
ajaxRequest.open("GET", "index.php?c=pedidos&a=getListOfProducts", true);

//Enviamos la solicitud
ajaxRequest.send();
