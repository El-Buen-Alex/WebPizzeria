
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Pedidos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

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
                <tbody class="tabladatos" id="bodyTablaPedidos">
                    
                    
                   
                </tbody>
            </table>
        </div>
        <script src="assets/js/mostrarPedidos.js"></script>
         <?php
             require_once 'views/partials/footer.php';
         ?>
</body>
</html>