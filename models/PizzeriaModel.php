<?php
require_once 'config/conexion.php';
    class PizzeriaModel{

        public function __construct() {
            $this->con = Conexion::getConexion();
        }
    }

?>