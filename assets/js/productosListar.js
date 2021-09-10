function getAllElementsAndPaint(){
    const ajax_url = "index.php?c=menu&a=getProducts";
const ajax_request = new XMLHttpRequest();
// Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
ajax_request.onreadystatechange = function () {
  // readyState es 4
  if (ajax_request.readyState == 4) {
    // Analizaos el responseText que contendrá el JSON enviado desde el servidor
    const jsonObj = JSON.parse(ajax_request.responseText);
    paintEveryProducts(jsonObj)
    // La variable jsonObj ahora contiene un objeto con los datos recibidos
  }
}
ajax_request.open("GET", ajax_url, true);

//Enviamos la solicitud
ajax_request.send();
}
getAllElementsAndPaint();
function paintEveryProducts(jsonProducts){
    const mainDiv=document.getElementById("listOfProducts");
    //mainDiv.appendChild(builButtonMoreProduct());
    jsonProducts.forEach(p=>{
        mainDiv.appendChild(buildCardProduct(p.id_producto, p.name, p.price, p.type, p.urlImage))
    })
}
function buildCardProduct(id_producto, name, price, type, urlImage){
    const divConatiner=document.createElement("div");
    divConatiner.setAttribute("class", "col-md-4 p-2 border border-danger cardProducts");

    const divImg=document.createElement("div")
    divImg.setAttribute("class","d-flex justify-content-center")
    const img = document.createElement("img");
    img.setAttribute("src", urlImage);
    img.setAttribute("alt", name);
    img.setAttribute("class", "p-2 ");
    img.setAttribute("style", "width: 150px");

    const p=document.createElement("p");
    p.setAttribute("class","d-flex justify-content-center")
    p.innerHTML=""+name+"-$"+price;

    const divButtons=document.createElement("div");
    divButtons.setAttribute("class", "row p-2 container d-flex justify-content-evenly" )

    const buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("class","btn btn-warning col-md-5");
    buttonEdit.setAttribute("id",id_producto)
    buttonEdit.innerHTML="EDITAR";

    const buttonElim = document.createElement("button");
    buttonElim.setAttribute("class","btn btn-danger col-md-5");
    buttonElim.setAttribute("onClick","eliminarProducto()");
    buttonElim.setAttribute("id",id_producto)
    buttonElim.innerHTML="ELIMINAR";

    divButtons.appendChild(buttonEdit)
    divButtons.appendChild(buttonElim);
    divImg.appendChild(img);
    divConatiner.appendChild(divImg);
    divConatiner.appendChild(p);
    divConatiner.appendChild(divButtons);

    return divConatiner;


}
function builButtonMoreProduct(){
    const divButtonAdd=document.createElement("div");
    divButtonAdd.setAttribute("class","col-md-4 d-flex justify-content-center align-items-center ")
    const button=document.createElement("button");
    button.setAttribute("class","btn btn-success w-75 h-75 ");
    const icon=document.createElement("i");
    icon.setAttribute("class","far fa-plus-square fa-5x");
    const p=document.createElement("p");
    p.setAttribute("class","mt-3")
    p.innerHTML="AGREGAR PRODUCTO";
    button.appendChild(icon);
    button.appendChild(p);
    divButtonAdd.appendChild(button);
    return  divButtonAdd;
}