<?php
session_start();
class AdminController {
    private $model;

    public function __construct() {
    }

    public function index() {
        require_once 'views/principal.php';        
    }
}
?>