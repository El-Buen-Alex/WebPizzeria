const buttonSaveModal=document.getElementById("saveModal");
let archivo;
let tipoProductoHandler;

function buscarProducto(){
    const nameProducto=event.target.value;
    if(nameProducto!==""){
        const myjson={}
        myjson.nameP=nameProducto;
        const url = "index.php?c=productos&a=getProductsByNameOrType";
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                const jsonObj = JSON.parse(ajax.responseText);
                
                    removeItems()
                    paintEveryProducts(jsonObj)
            }
        }
        ajax.open("POST", url, true);
        // Establecer la cabecera Content-Type apropiada
        ajax.setRequestHeader(
        "Content-Type",
        "application/json; charset=UTF-8"
        );
        // Enviar la solicitud
        ajax.send(JSON.stringify(myjson));
    }else{
        removeItems()
        getAllElementsAndPaint();
    }
}
function removeItems(){
    const elements=document.querySelectorAll(".cardProducts");
    elements.forEach(e=>{
        e.remove();
    })
}

function eliminarProducto(){
    const myjson={}
    myjson.id=event.target.id;
    solicitudAjaxPost("index.php?c=productos&a=eliminarProducto", myjson);
    
}
function solicitudAjaxPost(url, myjson){
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                
                console.log(JSON.parse(ajax.responseText))
                const jsonObj = JSON.parse(ajax.responseText);
                 removeItems()
                paintEveryProducts(jsonObj)
            }
        }
        ajax.open("POST", url, true);
        // Establecer la cabecera Content-Type apropiada
        ajax.setRequestHeader(
        "Content-Type",
        "application/json; charset=UTF-8"
        );
        ajax.send(JSON.stringify(myjson));
    
}
function buildBodyModal(idBodyModal){
    const modalBody=document.getElementById(idBodyModal);

    const divModalContainer=document.createElement("div");
    divModalContainer.setAttribute("class", "modalAddProduct")

    const divImageContainer=document.createElement("div");
    divImageContainer.setAttribute("id","previewImage")
    divImageContainer.setAttribute("class","d-flex justify-content-center")

    const divContentData=document.createElement("div");
    divContentData.setAttribute("class","row");

    const divNombre=document.createElement("div");
    divNombre.setAttribute("class","col-md-8");
    const pnombre=document.createElement("label");
    pnombre.setAttribute("class","form-label")
    pnombre.innerHTML="Nombre del Producto:";
    divNombre.appendChild(pnombre);
    divNombre.appendChild(buildInputName());

    const divCantidad=document.createElement("div");
    divCantidad.setAttribute("class","col-md-4");
    const pcant=document.createElement("label");
    pcant.setAttribute("class","form-label")
    pcant.innerHTML="Precio:";
    divCantidad.appendChild(pcant);
    divCantidad.appendChild(buildInputPrice());

    divContentData.appendChild(divNombre);
    divContentData.appendChild(divCantidad);

    const divOpt=document.createElement("div");
    divOpt.setAttribute("class","my-2")
    const ptp=document.createElement("label");
    ptp.setAttribute("class","form-label")
    ptp.innerHTML="Tipo:";

    divOpt.appendChild(ptp);
    divOpt.appendChild(buildSelectTypePr())
    divModalContainer.appendChild(divImageContainer);
    divModalContainer.appendChild(buildInputImage())
    divModalContainer.appendChild(divContentData);
    divModalContainer.appendChild(divOpt)
    modalBody.appendChild(divModalContainer);
}
function addProducto(){
    buttonSaveModal.disabled=true;
    removeElements("modalAddProduct");
    const modalTittle=document.getElementById("modalTittle");
    modalTittle.innerHTML="Agregar Producto";
    buildBodyModal("modalBody");
}
function buildInputPrice(){
    const input=document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("onKeyUp","validarCamposEdit()");
    input.setAttribute("class","form-control")
    input.setAttribute("id","priceProduct")
    return input;
}
function buildInputName(){
    const input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("onKeyUp","validarCamposEdit()");
    input.setAttribute("class","form-control")
    input.setAttribute("id","nameProduct")
    return input;
}
function buildInputImage(){
    const input=document.createElement("input");
    input.setAttribute("type","file");
    input.setAttribute("class","form-control form-control-sm")
    input.setAttribute("id","file");
    input.setAttribute("onChange","pintarImagen()");
    input.setAttribute("accept","image/*");
    return input;
}
function buildSelectTypePr(){
    const select=document.createElement("select");
    select.setAttribute("class","form-select");
    select.setAttribute("id","selectTipo");
    select.setAttribute("onChange","recuperarTipo()");
   
    const optionPi=document.createElement("option");
    optionPi.setAttribute("class","tipoProdcuto")
    optionPi.value="pizza";
    optionPi.innerHTML="Pizza";

    const optionPollo=document.createElement("option");
    optionPollo.setAttribute("class","tipoProdcuto")
    optionPollo.value="pollo";
    optionPollo.innerHTML="Pollo";

    const optionSdw=document.createElement("option");
    optionSdw.setAttribute("class","tipoProdcuto")
    optionSdw.value="sdw";
    optionSdw.innerHTML="Sandwich";

    select.appendChild(optionPi);
    select.appendChild(optionPollo);
    select.appendChild(optionSdw);
    return select;
}
function pintarImagen(){
    removeElements("imgUp");
    removeErrorMensajes("errorimg")
    const archivos=event.target.files;
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(archivos.length>0){
        if(allowedExtensions.test(event.target.value)){
            const myImage=archivos[0];
            archivo=archivos[0];
            const urlImage=URL.createObjectURL(myImage);
            const ImgContainer=document.getElementById("previewImage");
            console.log(ImgContainer)
            const img = document.createElement("img");
            img.setAttribute("src", urlImage);
            img.setAttribute("alt", "imagen Seleccionada");
            img.setAttribute("class", "p-2 imgUp");
            img.setAttribute("id", "imagenProducto");
            img.setAttribute("style", "height: 175px");
            ImgContainer.appendChild(img);
            buttonSaveModal.disabled=false;
            buttonEditModal.disabled=false;
            return true;
        }else{
            const padre=event.target.parentNode;
            padre.appendChild(createMensajeError("Extension seleccionada no permitida","img"))
            buttonSaveModal.disabled=true;
            buttonEditModal.disabled=true;
            return false;
        }
    }else{
        const padre=event.target.parentNode;
        padre.appendChild(createMensajeError("Ingrese un archivo por favor","img"))
        buttonSaveModal.disabled=true;
        buttonEditModal.disabled=true;
        return false;
    }
}
function removeElements(parametro){
    const lista=document.querySelectorAll("."+parametro);
    lista.forEach(e=>{
        e.remove();
    })
    
}
function removeErrorMensajes(classes){
    const lista=document.querySelectorAll("."+classes);
    lista.forEach(e=>{
        e.remove();
    })
}
function recuperarTipo(){
    tipoProductoHandler=event.target.value;
}
function validarNombre(){
    removeErrorMensajes("errorname")
    const valor=event.target.value.trim();
    if(valor!==""){
        buttonSaveModal.disabled=false;
        buttonEditModal.disabled=false;
        return true;
    }else{
        const padre=event.target.parentNode;
        padre.appendChild(createMensajeError("El nombre no debe estar vacio","name"))
        buttonSaveModal.disabled=true;
        buttonEditModal.disabled=true;
        return false;
    }
}
function validarPrecio(){
    removeErrorMensajes("errorprecio")
    const valor=event.target.value;
    if(valor>0){
        buttonSaveModal.disabled=false;
        buttonEditModal.disabled=false;
        return true;
    }else{
        const padre=event.target.parentNode;
        padre.appendChild(createMensajeError("Precio debe ser mayor a 0 y no estar vacio","precio"))
        buttonSaveModal.disabled=true;
        buttonEditModal.disabled=true;
        return false;
    }
}

function GuardarProducto(){
    const precio=document.getElementById("priceProduct");
    const name=document.getElementById("nameProduct");
    const img=document.getElementById("file");
    const imgFiles=img.files;
    const imgUp=imgFiles[0];
    
     const myjson={}
     myjson.name=name.value;
     myjson.price=precio.value;
     myjson.file=imgUp;
     
     const formdat= new FormData();
     formdat.append("file",imgUp);
     formdat.append("name",name.value);
     formdat.append("price",precio.value);
     formdat.append("type",tipoProductoHandler);
     formdat.append('ajax', 2);

     const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "index.php?c=productos&a=addProducto", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const jsonObj = JSON.parse(this.responseText);
            removeItems()
            paintEveryProducts(jsonObj)
        }
    };
    xhttp.send(formdat);

}
function createMensajeError(mensajeError, typo){
    const span=document.createElement("span")
    span.setAttribute("class", "error error"+typo);
    span.setAttribute("style", "font-size:10px; color:red");
    span.innerHTML=mensajeError;
    return span;
}
/////otherscript
const buttonEditModal=document.getElementById("botonEditModal");
function editProducto(){
    removeElements("modalAddProduct");
    const idProducto=event.target.id;
    buildBodyModal("modalBodyEdit");
    console.log(idProducto);
    buttonEditModal.disabled=true;
    const myjson={}
        myjson.idProducto=idProducto;
        const url = "index.php?c=productos&a=getProductById";
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                const jsonPr = JSON.parse(ajax.responseText);
                const productoJson=jsonPr[0];
                console.log(productoJson.name)
                setValuesInModalEdit(productoJson.name, productoJson.price, productoJson.urlImage, productoJson.id_producto, productoJson.type);
            }
        }
        ajax.open("POST", url, true);
        ajax.setRequestHeader(
        "Content-Type",
        "application/json; charset=UTF-8"
        );
        ajax.send(JSON.stringify(myjson));
}
function setValuesInModalEdit(productoname, precio, url, id, tipo){
    console.log(productoname);
    const inputName=document.getElementById("nameProduct");
    buttonEditModal.value=id;
    inputName.value=productoname;
    const inputPrice=document.getElementById("priceProduct");
    inputPrice.value=+precio;
    const listaTipo=document.querySelectorAll(".tipoProdcuto");
    console.log(tipo)
    listaTipo.forEach(e=>{
        if(e.value===tipo){
            e.selected=true;
        }else{
            e.selected=false;
        }
    })
    const previewImage=document.getElementById("previewImage");
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("alt", "imagen Seleccionada");
    img.setAttribute("class", "p-2 imgUp");
    img.setAttribute("id", "imagenProducto");
    img.setAttribute("style", "height: 175px");
    previewImage.appendChild(img);
}

function validarCamposEdit(){
    const inputPrice=document.getElementById("priceProduct");
    const inputName=document.getElementById("nameProduct");
    const name=inputName.value;
    const valor=inputPrice.value;
    const boolName=validarNameInput(name, inputName.parentNode);
    const boolPrice=validarPriceInput(valor, inputPrice.parentNode);
    if( boolName && boolPrice ){
        buttonSaveModal.disabled=false;
        buttonEditModal.disabled=false;
    }else{
        buttonSaveModal.disabled=true;
        buttonEditModal.disabled=true;
    }
}
function validarImgSubida(){
    removeErrorMensajes("errorimg")
    const img=document.getElementById("file");
    const archivos=img.files;
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    const padre =img.parentNode;
    if(archivos.length>0){
        if(allowedExtensions.test(img.value)){
            return true;
        }else{
            padre.appendChild(createMensajeError("Extension seleccionada no permitida","img"))
            return false;
        }
    }else{
        padre.appendChild(createMensajeError("Ingrese un archivo por favor","img"))
        return false;
    }
}
function validarNameInput(name, padre){
    removeErrorMensajes("errorname")
    if(name!==""){
        return true;
    }else{
        padre.appendChild(createMensajeError("El nombre no debe estar vacio","name"))
        return false;
    }
}
function validarPriceInput(valor, padre){
    removeErrorMensajes("errorprecio")
    if(valor>0){
        return true;
    }else{
        padre.appendChild(createMensajeError("Precio debe ser mayor a 0 y no estar vacio","precio"))
        return false;
    }
}

function recuperarTipoProducto(){
    const lista = document.getElementById("selectTipo");
    const opt=lista.options[lista.selectedIndex].text;
    return opt;
    
}
function saveChanges(){
    const precio=document.getElementById("priceProduct");
    const name=document.getElementById("nameProduct");
    const img=document.getElementById("file");
    const imgFiles=img.files;

    const myjson={}
    myjson.name=name.value;
    myjson.price=precio.value;
    const formdat= new FormData();

    if(imgFiles.length>0){
        const imgUp=imgFiles[0];
        formdat.append("file",imgUp);
        
    }
    formdat.append("id_producto", buttonEditModal.value)
     formdat.append("name",name.value);
     formdat.append("price",precio.value);
     formdat.append("type",recuperarTipoProducto());
     formdat.append('ajax', 2);
     console.log(recuperarTipoProducto());

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "index.php?c=productos&a=editProducto", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const jsonObj = JSON.parse(this.responseText);
            removeItems()
            paintEveryProducts(jsonObj)
        }
    };
    xhttp.send(formdat);
}