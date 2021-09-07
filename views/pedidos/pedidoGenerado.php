
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PEDIDO | PIZZERIA</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
    <header>
        <?php
            require_once 'views/partials/header.php';
        ?>
    </header>
    <main class="container shadow-none p-3 mb-5 bg-light rounded mt-2">
        <div class="row">
            <div class="col-md-3"><img class="w-100" src="assets/resources/logo.png" alt="logo"/></div>
            <div class="col-md-9"> 
                <div class="container">
                    <h1 class="d-flex justify-content-center" >Pizzeria Mellizos</h1>
                    <p class="d-flex justify-content-center">Documento del Negocio</p>
                    <p class="d-flex justify-content-center">Isla Trinitaria Via Perimetral calle navajas</p>
                </div> 
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 px-0 border border-light">
                <p class="d-flex justify-content-center  bg-warning bg-gradient">Nombre</p>
                <p class="d-flex justify-content-center" id="nombre"></p>
            </div>
            <div class="col-md-4 px-0">
                <p class="d-flex justify-content-center bg-warning bg-gradient border border-light">Cedula</p>
                <p class="d-flex justify-content-center" id="cedula"></p>
            </div>
            <div class="col-md-4 px-0">
                <p class="d-flex justify-content-center bg-warning bg-gradient border border-light">Correo</p>
                <p class="d-flex justify-content-center" id="correo"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 px-0 ">
                <p class="d-flex justify-content-center bg-warning bg-gradient ">Direccion</p>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                            <label class="form-check-label" for="flexRadioDefault1">Mi Direccion</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                            <label class="form-check-label" for="flexRadioDefault2">En Sucursal</label>
                        </div>
                    </div>
                    <div class="col-md-8" id="direction"></div>
                </div>
            </div>
        </div>
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
    </main>
<script src="assets/js/pedidoGenerado.js"></script>
    <?php
        require_once 'views/partials/footer.php';
    ?>
</body>
</html>