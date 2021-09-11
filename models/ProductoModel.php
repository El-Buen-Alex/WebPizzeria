<?php
require_once 'config/conexion.php';
    class ProductoModel{
        private $urlImage;
        private $price;
        private $name;
        private $type;

        private $con;
        public function __construct(){
            // $this->urlImage=$urlImage;
            // $this->type=$type;
            // $this->price=$price;
            // $this->name=$name;
            $this->con = Conexion::getConexion();
        }
        public function getProductos(){
            $sql="select * from producto where estado = 'A'";
            $sentencia = $this->con->prepare($sql);
            //execute
            $sentencia->execute();
            //retornar resultados
            $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            return $resultados;
        }
        public function getProductById($id){
            $sql="select * from producto where id_producto=:idProducto and estado = 'A'";
            $sentencia = $this->con->prepare($sql);
            $data=[
                'idProducto'=>$id
            ];
            //execute
            $sentencia->execute($data);
            //retornar resultados
            $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            return $resultados;
        }
        public function getProductsByNameOrType($name){
            $sql="select * from producto where name like :a or type like :b and  estado = 'A'";
            $sentencia = $this->con->prepare($sql);
            $nameLike='%'.$name.'%';
            $data=[
                'a'=>$nameLike,
                'b' =>$nameLike
            ];
            //execute
            $sentencia->execute($data);
            //retornar resultados
            $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            return $resultados;
        }
        public function eliminarProducto($id){
            $sql="UPDATE  producto set estado='N' where id_producto=:id and  estado = 'A'";
            $sentencia = $this->con->prepare($sql);
            $data=[
                'id'=>$id
            ];
            $sentencia->execute($data);
            //execute
            if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                //rowCount permite obtner el numero de filas afectadas
                return false;
            }
            return true;
        }
        public function addProducto($ruta, $nombre, $precio, $type){
            $sql="INSERT INTO producto (`name`, `urlImage`, `price`, `type`, `estado`) values (:nombre, :urlImg, :precio, :tipo, 'A')";
            $sentencia = $this->con->prepare($sql);
            $data=[
                'nombre'=>$nombre,
                'urlImg'=>$ruta,
                'precio'=>$precio,
                'tipo'=>$type
            ];
            $sentencia->execute($data);
            //execute
            if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                //rowCount permite obtner el numero de filas afectadas
                return false;
            }
            return true;
        
        }
    }
?>