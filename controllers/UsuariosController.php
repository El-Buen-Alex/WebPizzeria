<?php
session_start();
require_once 'models/UsuariosModel.php';

class UsuariosController {

    private $model;

    public function __construct() {
        $this->model = new UsuariosModel();
    }

    // funcion del controlador
    public function index() {
        $user = htmlentities($_POST['usuario']);
        $pass = htmlentities($_POST['password']);
        
        //llamar al modelo
        $usuario = $this->model->buscarUsuario($user, $pass);

        if ($usuario == false) {
            require_once "views/login&register/Login&Register.php";
            echo '<script language="javascript">alert("Usuario y/o contraseña incorrectos");</script>';            
        }else{
            echo "entre";
            

        }       
    }

    public function crearSession() {
echo "entre";
        // $id = $usuario[0];
        // $nombre = $usuario[1];
        // $rol = $usuario[8];

        // $_SESSION["usuario"]["id"] = $id;
        // $idUser =  $_SESSION["usuario"]["id"];

        // $_SESSION["usuario"]["rol"] = $rol;
        // $rolUser =  $_SESSION["usuario"]["rol"];

        // redirigirRol($rolUser);
    }

    public function redirigirRol($rolUser) {
        switch ($rolUser) {
            case 1:
                header("location: index.php?c=admin&a=index");
                break;
            
            case 2:
                header("location: index.php");
                break;
        }
    }
}
    
    

