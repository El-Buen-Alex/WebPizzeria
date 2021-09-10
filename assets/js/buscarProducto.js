function buscarProducto(){
    const nameProducto=event.target.value;
    console.log(event)
    if(nameProducto!==""){
        const myjson={}
        myjson.nameP=nameProducto;
        const url = "index.php?c=productos&a=getProductsByNameOrType";
        const ajax = new XMLHttpRequest();
        // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
        ajax.onreadystatechange = function () {
        // readyState es 4
            if (ajax.readyState == 4) {
                // Analizaos el responseText que contendrá el JSON enviado desde el servidor
                const jsonObj = JSON.parse(ajax.responseText);
               
                    removeItems()
                    paintEveryProducts(jsonObj)
                
               
                // La variable jsonObj ahora contiene un objeto con los datos recibidos
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