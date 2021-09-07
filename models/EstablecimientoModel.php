<?php
require_once 'config/conexion.php';
    class EstablecimientoModel{

        public function __construct() {
            $this->con = Conexion::getConexion();
        }
        public function getEstablecimientos (){
            $sql="select * from establecimiento where estado = 'A'";
            $sentencia = $this->con->prepare($sql);
            //execute
            $sentencia->execute();
            //retornar resultados
            $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        
            return $resultados;
        }
    }

?>