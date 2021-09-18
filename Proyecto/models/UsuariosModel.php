<?php

require_once 'config/conexion.php';

class UsuariosModel {

    private $con;

    // constructor
    public function __construct() {
        $this->con = Conexion::getConexion(); // :: para acceder a funciones  static
    }

    public function buscarUsuario($user, $pass) { // listar todos los Usuarios
        $sql = "select * from usuario where username = :user and password= :pass";
        // preparar la sentencia
        $stmt = $this->con->prepare($sql);
        $data = [
            'user' => $user,
            'pass' => $pass
        ];
         // ejecutar la sentencia
       $stmt->execute($data);
        // recuperar los datos (en caso de select)
        $usuario = $stmt->fetch(PDO::FETCH_NUM);
        return $usuario;
    }

    public function buscarUsuarioPorId($id){
        $sql="select * from usuario where idUsuario = :id";
        $sentencia = $this->con->prepare($sql);
        //binding parameters
        $data=[
            'id' => $id
        ];
        //execute
        $sentencia->execute($data);
        //retornar resultados
        $resultados = $sentencia->fetch(PDO::FETCH_OBJ);
        
       return $resultados;
    }
        
}
    