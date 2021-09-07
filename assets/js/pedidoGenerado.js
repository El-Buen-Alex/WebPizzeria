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
        const selects=document.querySelectorAll(".choseDirection");
        if(e.target.id==="flexRadioDefault1"){
            eliminarSelectDirection(selects);
        }else if(e.target.id==="flexRadioDefault2"){
            if(selects.length===0){
                getEstablecimientos();
            }
        }
    })
})

function getEstablecimientos(){
    var ajaxR = new XMLHttpRequest();
    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    ajaxR.onreadystatechange = function () {
    // readyState es 4
    if (ajaxR.readyState == 4) {
        // Analizaos el responseText que contendrá el JSON enviado desde el servidor
        var jsonResp = JSON.parse(ajaxR.responseText);
        buildSelectDirection(jsonResp);
        // La variable jsonObj ahora contiene un objeto con los datos recibidos
    }
    };

    // Definimos como queremos realizar la comunicación
    ajaxR.open("GET", "index.php?c=pedidos&a=getEstablecimientos", true);

    //Enviamos la solicitud
    ajaxR.send();
    
}

function  buildSelectDirection(jsonEstablecimientos){
    const divDirection=document.getElementById("direction");
    const select=document.createElement("select");
    select.setAttribute("class","form-select choseDirection");
    select.setAttribute("aria-label","Default select example");

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
function paintProducts(jsonProducts){
    let total=+0;
    jsonProducts.forEach(product=>{
        buildBodyTableItem(product.cant, product.name, product.price);
        total+=(+product.cant * +product.price);
    })
    createTableTotal(total);
}

function createTableTotal(SubTotal){
    const bodyTable=document.getElementById("bodyTable");
    const tr=document.createElement("tr");
    tr.setAttribute("class","row");

    const th=document.createElement("th");
    th.setAttribute("class","col-md-10");
    th.setAttribute("scope","row");
    th.innerHTML="Este Documento no tiene validez tributaria";

    const thDesgloce=document.createElement("th");
    thDesgloce.setAttribute("class","col-md-2");
    thDesgloce.setAttribute("scope","row");

    

    const trSubTotal=document.createElement("tr");
    trSubTotal.setAttribute("class","row");
    const tdSubtotal=document.createElement("td");
    tdSubtotal.innerHTML=SubTotal;
    trSubTotal.appendChild(tdSubtotal);


    const trIva=document.createElement("tr");
    trIva.setAttribute("class","row");
    const tdIva=document.createElement("td");
    const iva=(+SubTotal * +0.12)
    tdIva.innerHTML= iva;
    trIva.appendChild(tdIva);
    
    const trTotal=document.createElement("tr");
    trTotal.setAttribute("class","row");
    const tdtotal=document.createElement("td");
    tdtotal.innerHTML= (SubTotal + iva);
    trTotal.appendChild(tdtotal);

    thDesgloce.appendChild(trSubTotal);
    thDesgloce.appendChild(trIva);
    thDesgloce.appendChild(trTotal);
    tr.appendChild(th);
    tr.appendChild(thDesgloce);
    bodyTable.appendChild(tr);

    
    
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