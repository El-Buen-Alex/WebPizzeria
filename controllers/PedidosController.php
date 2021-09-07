<?php
session_start();
    require_once 'models/PedidosModel.php';
    require_once 'models/UsuariosModel.php';
    require_once 'models/EstablecimientoModel.php';
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
            $modelUser=new UsuariosModel();
            if(isset($_SESSION["usuario"])){
                $userId=$_SESSION["usuario"]["id"];
                $user=$modelUser->buscarUsuarioPorId($userId);
            }
            require_once 'views/pedidos/pedidoGenerado.php';
        }
        public function getListOfProducts(){
            if(isset($_COOKIE['listProducts'])){
                $data=$_COOKIE['listProducts'];
                echo $data;
            }
        }
        public function getEstablecimientos(){
            $modelEst= new EstablecimientoModel();
            $establecimientos=$modelEst->getEstablecimientos();
            echo json_encode( $establecimientos);
        }
    }

?>