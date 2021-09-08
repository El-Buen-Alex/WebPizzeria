<!-- Adriana Zambrano Manzano -->
<!-- Header -->

    <header>
        <nav class="menu orange">
            <div class="nav_logo">
                <img style="width:190px; height: 150px;" src="assets/resources/logo.png" alt="logo">
                <h1 class="celular">0980856681</h1>
            </div>


            <?php if(!isset($_SESSION["usuario"])) { ?>
                <div class="nav_enlaces">
                <a class="enlace" href="index.php?c=pizzeria&a=index">Inicio |</a>
                <a class="enlace" href="index.php?c=pedidos">Menú |</a>
                <a class="enlace" href="/html_pages/reservas.html">Reservas</a>
                </div>

                <div class="nav_botones">
                <a class="botonesInicio" href="index.php?c=logreg">Accede o Registrate</a>
                </div>
            <?php } else {  ?>
                <?php if($_SESSION["usuario"]["rol"] == 1){ ?>
                <div class="nav_enlaces">
                <a class="enlace" href="index.php">Inicio |</a>
                <a class="enlace" href="index.php?c=admin">Clientes |</a>
                <a class="enlace" href="index.php?c=vistapedidos&a=index">Pedidos |</a>
                <a class="enlace" href="index.php?c=vistareservas&a=index">Reservas </a>
                </div>
                <div class="nav_botones">
                <a class="botonesInicio" href="index.php?c=usuarios&a=cerrarSesion">Cerrar sesión</a>
                </div>
                <?php } else { ?>
                <div class="nav_enlaces">
                <a class="enlace" href="index.php">Inicio |</a>
                <a class="enlace" href="index.php?c=pedidos">Menú |</a>
                <a class="enlace" href="/html_pages/reservas.html">Reservas</a>
                </div>
                <div class="nav_botones">
                <a class="botonesInicio" href="index.php?c=usuarios&a=cerrarSesion">Cerrar sesión</a>
                </div>
                <?php }
                }?>             
        </nav>
    </header>