
function paintProducts(jsonProducts, idTableContainer){
    let total=+0;
    jsonProducts.forEach(product=>{
        buildBodyTableItem(product.cantidad, product.producto, product.precio_unitario, idTableContainer);
        total+=(+product.cantidad * +product.precio_unitario);
    })
    createTableTotal(total,idTableContainer);
}

function createTableTotal(SubTotal, id){
    const bodyTable=document.getElementById(id);
    const tr=document.createElement("tr");
    tr.setAttribute("class","datosTabla row "+id);

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
    const iva=(+SubTotal * +0.12).toFixed(2)
    tdIva.innerHTML= iva;
    trIva.appendChild(tdIva);
    
    const trTotal=document.createElement("tr");
    trTotal.setAttribute("class","row");
    const tdtotal=document.createElement("td");
    const total=+SubTotal + +iva;

    tdtotal.innerHTML= total.toFixed(2);
    trTotal.appendChild(tdtotal);

    thDesgloce.appendChild(trSubTotal);
    thDesgloce.appendChild(trIva);
    thDesgloce.appendChild(trTotal);
    tr.appendChild(th);
    tr.appendChild(thDesgloce);
    bodyTable.appendChild(tr); 
}


function buildBodyTableItem(cant, name, price, id){
    const bodyTable=document.getElementById(id);
    const tr=document.createElement("tr");
    tr.setAttribute("class","row datosTabla");
    

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