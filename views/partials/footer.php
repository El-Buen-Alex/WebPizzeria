<!-- Adriana Zambrano Manzano -->
<!-- Footer -->

    <footer style="width: 100%;">
        <div class="footer_principal">
            <div class="logo">
                <div style="text-align:center;">
                    <img style="width:190px; height: 150px;" src="assets/resources/logo.png" alt="logo">
                </div>

                <?php if(!isset($_SESSION["usuario"])) { ?>
                <nav>
                    <div class="nav_enlaces_pie">
                        <div style="text-align:center;">
                            <a class="enlace" href="index.php?c=pedidos">Menú |</a>
                        </div>
                    </div>
                </nav>
            <?php } else {  ?>
                <?php if($_SESSION["usuario"]["rol"] == 1){ ?>
                <nav>
                    <div class="nav_enlaces_pie">
                        <div style="text-align:center;">
                            <a class="enlace" href="index.php?c=admin">Admin </a>
                        </div>
                    </div>
                </nav>
                <?php } else { ?>
                    <nav>
                    <div class="nav_enlaces_pie">
                        <div style="text-align:center;">
                            <a class="enlace" href="index.php?c=pedidos">Menú |</a>
                        </div>
                    </div>
                </nav>
                <?php }
                }?>       


                <div class="redes" style="margin-top: 30px; margin-bottom: 30px;">
                    <div style="text-align: center;">
                        <a href="https://www.facebook.com/103811911672196/posts/183902546996465/?sfnsn=mo"
                            target="_blank"><img style="width:40px; height: 40px;" src="assets/resources/rs_facebook.png"
                                alt="Facebook"></a>

                        <a href="https://instagram.com/pizzamellisos?utm_medium=copy_link" target="_blank"><img
                                style="width:40px; height: 40px;" src="assets/resources/rs_instagram.png"
                                alt="Instragram"></a>

                        <a href=" https://twitter.com/PMellisos?s=08" target="_blank"><img
                                style="width:40px; height: 40px;" src="assets/resources/rs_twitter.png" alt="Twitter"></a>

                        <a href="https://www.youtube.com/watch?v=vqeglXJlgJE&ab_channel=BienTasty" target="_blank"><img
                                style="width:40px; height: 40px;" src="assets/resources/rs_youtube.png" alt="Youtube"></a>
                    </div>
                </div>

                <hr>
                <div class="mellisos">
                    <p> © 2021 PIZZA MELLISOS </p>
                </div>
            </div>
        </div>
    </footer>
