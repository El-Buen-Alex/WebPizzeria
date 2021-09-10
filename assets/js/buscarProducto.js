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