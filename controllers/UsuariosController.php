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
        $exito = $this->model->validarUsuario($user, $pass);
        if (!$exito) {
            require_once "views/login&register/Login&Register.php";
            echo '<script language="javascript">alert("Usuario y/o contraseña incorrectos");</script>';            
        }else{
            switch ($_SESSION['rol']) {
                case 1:
                    header("location: index.php?c=admin&a=index");
                    break;
                
                case 2:
                    header("location: index.php");
                    break;
            }
        }
            
        }
    }
    

