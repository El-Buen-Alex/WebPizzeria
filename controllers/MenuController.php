
<?php
require_once 'models/ProductoModel.php';

    class MenuController{
        private $model;
        public function __construct(){
            $this->model=new ProductoModel();
        }
        public function getProducts(){
            $preJson=$this->model->getProductos();
            $jsonProducts=json_encode($preJson);
            echo $jsonProducts;
        }
    }
?>