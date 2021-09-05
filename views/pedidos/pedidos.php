<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MENÚ | PEDIDOS</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
    <?php
        require_once 'views/partials/header.php';
    ?>
    <div class="container">
        <h1>Pide Ya!</h1>
        <div class="card my-2">
            <div><h2 class="bg-warning p-2">Pizzas</h2></div>
            <div class="card-body "> 
                <div class="row" id="pizzasMenu"></div>
            </div>
        </div>
        <div class="card">
            <div><h2 class="bg-warning p-2">Pollo</h2></div>
            <div class="card-body "> 
                <div class="row" id="polloMenu"></div>
            </div>
        </div>
    </div>
    <script src="views/pedidos/menuPedidos.js"></script>
    <?php
        require_once 'views/partials/Footer/Footer.php';
    ?>
</body>
</html>
