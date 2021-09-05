<?php

require_once 'models/PizzeriaModel.php';

class PizzeriaController {
    private $model;

    public function __construct() {
        $this->model = new PizzeriaModel();
    }

    public function index() {
        require_once 'views/index.php';
    }
}
?>