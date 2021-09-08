<?php

    class VistapedidosController{
        private $model;
        public function __construct() {
            
        }
        public function index(){
            require_once 'views/admin/pedidosVista.php';
        }
    }

?>