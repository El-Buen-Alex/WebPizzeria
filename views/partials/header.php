<!-- Adriana Zambrano Manzano -->
<!-- Header -->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Encabezado</title>
    <link rel="stylesheet" href="assets/styles/styles.css" />
    <style media="screen">
    </style>
</head>

<body>
    <header>
        <nav class="menu orange">
            <div class="nav_logo">
                <img style="width:190px; height: 150px;" src="assets/resources/logo.png" alt="logo">
                <h1 class="celular">0980856681</h1>
            </div>

            <div class="nav_enlaces">
                <a class="enlace" href="index.php?c=pizzeria&a=index">Inicio |</a>
            <?php if(isset($_SESSION["usuario"])) { ?>
                <?php if($_SESSION["usuario"]["rol"] == 1){ ?>
                <a class="enlace" href="index.php?c=productos&a=index">Productos </a>
                <?php }else{?>
                    <a class="enlace" href="index.php?c=pedidos">Menú |</a>
                    <a class="enlace" href="index.php?c=pedidos&a=mostrarPedidos">Mis Pedidos|</a>
                <?php }?>
              
            <?php }else{ ?>
                <a class="enlace" href="index.php?c=pedidos">Menú |</a>
                
            <?php }?>
            </div>

            <div class="nav_botones">
                <?php if(isset($_SESSION["usuario"])) { ?>
                    <a class="botonesInicio" href="index.php?c=usuarios&a=cerrarSesion">Cerrar sesión</a>
                
                <?php }else{ ?>
                    
                    <a class="botonesInicio" href="index.php?c=logreg">Accede o Registrate</a>
                <?php }?>
            </div>
        
        </nav>
    </header>
</body>

</html>