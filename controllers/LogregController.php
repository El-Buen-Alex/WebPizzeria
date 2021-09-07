<?php

    class LogregController{
        private $model;
        public function __construct() {
            
        }

        public function index(){
            require_once 'views/login&register/Login&Register.php';
        }
    }

?>