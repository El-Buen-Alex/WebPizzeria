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

        public function guardarCompra(){
            if(isset($_COOKIE['listProducts'])){
                if(isset($_POST["buttonCompra"])){
                    $direccion=$_POST["user_direction"];
                    $id_usuario_compra=$_POST["user_id"];
                    $data=$_COOKIE['listProducts'];
                    $fecha=$_POST["date"];
                    $hora=$_POST["time"];
                    $data=json_decode($data);
                    $total=0;
                    foreach($data as $product){
                        $total+= $product->price * $product->cant;
                    }
                    $id_cabecera= $this->model->insertarCabeceraPedidos($total, $direccion, $id_usuario_compra, $fecha, $hora);
                    $guardado=true;
                    foreach($data as $product){
                       $guardado= $this->model->guardarDetallesCompra( $product->name, $product->cant, $product->price, $id_cabecera);
                    }
                    if($guardado){
                        $msj = 'Producto guardado exitosamente';
                        $color = 'primary';
                    }else{
                        $msj = "No se pudo realizar el guardado";
                        $color = "danger";
                    }
                    setcookie("mensajeGuardado", $msj);
                    setcookie("colorGuardado", $color);
                    header('Location:index.php?c=pedidos&a=mostrarPedidos');
                }
            }
        }

        public function getPedidosPorId(){
            if(isset($_SESSION["usuario"])){
                $userId=$_SESSION["usuario"]["id"];
                $resultados=$this->model->getPedidos($userId);
                echo json_encode($resultados);
            }
        }

        public function mostrarPedidos(){
            
            require_once 'views/pedidos/mostrarPedidos.php';
        }
        public function cancelarPedido(){
            $data =  file_get_contents('php://input');
            $data=json_decode($data);
            $id=$data->id;
            $respuesta = $this->model->cancelarPedidoCabecera($id);
            if($respuesta){
                $respuestaCancelarPedidoDetalle=$this->model->cancelarPedidoDetalle($id);
                echo $respuestaCancelarPedidoDetalle;
            }
        }
        public function editarPedidoCabecera(){
            $data =  file_get_contents('php://input');
            $data=json_decode($data);
            $respuesta=$this->model->editarPedidoCabecera($data->idCabcera, $data->direccion, $data->fecha, $data->hora);
            echo $respuesta;
        }
        public function getPedidosDetalle(){
            $data =  file_get_contents('php://input');
            $data=json_decode($data);
            $respuesta=$this->model->getPedidosDetalle($data->id);
            echo json_encode($respuesta);
        }
    }


?>