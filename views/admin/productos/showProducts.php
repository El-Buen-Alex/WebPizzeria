<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

</head>
<body>
        <?php
             require_once "views/partials/header.php";
        ?>
        <header class="d-flex justify-content-center p-3 mb-2 bg-dark text-white mt-2"><h1>Todos Los Productos</h1></header>
    <div class="container my-2 w-75" id="contenedor">
        <div class="my-2 row bg-warning py-2">
            <div class="col-md-6 pt-1">
                <label>Buscar Producto:</label>
                <input type="text" class="rounded border-0" onkeyup="buscarProducto()" required/> 
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <button type="button" class="btn btn-success">Agregar Producto</button>
            </div>
        </div>
        <div class="row" id="listOfProducts">

        </div>
    </div>

    <script src="assets/js/productosListar.js"></script>
    <script src="assets/js/buscarProducto.js"></script>
         <footer>
            <?php
                    require_once "views/partials/footer.php";
                ?>
        </footer>
</body>
</html>