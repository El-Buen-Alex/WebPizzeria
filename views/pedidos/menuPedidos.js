

const divPizzas=document.getElementById('pizzasMenu');
const divPollos=document.getElementById('polloMenu');
const divSandwich=document.getElementById('sandwichMenu');

var ajax_url="index.php?c=menu&a=getProducts";
var ajax_request = new XMLHttpRequest();
// Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
ajax_request.onreadystatechange = function() {

    // readyState es 4
    if (ajax_request.readyState == 4 ) {
        // Analizaos el responseText que contendrá el JSON enviado desde el servidor
       var jsonObj = JSON.parse( ajax_request.responseText );
       createProductsElements(jsonObj)
        // La variable jsonObj ahora contiene un objeto con los datos recibidos

    }
}

// Definimos como queremos realizar la comunicación
ajax_request.open( "GET", ajax_url, true );

//Enviamos la solicitud
ajax_request.send();

function createProductsElements(jsonObj){
     jsonObj.forEach( element =>{
         if(element.type==="pizza"){
            divPizzas.appendChild(createElement(element));
         }else if(element.type==="pollo"){
             divPollos.appendChild(createElement(element));
         }
     })
}

function createElement(element){

    const div=document.createElement("div");
    div.setAttribute("class", " col-md-4");

    const img=document.createElement("img");
    img.setAttribute("src",element.urlImage);
    img.setAttribute("alt",element.name);
    img.setAttribute("class","p-2");
    img.setAttribute("style","width: 150px");

    const divImage=document.createElement("div");
    divImage.setAttribute("class","d-flex justify-content-center")
    divImage.appendChild(img);

    const p=document.createElement("p");
    p.setAttribute("class","d-flex justify-content-center");
    p.innerHTML=element.name;

    const button=document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","btn btn-primary btn-lg btn-block center-block");
    button.innerHTML="PEDIR AHORA";

    const divButton=document.createElement("div");
    divButton.setAttribute("class","d-flex justify-content-center")
    divButton.appendChild(button);

    div.appendChild(divImage);
    div.appendChild(p);
    div.appendChild(divButton);
   return div;
}