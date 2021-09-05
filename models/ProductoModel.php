<?php
    class Producto{
        private $urlImage;
        private $price;
        private $name;
        private $type;

        public function __construct($urlImage, $price, $name, $type){
            $this->urlImage=$urlImage;
            $this->type=$type;
            $this->price=$price;
            $this->name=$name;
        }
        public function getUrlImage(){
            return $this->urlImage;
        }
    
       public function getTye(){
           return $this->type;
       }
        public function getPrice(){
            return $this->price;
        }
        public function getName(){
            return $this->name;
        }

    }
?>