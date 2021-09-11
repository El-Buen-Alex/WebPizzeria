
<?php
require_once 'models/ProductoModel.php';

    class ProductosController{
        private $model;
        public function __construct(){
            $this->model=new ProductoModel();
        }
        public function index(){
            require_once 'views/admin/productos/showProducts.php';
        }
        public function getProductsByNameOrType(){
            $data =  file_get_contents('php://input');
            $data=json_decode($data);
            $name=$data->nameP;
            $respuesta = $this->model->getProductsByNameOrType($name);
            echo json_encode($respuesta);
            
        }
        function getProductById(){
            $data =  file_get_contents('php://input');
            $data=json_decode($data);
            $id=$data->idProducto;
            $response=$this->model->getProductById($id);
           echo json_encode($response);
        }
        public function eliminarProducto(){
            $data =  file_get_contents('php://input');
            $data=json_decode($data);
            $id=$data->id;
            $respuesta = $this->model->eliminarProducto($id);
            if($respuesta){
                $resultado=$this->model->getProductos();
                echo json_encode($resultado);
            }
        }
        public function editProducto(){
            if ($_POST['ajax'] == 2){
                $tipo=$_POST['type'];
                $nombre= $_POST["name"];
                $precio= $_POST["price"];
                $id=$_POST["id_producto"];
                if(isset($_FILES['file'])){
                    $archivo=$_FILES['file']['name'];
                    $temp = $_FILES['file']['tmp_name'];
                    if (move_uploaded_file($temp, 'assets/resources/menu/'.$archivo)){
                         $ruta = 'assets/resources/menu/'.$archivo;
                         $this->model->editProductoAllData($ruta, $nombre, $precio,$tipo, $id);
                    }
                 }else{
                    $this->model->editProductoData($nombre, $precio,$tipo, $id);
                 }
                 $resultado=$this->model->getProductos();
                 echo json_encode($resultado);
            }
        }
        public function addProducto(){
            if ($_POST['ajax'] == 2){
                if(isset($_FILES['file'])){
                   $archivo=$_FILES['file']['name'];
                   $temp = $_FILES['file']['tmp_name'];
                   
                   $tipo=$_POST['type'];
                    $nombre= $_POST["name"];
                    $precio= $_POST["price"];
                   if (move_uploaded_file($temp, 'assets/resources/menu/'.$archivo)){
                        $ruta = 'assets/resources/menu/'.$archivo;
                        $this->model->addProducto($ruta, $nombre, $precio,$tipo);
                        $resultado=$this->model->getProductos();
                        echo json_encode($resultado);
                   }
                }
            }
        }
    }
?>