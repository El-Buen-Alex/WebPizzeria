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
        public function guardarDetallesCompra( $product_name, $product_cant, $product_price, $id_cabecera){
             //prepare
             $sql = "INSERT INTO pedido_detalle ( producto, precio_unitario, estado,cantidad, id_pedido_cabecera) VALUES 
             ( :producto, :precio_unitario, :estado, :cantidad, :id_pedido_cabecera)";
             //now());
             //bind parameters
             $sentencia = $this->con->prepare($sql);
             $estado='A';
             $data = [
                     'producto' => $product_name,
                     'precio_unitario' => $product_price,
                     'estado' => $estado,
                     'cantidad'=>$product_cant,
                     'id_pedido_cabecera'=>$id_cabecera
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
    }

?>