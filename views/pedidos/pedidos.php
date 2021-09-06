

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
    <header>
    <?php
        require_once 'views/partials/header.php';
    ?>
    </header>
    
    <div class="container">
        <div id="errorContainer"></div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 class="navbar-brand ps-2">Pide Ya!</h1>
        </nav>  
        <div class="row">
            <div class="col-md-3 ">
                    <div class="card my-2">
                        <h2  class="bg-warning p-2">Pedidos</h2>   
                        <form onsubmit="" method="" action="">>
                            <div id="pedidosList" class="container overflow-scroll" style="max-height:50vh;"></div>
                            <div class="d-grid gap-2  p-2">
                                <div class="d-flex justify-content-between"><span>Total:</span><span id="totalPriceOfProducts"></span></div>
                                <button type="button" class="btn btn-success" onclick="generarPedido()" >Comprar!</button>
                            </div>
                        </form> 
                    </div>
            </div>
            <div class="col-md-9">
                
                    <div class="card my-2">
                        <div><h2 class="bg-warning p-2">Pizzas</h2></div>
                        <div class="card-body "> 
                            <div class="row" id="pizzasMenu"></div>
                        </div>
                    </div>
                    <div class="card my-2">
                        <div><h2 class="bg-warning p-2">Pollo</h2></div>
                        <div class="card-body "> 
                            <div class="row" id="polloMenu"></div>
                        </div>
                    </div>
                    <div class="card my-2">
                        <div><h2 class="bg-warning p-2">Sandiwch</h2></div>
                        <div class="card-body "> 
                            <div class="row" id="sandwichMenu"></div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <footer>
    <?php
        require_once 'views/partials/footer.php';
    ?>
    </footer>
    
    <script src="assets/js/menuPedidos.js"></script>
    <script src="assets/js/generarPedido.js"></script>
    
</body>
</html>
