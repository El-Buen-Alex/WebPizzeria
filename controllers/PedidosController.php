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
        public function generarPedido(){
           
          $data = file_get_contents('php://input');
          setcookie("listProducts", $data);
          var_dump ($data);
        }
        public function mostrarListaProductos(){
            require_once 'views/pedidos/pedidoGenerado.php';
        }
        public function getListOfProducts(){
            if(isset($_COOKIE['listProducts'])){
                $data=$_COOKIE['listProducts'];
                echo $data;
            }
        }
    }

?>