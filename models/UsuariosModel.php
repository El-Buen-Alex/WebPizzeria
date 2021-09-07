<?php
session_start();

require_once 'config/conexion.php';

class UsuariosModel {

    private $con;

    // constructor
    public function __construct() {
        $this->con = Conexion::getConexion(); // :: para acceder a funciones  static
    }

    public function validarUsuario($user, $pass) { // listar todos los Usuarios
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
        if($usuario == true){
            $nombre = $usuario[1];
            $rol = $usuario[8];
            $_SESSION["usuario"] = $nombre;
            $_SESSION["rol"] = $rol;
            return true;
        }
            // retornar resultados
        return false;
    }
        

    }
    