

<?php
require_once 'models/ProductoModel.php';

    class MenuController{

         

        public function getProducts(){
            $pizza1= new Producto("resources/menu/Deluxe.png", 10, "Pizza Deluxe", "pizza");
            $pizza2= new Producto("resources/menu/Extra.png", 7, "Pizza Extra", "pizza");
            $pizza3= new Producto("resources/menu/Hawaiana.png", 8, "Pizza Hawaiana", "pizza");
            $pizza4= new Producto("resources/menu/Peperoni.png", 6, "Pizza con Peperoni", "pizza");
            $pizza5= new Producto("resources/menu/Tipica.png", 5, "Pizza Tipica", "pizza");
            $pizza6= new Producto("resources/menu/Tocino.png", 9, "Pizza con Tocino", "pizza");

            $pollo1= new Producto("resources/menu/polloBBQ.jpg", 5, "Pollo BBQ", "pollo");
            $pollo2= new Producto("resources/menu/polloPicante.jpg", 4, "Pollo Picante", "pollo");
            $pollo3= new Producto("resources/menu/polloTipico.jpg", 3, "Pollo Tipico", "pollo");

            $sadnwrich1= new Producto("resources/menu/sdwItaliano.png", 5, "Sandwich Italiano", "sdw");
            $sadnwrich2= new Producto("resources/menu/sdwQueso.png", 6, "Sandwich de Queso", "sdw");
            $sadnwrich3= new Producto("resources/menu/sdwTocino.png", 4, "Sandwich de Tocino", "sdw");

            $products = array($pizza1, $pizza2, $pizza3, $pizza4, $pizza5, $pizza6, $pollo1, $pollo2, $pollo3, $sadnwrich1, $sadnwrich2, $sadnwrich3);
            $preJson=array();
            foreach($products as $producto){
                $preJson[]=array(
                    'name' => $producto->getName(),
                    'urlImage' => $producto->getUrlImage(),
                    'price'=> $producto->getPrice(),
                    'type'=>$producto->getTye()
                );
            }
            $jsonProducts=json_encode($preJson);
            echo $jsonProducts;
        }
    }
?>