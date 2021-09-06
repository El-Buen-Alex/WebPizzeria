<?php
    require_once 'models/PedidosModel.php';

    class PedidosController{
        private $model;
        public function __construct() {
            $this->model= new PedidosModel();
        }

        public function index(){
            require_once 'views/pedidos/pedidos.php';
        }
    }

?>