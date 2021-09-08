<!-- Adriana Zambrano Manzano -->
<!-- Sección Inicio -->
<?php
     session_start();
    /* Si algun usuario no ha iniciado sesion */
  
         /* Si mi usuario es admin: */
         if($_SESSION["usuario"]["rol"] ==1){
            header("location: index.php?c=logreg&a=index");
         }
     
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="Pizza, Mellisos, Pizzería"/>
    <title>Pizza Mellisos | Inicio</title>
    <link rel="stylesheet" href="assets/styles/styles.css" />
    <style media="screen">
    </style>
</head>

<body>
    <script type="text/javascript" src="assets/js/jssor.slider.min.js"></script>
    <script>
        jssor_1_slider_init = function () {
            //Reference https://www.jssor.com/development/slider-with-slideshow.html
            //Reference https://www.jssor.com/development/tool-slideshow-transition-viewer.html

            var jssor_1_SlideshowTransitions = [
                { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Outside: true, $Round: { $Left: 1.3, $Top: 2.5 } },
                { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.1, 0.9], $Top: [0.1, 0.9] }, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Outside: true, $Round: { $Left: 0.8, $Top: 2.5 } },
                { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 20, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad }, $Outside: true, $Round: { $Left: 0.8, $Top: 2.5 } },
                { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Outside: true, $Round: { $Left: 0.8, $Top: 2.5 } },
                { $Duration: 1800, x: 1, y: 0.2, $Delay: 30, $Cols: 10, $Rows: 5, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: { $Left: $Jease$.$InOutSine, $Top: $Jease$.$OutWave, $Clip: $Jease$.$InOutQuad }, $Outside: true, $Round: { $Top: 1.3 } },
                { $Duration: 1000, $Delay: 30, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2049, $Easing: $Jease$.$OutQuad },
                { $Duration: 1000, $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad },
                { $Duration: 1000, y: -1, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 12 } },
                { $Duration: 1000, x: -0.2, $Delay: 40, $Cols: 12, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: { $Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad }, $Opacity: 2, $Outside: true, $Round: { $Top: 0.5 } },
                { $Duration: 2000, y: -1, $Delay: 60, $Cols: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: $Jease$.$OutJump, $Round: { $Top: 1.5 } }
            ];

            var jssor_1_options = {
                $AutoPlay: 1,
                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: jssor_1_SlideshowTransitions,
                    $TransitionsOrder: 1
                },
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$
                }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 980);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
    </script>

    <header>
        <?php
             require_once "partials/header.php";
        ?>
    </header>

    <main>
        <div id="slider" style="background-color: white;">
            <div id="jssor_1"
                style="position:relative;margin:0 auto;top:0px;left:0px;width:960px;height:400px;overflow:hidden;visibility:hidden;">
                <!-- Loading Screen -->
               

                <div data-u="slides"
                    style="cursor:default;position:relative;top:0px;left:0px;width:960px;height:400px;overflow:hidden;">
                    <div>
                        <img data-u="image" src="assets/resources/imgbanner/banner1.png" alt="banner1" />
                    </div>
                    <div>
                        <img data-u="image" src="assets/resources/imgbanner/banner3.jpg" alt="banner3" />
                    </div>
                    <div>
                        <img data-u="image" src="assets/resources/imgbanner/banner4.jpg" alt="banner4" />
                    </div>
                    <div>
                        <img data-u="image" src="assets/resources/imgbanner/banner5.jpg" alt="banner5" />
                    </div>
                    <div>
                        <img data-u="image" src="assets/resources/imgbanner/banner2.png" alt="banner2" />
                    </div>
                </div>

                <!--#region Bullet Navigator Skin Begin -->
                <!-- Help: https://www.jssor.com/development/slider-with-bullet-navigator.html -->
                <style>
                    .jssorb051 .i {
                        position: absolute;
                        cursor: pointer;
                    }

                    .jssorb051 .i .b {
                        fill: #fff;
                        fill-opacity: 0.5;
                        stroke: #000;
                        stroke-width: 400;
                        stroke-miterlimit: 10;
                        stroke-opacity: 0.5;
                    }

                    .jssorb051 .i:hover .b {
                        fill-opacity: .7;
                    }

                    .jssorb051 .iav .b {
                        fill-opacity: 1;
                    }

                    .jssorb051 .i.idn {
                        opacity: .3;
                    }
                </style>
                <div data-u="navigator" class="jssorb051" style="position:absolute;bottom:12px;right:12px;"
                    data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
                    <div data-u="prototype" class="i" style="width:16px;height:16px;">
                        <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                            <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                        </svg>
                    </div>
                </div>
                <!--#endregion Bullet Navigator Skin End -->

                <!--#region Arrow Navigator Skin Begin -->
                <!-- Help: https://www.jssor.com/development/slider-with-arrow-navigator.html -->
                <style>
                    .jssora051 {
                        display: block;
                        position: absolute;
                        cursor: pointer;
                    }

                    .jssora051 .a {
                        fill: none;
                        stroke: #fff;
                        stroke-width: 360;
                        stroke-miterlimit: 10;
                    }

                    .jssora051:hover {
                        opacity: .8;
                    }

                    .jssora051.jssora051dn {
                        opacity: .5;
                    }

                    .jssora051.jssora051ds {
                        opacity: .3;
                        pointer-events: none;
                    }
                </style>
                <div data-u="arrowleft" class="jssora051" style="width:55px;height:55px;top:0px;left:25px;"
                    data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                    <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                        <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
                    </svg>
                </div>
                <div data-u="arrowright" class="jssora051" style="width:55px;height:55px;top:0px;right:25px;"
                    data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                    <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                        <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
                    </svg>
                </div>
                <!--#endregion Arrow Navigator Skin End -->
            </div>
        </div>

        <div class="moduloBienvenido">
            <h1 class="bienvenido" style="padding-top: 10px; -webkit-text-stroke: 3px black;">Bienvenido a Pizza
                Mellisos</h1>
            <br><br>
            <h2 class="celular">0980856681-0939185684</h2>
            <br><br>
            <p class="historia" style="font-family: Bookman Old Style; font-weight: bold;"> Somos la mejor propuesta
                ecuatoriana de pizza artesanal, hecha con ingredientes frescos, que llegan desde los campos a sus mesas,
                bajo estrictas normas de cosecha, empaque y distribución, pagando los precios justos. Contamos con
                varios locales donde puedes disfrutar de una deliciosa pizza con precios especiales. Adicionalmente,
                estamos siempre en la búsqueda de mejorar nuestro menú. <br>¡Más que Pizza, somos Calidad!</p>
        </div>

        <div class="reservas orange">
            <div class="reservas_menu">
                <img style="width:630px; height: 770px;" src="assets/resources/menu.jpg" alt="menu_inicio">
            </div>

            <div class="reservas_mensaje">
                <p class="historia" style="font-weight: bold; color:black; font-size: 25px;"> Contamos con un menú
                    variado, precios y ofertas especiales. <br>Puedes pedir tu pizza favorita a domicilio por medio de
                    nuestras redes sociales o hacer una reserva en alguno de nuestros locales.
                    <br><br><br><a class="botonesInicio" href="/html_pages/reservas.html">Hacer una reserva</a>
            </div>
        </div>

        <div class="moduloPie" style=" margin-top: -4px;">
            <h1 class="mensajePie" style="padding-top: 5px; padding-right: 400px;">¡La mejor pizza <br>del Ecuador!</h1>
        </div>
    </main>
    
    <footer>
        <?php
                require_once "partials/footer.php";
            ?>
    </footer>

    <script>
        jssor_1_slider_init();
    </script>

</body>

</html>