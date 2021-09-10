<?php
     /* Si algun usuario no ha iniciado sesion */
     if(!isset($_SESSION["usuario"]["rol"])){
        header("location: index.php?c=logreg&a=index");

         
     }else{
         /* Si mi usuario es admin: */
         if($_SESSION["usuario"]["rol"] ==1){
            header("location: index.php?c=logreg&a=index");
         }
     }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Pedidos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
</head>
<body>
        <?php
            require_once 'views/partials/header.php';
        ?>
        <?php
         if (isset($_COOKIE['mensajeGuardado']) and isset($_COOKIE["colorGuardado"])) {
            ?>
            <div class="mt-2 alert alert-<?php echo $_COOKIE["colorGuardado"]; ?> alert-dismissible fade show" role="alert">
                <?php echo $_COOKIE['mensajeGuardado']; ?>  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        <?php
            setcookie("mensajeGuardado","",time() - 60);
            setcookie("colorGuardado","",time() - 60);
            setcookie('listProducts',"", time()-60);
         }
        ?>
        <div class="table-responsive mt-2 container shadow p-3 mb-5  rounded">
            <div class="bg-warning shadow-sm p-2 mb-2 rounded"><h1>MIS PEDIDOS</h1></div>
            <table class="table table-striped table-bordered">
                <thead class="thead-dark">
                <th>#</th>
                <th>Direccion Entrega</th>
                <th>Fecha Entrega</th>
                <th>Hora de Entrega</th>
                <th>Precio Total</th>
                <th>Acciones </th>
                </thead>
                <tbody class="tabladatos" id="bodyTablaPedidos"></tbody>
            </table>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" >
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">EDITAR PEDIDO</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div class="modal-body" > 
                <span>Elija su direccion</span>
                <div id="modalBody"></div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success editPedidos" onClick="sendToEdit()" data-bs-dismiss="modal">Guardar</button>
            </div>

         
        </div>
        </div>
        </div>

           <!-- Modal -->
        <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" >
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel1">EDITAR PEDIDO</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div class="modal-body" > 
                <span>Elija su direccion</span>
                <table class="table">
            <thead>
                <tr class="row">
                    <th class="col-md-2" scope="col">Cantidad</th>
                    <th class="col-md-6" scope="col">Descripcion</th>
                    <th class="col-md-2" scope="col">Precio Unitario</th>
                    <th  class="col-md-2"scope="col">Total</th>
                </tr>
            </thead>
            <tbody id="bodyTable"></tbody>
         </table>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success editPedidosDetalles" onclick="sendPedidoDetalleToEdit()" data-bs-dismiss="modal">Editar</button>
            </div>
        </div>
        </div>
        </div>
        <script src="assets/js/mostrarPedidos.js"></script>
        <script src="assets/js/modalEditPedido.js"></script>
        <script src="assets/js/editPedidoCabecera.js"></script>
        <script src="assets/js/showPedidoDetalle.js"></script>
        <script src="assets/js/llenarTablaPedidosDetalles.js"></script>
        <script src="assets/js/editPedidoDetalle.js"></script>
        
         <?php
             require_once 'views/partials/footer.php';
         ?>
</body>
</html>


