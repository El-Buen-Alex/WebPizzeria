<?php

    class VistareservasController{
        private $model;
        public function __construct() {
            
        }
        public function index(){
            require_once 'views/admin/reservasVista.php';
        }
    }

?>