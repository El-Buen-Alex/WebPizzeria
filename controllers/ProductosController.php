
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
    }
?>