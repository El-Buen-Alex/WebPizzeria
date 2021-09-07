const inputsRadio=document.getElementsByName("flexRadioDefault");

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
    console.log(jsonProducts);
    paintProducts(jsonProducts);
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
        console.log(e.target.id);
        const divDirection=document.getElementById("direction");
        const selects=document.querySelectorAll(".choseDirection");
        if(e.target.id==="flexRadioDefault1"){
            eliminarSelectDirection(selects);
        }else if(e.target.id==="flexRadioDefault2"){
            if(selects.length===0){
                const select=document.createElement("select");
                select.setAttribute("class","form-select choseDirection");
                select.setAttribute("aria-label","Default select example");
                const option=document.createElement("option");
                option.setAttribute("class","choseDirection");
                option.innerHTML="Elija la sucursal";
                select.options.selectedIndex=0;
                select.appendChild(option);
                divDirection.appendChild(select);
            }
        }
    })
})
function eliminarSelectDirection(selects){
    selects.forEach(elements=>{
        elements.remove();
    })
}
function paintProducts(jsonProducts){

    jsonProducts.forEach(product=>{
        buildBodyTableItem(product.cant, product.name, product.price);
    })
}


function buildBodyTableItem(cant, name, price){
    const bodyTable=document.getElementById("bodyTable");
    const tr=document.createElement("tr");
    tr.setAttribute("class","row");
    const th=document.createElement("th");
    th.setAttribute("class","col-md-2");
    th.setAttribute("scope","row");
    th.innerHTML=cant;

    const tdName=document.createElement("td");
    tdName.setAttribute("class","col-md-6");
    tdName.innerHTML=name;

    const tdPrecioUnitario=document.createElement("td");
    tdPrecioUnitario.setAttribute("class","col-md-2");
    tdPrecioUnitario.innerHTML=price;

    const tdTotal=document.createElement("td");
    tdTotal.setAttribute("class","col-md-2");
    
    tdTotal.innerHTML=(+cant * +price);

    tr.appendChild(th);
    tr.appendChild(tdName);
    tr.appendChild(tdPrecioUnitario);
    tr.appendChild(tdTotal);
    bodyTable.appendChild(tr);
}