<?php
require_once 'config/conexion.php';
    class PedidosModel{

        public function __construct() {
            $this->con = Conexion::getConexion();
        }

        public function getIdUltimo(){
            $sql ="SELECT @@identity AS id";
            $sentencia= $this->con->prepare($sql);
            $sentencia->execute();
            $resultados = $sentencia->fetch();
            return $resultados;
        }

        public function insertarCabeceraPedidos($total, $direccion_entrega, $id_usuario, $fecha, $hora){
                $id_Cabecera=0;
                //prepare
                $sql = "INSERT INTO pedido_cabecera ( total,fecha_registro, direccion_entrega, estado, idUsuario, fecha_entrega, hora_entrega) VALUES 
                (:total,:fecha,:direccion_entrega, :estado, :id_usuario, :fechaEntrega, :hora)";
                //now());
                //bind parameters
                $sentencia = $this->con->prepare($sql);
                $fechaActual = new DateTime('NOW');
                $strfecha = $fechaActual->format('Y-m-d H:i:s');
                $estado='A';
                $data = [
                        'total' => +$total,
                        'fecha' => $strfecha,
                        'direccion_entrega' => $direccion_entrega,
                        'estado'=> $estado,
                        'id_usuario' => +$id_usuario,
                        'fechaEntrega'=> $fecha,
                        'hora'=>$hora
                ];
                //execute
                $sentencia->execute($data);
                //retornar resultados, 
                 if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                     //rowCount permite obtner el numero de filas afectadas
                    $id_Cabecera=-1;
                }else{
                    $id_Cabecera=$this->con->lastInsertId();
                    
                }
            return $id_Cabecera;
        }
        public function guardarDetallesCompra( $product_name, $product_cant, $product_price, $id_cabecera, $id_producto){
             //prepare
             $sql = "INSERT INTO pedido_detalle ( producto, precio_unitario, estado,cantidad, id_pedido_cabecera, id_producto) VALUES 
             ( :producto, :precio_unitario, :estado, :cantidad, :id_pedido_cabecera, :id_producto)";
             //now());
             //bind parameters
             $sentencia = $this->con->prepare($sql);
             $estado='A';
             $data = [
                     'producto' => $product_name,
                     'precio_unitario' => $product_price,
                     'estado' => $estado,
                     'cantidad'=>$product_cant,
                     'id_pedido_cabecera'=>$id_cabecera,
                     'id_producto'=>$id_producto
             ];
             //execute
             $sentencia->execute($data);
             //retornar resultados, 
              if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                  //rowCount permite obtner el numero de filas afectadas
                    return false;
             }else{
                 return true;
             }
        }
        public function getPedidos($id){
            $sql = "select * from pedido_cabecera where estado='A' and idUsuario=:id";
            // preparar la sentencia
            $stmt = $this->con->prepare($sql);
            $data = [
                'id' => $id
            ];
            // ejecutar la sentencia
            $stmt->execute($data);
            // recuperar los datos (en caso de select)
            $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
            // retornar resultados
            return $resultados;
        }
        public function cancelarPedidoCabecera($id){
            //prepare
            $sql = "UPDATE pedido_cabecera SET estado='N' WHERE idpedido_cabecera=:id and estado='A'";
            //now());
            //bind parameters
            $sentencia = $this->con->prepare($sql);
           
            $data = [
                'id' => +$id          
            ];
            //execute
            $sentencia->execute($data);
            //retornar resultados, 
            if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                //rowCount permite obtner el numero de filas afectadas
                return false;
            }
            return true;
        }

        public function cancelarPedidoDetalle($id){
            //prepare
            $sql = "UPDATE pedido_detalle SET estado='N' WHERE id_pedido_cabecera=:id and estado='A'";
            //now());
            //bind parameters
            $sentencia = $this->con->prepare($sql);
           
            $data = [
                'id' => +$id          
            ];
            //execute
            $sentencia->execute($data);
            //retornar resultados, 
            if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                //rowCount permite obtner el numero de filas afectadas
                return false;
            }
            return true;
        }
        function editarPedidoCabecera($idCabcera, $direccion, $fecha, $hora){
             //prepare
             $sql = "UPDATE pedido_cabecera SET direccion_entrega=:direccion, fecha_entrega=:fecha, hora_entrega=:hora
              WHERE idpedido_cabecera=:id and estado='A'";
             //now());
             //bind parameters
             $sentencia = $this->con->prepare($sql);
            
             $data = [
                 'id' => +$idCabcera,
                 'direccion'=>$direccion,
                 'fecha' => $fecha,
                 'hora'=>$hora         
             ];
             //execute
             $sentencia->execute($data);
             //retornar resultados, 
             if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                 //rowCount permite obtner el numero de filas afectadas
                 return false;
             }
             return true;
        }
        function getPedidosDetalle($id){

            $sql="SELECT * FROM pedido_detalle where id_pedido_cabecera=:idCabecera and estado='A'";
            $sentencia = $this->con->prepare($sql);
            $data = [
                'idCabecera' => +$id        
            ];
            $sentencia->execute($data);
            $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            return $resultados;
        }
        function ActualizarTotal($total, $idpedido_cabecera){
             //prepare
             $sql = "UPDATE pedido_cabecera SET total=:total WHERE idpedido_cabecera=:id and estado='A'";
             //now());
             //bind parameters
             $sentencia = $this->con->prepare($sql);
            
             $data = [
                 'id' => +$idpedido_cabecera,
                 'total'=>$total
             ];
             //execute
             $sentencia->execute($data);
             //retornar resultados, 
             if ($sentencia->rowCount() <= 0) {// verificar si se inserto 
                 //rowCount permite obtner el numero de filas afectadas
                 return false;
             }
             return true;
        }
    }

?>