<!-- Grupo 3: Pincay, Rodriguez, Tacuri, Zambrano -->
<!-- Proyecto II PARCIAL -->

<?php
require_once 'config/config.php';
$cont= isset($_REQUEST['c'])?htmlentities($_REQUEST['c']):CONTROLADOR_PRINCIPAL;
$accion =isset($_REQUEST['a'])?htmlentities($_REQUEST['a']):ACCION_PRINCIPAL;

$cont= ucwords(strtolower($cont))."Controller";

$archivoCont = 'controllers/' . $cont . '.php';

if (!is_file($archivoCont)) {//verificar q exista
    
    $cont=CONTROLADOR_PRINCIPAL. "Controller";
    $archivoCont = 'controllers/' . CONTROLADOR_PRINCIPAL . 'Controller'.'.php';
    $accion = ACCION_PRINCIPAL;
}
require_once  $archivoCont;
$objetoCont = new $cont();
$objetoCont->$accion();
?>