<?php
require_once 'config/conexion.php';
    class PedidosModel{

        public function __construct() {
            $this->con = Conexion::getConexion();
        }
    }

?>